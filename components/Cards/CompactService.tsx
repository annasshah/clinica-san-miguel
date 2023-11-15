"use client";

import Image from "next/image";
import { useState } from "react";

export const CompactService = ({
  heading,
  icon,
  description,
  mode,
}: {
  heading: string;
  icon: any;
  description: string;
  mode: string;
}) => {
  const dark = {
    backgroundColor: "#3D3D3C",
    textColor: "#F8F5F0",
    iconColor: "#F8F5F0",
  };

  const light = {
    backgroundColor: "#F8F5F0",
    textColor: "#3D3D3C",
    iconColor: "#3D3D3C",
  };

  const [theme, setTheme] = useState(mode === "dark" ? dark : light);

  return (
    <article
      className="w-[330px] h-[330px] m-5 rounded-[10px] flex flex-col justify-evenly p-5 py-14"
      style={{
        backgroundColor: `${theme.backgroundColor}`,
        boxShadow: "2px 3px 6px 6px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10">
          <div className="rounded-full flex w-10 h-10 justify-center items-center bg-[#C1001F]">
            <Image
              src={icon}
              alt={"service icon"}
              className="object-contain w-5 h-5 aspect-auto"
            />
          </div>
        </div>
        <h1
          className="font-semibold font-antipasto text-[25px] capitalize"
          style={{ color: `${theme.textColor}` }}
        >
          {heading}
        </h1>
      </div>
      <div className="overflow-y-auto">
        <p
          className="text-[16px] font-inter text-left"
          style={{ color: `${theme.textColor}` }}
        >
          {description}
        </p>
      </div>
    </article>
  );
};
