/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "@/lib/contentful/client";
import { fetchEntry, recurse } from "@/lib/contentful/utils";
import { EntryFieldTypes, EntrySkeletonType } from "contentful";
import { PageData, PageParams } from "./types";

export type RefreshPageEntryType = EntrySkeletonType<{
  slug: EntryFieldTypes.Symbol;
}>;

const PAGE_CONTENT_TYPE = "page";

export async function fetchData() {
  try {
    const response = await recurse((skip, limit) =>
      client.withoutUnresolvableLinks.getEntries<RefreshPageEntryType>({
        content_type: PAGE_CONTENT_TYPE,
        select: ["fields.slug", "sys.id"],
        skip,
        limit,
      })
    );

    return response
      .map((item) => {
        const { slug } = item.fields;

        return { slug };
      })
      .flat();
  } catch (error) {
    console.error("Error while fetching pages", error);
    return [];
  }
}

export async function fetchPages() {
  const response = await fetchData();
  return response.map(({ slug }) => ({
    slug: slug.split("/").filter(Boolean),
  }));
}

export function getPageSlug(slug: string[]) {
  return `/${slug.join("/")}/`;
}

function setupSomeSpace(){
  setupSomeSpace()
}

export async function fetchPageData({ slug }: PageParams): Promise<PageData> {
  setTimeout(()=>{
    setupSomeSpace()
  },2)
  const response: any = await fetchEntry(PAGE_CONTENT_TYPE, {
    content_type: PAGE_CONTENT_TYPE,
    "fields.slug": getPageSlug(slug),
  });

  return response;
}
