"use client";

import { useSupabase } from "@/context/supabaseContext";
import { useTranslation } from "react-i18next";

export const Opportunities = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const { career, career_es } = useSupabase();

  const opportunities = currentLocale === "es" ? career : career_es;
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
