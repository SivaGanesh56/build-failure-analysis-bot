import React from "react";

type Props = {
  title: string;
  description: string;
};

const HeroBanner = ({ title, description }: Props) => {
  if (!Boolean(title)) throw new Error("Title is missing");
  return (
    <div className="border-2 border-black dark:border-white min-w-60">
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default HeroBanner;
