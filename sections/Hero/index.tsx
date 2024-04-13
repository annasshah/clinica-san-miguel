"use client";

import { Logo } from "@/assets/images";
import { topSectionCover } from "@/assets/images/cover";
import { HeroBox } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import { Button, IconButton } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FaPhoneFlip } from "react-icons/fa6";

export const Hero = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  // const heading = "Proper care of your body for life";
  // const description =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const { heroSection, heroSection_es } = useSupabase();

  const data = currentLocale === "es" ? heroSection_es[0] : heroSection[0];

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
                text={"Get Appointment"}
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
              <h2 className="text-[35px] lg:text-[50px] text-[#19192C] font-semibold font-poppins">
                Office visits for only{" "}
                <span className="text-[#C1001F]">$19!</span>
              </h2>
              <p className="text-[16px] text-[#6B6B6B]">
                Experience affordable care at our clinic.
              </p>
            </div>
            <div className="flex gap-7 justify-center md:justify-start items-center">
              <Button
                text={"Book now!"}
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
