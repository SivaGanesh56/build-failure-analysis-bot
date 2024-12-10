/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "./client.js";

export const recurse = async (callback, skip = 0, limit = 100) => {
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

const flattenEntry = (entry, processedEntitiesMap) => {
  if (processedEntitiesMap.has(entry.sys.id)) {
    return processedEntitiesMap.get(entry.sys.id);
  } else {
    const flattenedEntry = {
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

const flattenAsset = (asset, processedEntitiesMap) => {
  const flattenedAsset = {
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

export function flattenAndOmitMetadataAndSys(
  entry,
  processedEntitiesMap = new Map()
) {
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

  const result = {};

  for (const key in entry) {
    result[key] = flattenAndOmitMetadataAndSys(
      entry[key],
      processedEntitiesMap
    );
  }

  return result;
}

export async function fetchEntry(contentType, options) {
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

const PAGE_CONTENT_TYPE = "page";

export const withTrailingSlash = (s) => (s.endsWith("/") ? s : `${s}/`);

export const withLeadingSlash = (s) => (s.startsWith("/") ? s : `/${s}`);

export async function fetchPageData({ slug }) {
  const response = await fetchEntry(PAGE_CONTENT_TYPE, {
    content_type: PAGE_CONTENT_TYPE,
    "fields.slug": withLeadingSlash(withTrailingSlash(slug)),
  });

  return response;
}
