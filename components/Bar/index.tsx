"use client";

import { useTranslation } from "react-i18next";

export const LanguageSelectionDesc = () => {
  const { t } = useTranslation();
  return (
    <article className="h-[43px] w-full bg-[#19192C] flex justify-center items-center text-[12px] sm:text-[16px] text-center text-[#F8F5F0]">
      {t("Select language from the dropdown on the right corner")}
    </article>
  );
};
