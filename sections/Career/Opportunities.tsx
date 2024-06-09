"use client";

import { useSupabase } from "@/context/supabaseContext";
import { useLocale } from "next-intl";

export const Opportunities = () => {
  const locale = useLocale();

  const { career, career_es } = useSupabase();

  const opportunities = locale === "es" ? career_es : career;
  return (
    <>
      {opportunities.map((item, index) => (
        <li
          className="list-disc text-[16px] xl:text-[20px] text-[#000000] font-poppins"
          key={index}
        >
          {item.Text}
        </li>
      ))}
    </>
  );
};
