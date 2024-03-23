"use client";

import { CompactService } from "@/components";
// import { services } from "@/constants";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import { useRef } from "react";
import { styles } from "@/app/[locale]/styles";
import Image from "next/image";
import { viewAllArrow } from "@/assets/images";
import Link from "next/link";
import { useSupabase } from "@/context/supabaseContext";
import { useTranslation } from "react-i18next";

export const Services = () => {
  // const slider = useRef(null);

  // const settings = {
  //   dots: true,
  //   arrows: true,
  //   dotsClass: "slick-dots",
  //   infinite: true,
  //   speed: 400,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   centerPadding: "60px",
  //   rows: 1,
  //   slidesPerRow: 2,
  //   // initialSlide: 0,
  //   appendDots: (dots: any) => <ul>{dots}</ul>,
  //   customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
  //   // nextArrow: (
  //   //   <SampleNextArrow
  //   //     className={undefined}
  //   //     style={undefined}
  //   //     onClick={() => slider?.current?.slickNext()}
  //   //   />
  //   // ),
  //   // prevArrow: (
  //   //   <SamplePrevArrow
  //   //     className={undefined}
  //   //     style={undefined}
  //   //     onClick={() => slider?.current?.slickPrev()}
  //   //   />
  //   // ),
  //   responsive: [
  //     {
  //       breakpoint: 1350,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 1,
  //         rows: 2,
  //         slidesPerRow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 840,
  //       settings: {
  //         // arrows: false,
  //         slidesToShow: 2,
  //         slidesToScroll: 1,
  //         rows: 2,
  //         slidesPerRow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 425,
  //       settings: {
  //         // arrows: false,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         rows: 2,
  //         slidesPerRow: 2,
  //       },
  //     },
  //   ],
  // };
  const { t, i18n } = useTranslation();
  const currentLocale = i18n.language;

  const { services, services_es } = useSupabase();

  const data = currentLocale === "es" ? services_es : services;

  return (
    <section className="flex flex-col relative gap-6 my-10 p-3 w-[100vw] md:w-[90vw] lg:w-[85vw] xl:w-[75vw]">
      <div className="flex flex-col justify-center items-center">
        <p className={`${styles.sectionSubText} text-[#19192C]`}>
          {t("what we offer")}
        </p>
        <h1 className={`${styles.sectionHeadText} text-[#C1001F] `}>
          {t("services")}
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
