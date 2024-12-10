import React from "react";
import { fetchPageData, fetchPages } from "./data";
import Image from "next/image";

export async function generateStaticParams() {
  const pages = await fetchPages();
  return pages.map((page) => ({
    id: page.slug,
  }));
}

const Page = async ({ params }: { params: { slug: string[] } }) => {
  const pageData = await fetchPageData(params);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          Currently viewing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibdivd">
            {pageData.slug}
          </code>
        </div>
      </main>
    </div>
  );
};

export default Page;
