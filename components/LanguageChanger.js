"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import { useEffect, useState } from "react";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const [currentLocale, setCurrentLocale] = useState("");
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    if (newLocale === currentLocale) return;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push(`/${newLocale}${currentPathname}`);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  useEffect(() => {
    if (i18n.language) {
      setCurrentLocale(i18n.language);
    }
  }, [i18n.language]);

  return (
    <div className="relative">
      <select
        onChange={handleChange}
        value={currentLocale}
        defaultValue={currentLocale}
        className="cursor-pointer appearance-none bg-transparent flex justify-between gap-3 items-center"
      >
        <option value="en">en</option>
        <option value="es">es</option>
      </select>
    </div>
  );
}
