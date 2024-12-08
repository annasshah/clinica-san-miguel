"use client";

import { styles } from "@/app/[locale]/styles";
import { viewAllArrow } from "@/assets/images";
import { Treatment } from "@/components";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "@/navigation";
import Image from "next/image";
import { useSupabase } from "@/context/supabaseContext";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export const Treatments = () => {
  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,

    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 1,
        },
      },
      {
        breakpoint: 704,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1,
        },
      },
    ],
  };

  const t = useTranslations("home");
  const locale = useLocale();

  const { services, services_es } = useSupabase();

  const data = locale === "es" ? services_es : services;

  return (
    <section className="flex flex-col  justify-center gap-10 my-[5%] mx-14 w-[100vw] md:w-[96vw] lg:w-[95vw] xl:w-[75vw]">
      <article className="flex w-full flex-col gap-5 items-center">
        <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
          {t("treatments_title")}
        </h1>
        <p className={`${styles.sectionSubText} text-[#19192C]`}>
          &quot;
          {t("treatments_sub_title")}
          &quot;
        </p>
      </article>
      <Link href={"/services"}>
        <div className="flex justify-end items-end flex-col mr-10">
          <p className="text-[14px] text-[#626262] font-poppins">View more</p>
          <Image
            src={viewAllArrow}
            alt={"view all arrow icon"}
            className="w-[75px] aspect-auto"
          />
        </div>
      </Link>
      <div className="w-[100vw] md:w-[96vw] lg:w-[95vw] xl:w-[75vw] block justify-center h-auto mx-auto my-10">
        <Slider {...settings}>
          {data
            .filter((elem) => elem.id !== 25)
            .sort((a,b)=>a.id - b.id).slice(0, 6)
            .map((treatment) => (
              <Treatment
                id={treatment.id}
                heading={treatment.title}
                image={treatment.image}
                icon={treatment.icon}
                description={treatment.description}
                // mode={treatment.id % 2 === 0 ? "dark" : "light"}
                mode={"light"}
                key={treatment.id}
              />
            ))}
        </Slider>
      </div>
    </section>
  );
};
