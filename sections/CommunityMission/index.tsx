"use client";

import { Mission } from "@/components";
import { styles } from "@/app/[locale]/styles";
import { useSupabase } from "@/context/supabaseContext";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const CommunityMission = () => {
  const t = useTranslations("home");
  const router = useRouter();
  const locale = useLocale();

  const { mission, mission_es } = useSupabase();

  const data = locale === "es" ? mission_es : mission;

  return (
    <section className="flex w-full flex-col items-center bg-[#19192C] py-[4%]">
      <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
        {t("community_mission_title")}
      </h1>
      <h3 className={`${styles.sectionSubText} text-[#F8F5F0]`}>
        {t("community_mission_sub_title")}
      </h3>
      <div className="w-full md:w-[80%] h-1 bg-white rounded-full my-[3%]"></div>
      <div className="flex flex-wrap justify-center items-center gap-7 lg:w-[80%]">
        {data.map((item) => (
          <Mission
            key={item.id}
            icon={item.Icon}
            heading={item.Title}
            content={item.Text}
          />
        ))}
      </div>
    </section>
  );
};
