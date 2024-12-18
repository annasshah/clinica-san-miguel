"use client";

import { CompactService } from "@/components";

import { styles } from "@/app/[locale]/styles";
import Image from "next/image";
import { viewAllArrow } from "@/assets/images";
import { Link } from "@/navigation";
import { useSupabase } from "@/context/supabaseContext";
import { useLocale, useTranslations } from "next-intl";

export const Services = () => {
  const t = useTranslations("common");
  const locale = useLocale();

  const { services, services_es } = useSupabase();

  const data = locale === "es" ? services_es : services;

  return (
    <section className="flex flex-col relative gap-6 my-10 p-3 w-[100vw] md:w-[90vw] lg:w-[85vw] xl:w-[75vw]">
      <div className="flex flex-col justify-center items-center">
        <p className={`${styles.sectionSubText} text-[#19192C]`}>
          {t("services_sub_title")}
        </p>
        <h1 className={`${styles.sectionHeadText} text-[#C1001F] `}>
          {t("services_title")}
        </h1>
      </div>
      <Link href={"/services"}>
        <div className="flex justify-end items-end flex-col">
          <p className="text-[14px] text-[#626262] font-poppins">View more</p>
          <Image
            src={viewAllArrow}
            alt={"view all arrow icon"}
            className="w-[75px] aspect-auto"
          />
        </div>
      </Link>
      <article className="flex flex-wrap justify-center h-auto mx-auto ">
        {data.slice(0, 6).map((service) => (
          <CompactService
            id={service.id}
            heading={service.title}
            icon={service.icon}
            description={service.description}
            mode={service.id % 2 === 0 ? "light" : "dark"}
            key={service.id}
          />
        ))}
      </article>
    </section>
  );
};
