/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "./client";

import type {
  Asset,
  EntriesQueries,
  Entry,
  EntrySkeletonType,
} from "contentful";

type Response<T> = {
  errors?: any[];
  total: number;
  items: T[];
};

interface FlattenedObject {
  [key: string]: any;
}

type Callback<T> = (skip: number, limit: number) => Promise<Response<T>>;

export const recurse = async <T = any>(
  callback: Callback<T>,
  skip: number = 0,
  limit: number = 100
): Promise<T[]> => {
  const response = await callback(skip, limit);

  if (response.errors) {
    throw new Error(
      JSON.stringify({
        skip,
        limit,
        errors: response.errors,
      })
    );
  }

  if (response.total > limit + skip) {
    const next = await recurse(callback, skip + limit, limit);
    return [...response.items, ...next];
  }

  return response.items;
};

const flattenEntry = (
  entry: Entry,
  processedEntitiesMap: Map<string, object>
) => {
  if (processedEntitiesMap.has(entry.sys.id)) {
    return processedEntitiesMap.get(entry.sys.id);
  } else {
    const flattenedEntry: FlattenedObject = {
      contentType: entry.sys.contentType?.sys.id,
      id: entry?.sys?.id,
    };
    processedEntitiesMap.set(entry.sys.id, flattenedEntry);

    const fields = flattenAndOmitMetadataAndSys(
      entry["fields"],
      processedEntitiesMap
    );

    for (const fieldKey in fields) {
      flattenedEntry[fieldKey] = fields[fieldKey];
    }

    return flattenedEntry;
  }
};

const flattenAsset = (
  asset: Asset,
  processedEntitiesMap: Map<string, object>
) => {
  const flattenedAsset: FlattenedObject = {
    id: asset?.sys?.id,
  };

  const fields = flattenAndOmitMetadataAndSys(
    asset["fields"],
    processedEntitiesMap
  );

  for (const fieldKey in fields) {
    flattenedAsset[fieldKey] = fields[fieldKey];
  }

  return flattenedAsset;
};

/**
 * TODO:
 * - Fix types here
 * - Add unit tests
 */

export function flattenAndOmitMetadataAndSys(
  entry: Entry | any,
  processedEntitiesMap: Map<string, object> = new Map()
): FlattenedObject | any {
  if (typeof entry !== "object" || !entry) {
    return entry;
  }

  if (Array.isArray(entry)) {
    return entry.map((item) =>
      flattenAndOmitMetadataAndSys(item, processedEntitiesMap)
    );
  }

  // Entry
  if ("sys" in entry && entry.sys.type === "Entry") {
    return flattenEntry(entry, processedEntitiesMap);
  }

  // Asset
  if ("sys" in entry && entry.sys.type === "Asset") {
    return flattenAsset(entry, processedEntitiesMap);
  }

  const result: FlattenedObject = {};

  for (const key in entry) {
    result[key] = flattenAndOmitMetadataAndSys(
      entry[key],
      processedEntitiesMap
    );
  }

  return result;
}

// TODO: Fix types
export async function fetchEntry<
  T extends EntrySkeletonType = EntrySkeletonType
>(
  contentType: string,
  options: EntriesQueries<T, undefined>
): Promise<unknown> {
  try {
    const entry = (
      await client.getEntries({
        content_type: contentType,
        ...options,
        include: 10,
      })
    ).items[0];

    const result = flattenAndOmitMetadataAndSys(entry);

    return result;
  } catch (error) {
    console.error("Error: fetchEntry", error);
    throw error;
  }
}
