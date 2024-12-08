"use client";

import { Logo } from "@/assets/images";
import { topSectionCover } from "@/assets/images/cover";
import { HeroBox } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import { Button, IconButton } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { FaPhoneFlip } from "react-icons/fa6";

export const Hero = () => {
  const t = useTranslations("home");
  const router = useRouter();
  const locale = useLocale();
  const { heroSection, heroSection_es } = useSupabase();

  const data = locale === "es" ? heroSection_es[0] : heroSection[0];

  const go_to_contact_handle = () => {
    router.push(`/contact`);
  };

  return (
    <section className=" flex flex-col gap-20 justify-center md:justify-start items-center md:items-start">
      <article className="flex flex-col mt-[10%] sm:mt-[5%] md:mt-10 md:flex-row w-[95%] lg:w-[100%] justify-center items-center gap-10">
        <div className="flex flex-col items-end justify-end gap-5 w-auto order-2 md:order-1 md:w-1/2">
          <div className="w-[100%] md:w-[95%] lg:w-[80%] xl:w-[60%] flex flex-col gap-5">
            <div className="text-[25px] md:text-[30px] text-center md:text-left lg:text-[48px] leading-[25px] md:leading-[30px] lg:leading-[48px] font-poppins font-bold text-[#000000]">
              {data?.title}
            </div>
            <p className="text-[16px] text-center md:text-left font-poppins text-[#19192C] leading-[25px]">
              {data?.content}
            </p>

            <div className="flex gap-7 justify-center md:justify-start items-center">
              <Button
                text={t("hero_section_button")}
                size={{ width: "270px", height: "73px" }}
                route={""}
                bgColor={"#3D3D3C"}
                textColor={"#ffffff"}
                onClick={go_to_contact_handle}
              />
              <IconButton
                size={{ width: "75px", height: "75px" }}
                icon={<FaPhoneFlip />}
                bgColor="#C1001F"
                fontSize={"30px"}
                route={""}
                onClick={go_to_contact_handle}
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] sm:w-[90%] flex justify-center md:justify-start order-1 md:order-2 md:w-1/2">
          <HeroBox />
        </div>
      </article>
    </section>
  );
};

export const HeroTopSection = () => {
  const t = useTranslations("home");
  const router = useRouter();

  const redirectToContact = () => {
    router.push(`/contact`);
  };

  return (
    <main className="flex flex-col relative gap-6 w-[100vw]">
      <article className="flex flex-col mt-[10%] sm:mt-[5%] md:mt-10 md:flex-row w-[95%] lg:w-[100%] justify-center items-center gap-10">
        <div className="md:flex md:justify-end md:items-end md:w-1/2 order-2 md:order-1">
          <Image
            alt=""
            src={topSectionCover}
            className="w-full aspect-auto object-contain"
          />
        </div>
        <article className="w-full md:w-1/2 flex justify-start order-1 md:order-2">
          <div className="w-[100%]  flex flex-col items-center justify-center gap-5">
            <Image alt="" src={Logo} className="w-[300px] aspect-auto" />
            <div className="flex flex-col justify-center items-center">
              <h2 className="text-[25px] sm:text-[35px] lg:text-[50px]  font-semibold font-poppins">
                {t("section1_title")}<span className="text-headingColor text-[40px] sm:text-[45px] lg:text-[60px] font-bold"> $19!</span>
                {/* <span className="text-[#C1001F]">$19!</span> */}
              </h2>
              <p className="text-[16px] text-[#6B6B6B]">
                {t("section1_subtitle")}
              </p>
            </div>
            <div className="flex gap-7 justify-center md:justify-start items-center">
              <Button
                text={t("section1_button")}
                size={{ width: "214px", height: "55px" }}
                route={""}
                bgColor={"#C1001F"}
                textColor={"#ffffff"}
                onClick={redirectToContact}
              />
            </div>
          </div>
        </article>
      </article>
    </main>
  );
};
