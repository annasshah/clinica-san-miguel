"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
// import Image from "next/image";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { Dropdown } from "@/utils";
// import { USA_flag } from "@/assets/images";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <div className="relative">
      <select
        onChange={handleChange}
        value={currentLocale}
        className="cursor-pointer appearance-none bg-transparent flex justify-between gap-3 items-center"
      >
        <option value="en">
          {/* <Image
            src={USA_flag}
            alt="usa flag"
            className="w-[30px] aspect-auto"
          /> */}
          en
        </option>
        <option value="es">
          {/* <Image
            src={USA_flag}
            alt="usa flag"
            className="w-[30px] aspect-auto"
          /> */}
          es
        </option>
      </select>
    </div>
  );
}
