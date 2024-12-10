import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  url: string;
};

const AuthorInfo = ({ title, url }: Props) => {
  return (
    <div className="w-full flex justify-center border-2 border-black dark:border-white min-w-60">
      <div className="bg-red-200">
        <div className="text-lg">{title}</div>
        <Link href={url}>Link</Link>
      </div>
    </div>
  );
};

export default AuthorInfo;
