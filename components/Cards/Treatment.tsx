"use client";

import { useState } from "react";

export const Treatment = ({
  heading,
  image,
  icon,
  description,
  mode,
}: {
  heading: string;
  image: any;
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
      className={`w-[300px] h-[420px] rounded-[10px]`}
      style={{ backgroundColor: `${theme.backgroundColor}` }}
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </article>
  );
};
