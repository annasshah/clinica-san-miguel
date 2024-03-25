"use client";

import { styles } from "@/app/[locale]/styles";
import { Location } from "@/components";
// import {
//   Houston,
//   Arlington,
//   Dallas,
//   Fresno,
//   Pasadena,
//   FortWorth,
//   SanAntonio,
// } from "@/assets/images";

// Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// Arrows icons
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useSupabase } from "@/context/supabaseContext";
import { useTranslation } from "react-i18next";

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        fontSize: "52px",
        opacity: "1",
        color: "#626262",
        transform: `translateX(${170}%`,
      }}
    >
      <IoIosArrowForward />
    </button>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        // ...style,
        fontSize: "52px",
        opacity: "1",
        color: "#626262",
        transform: `translateX(${-270}%`,
      }}
    >
      <IoIosArrowBack />
    </div>
  );
}

export const Locations = () => {
  const settings = {
    dots: false,
    arrows: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "60px",
    rows: 1,
    // slidesPerRow: 2,
    initialSlide: 0,
    // appendDots: (dots: any) => <ul>{dots}</ul>,
    // customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          // arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 2,
        },
      },
    ],
  };

  const { t } = useTranslation(["common"]);
  // const currentLocale = i18n.language;

  // console.log("LOCale:", locale);

  const { locations } = useSupabase();

  return (
    <section className="flex flex-col justify-center items-center my-14">
      <h1 className={`${styles.sectionHeadText} text-[#C1001F] uppercase`}>
        {t("location_title")}
      </h1>
      <h3 className={`${styles.sectionSubText} text-[#000000]`}>
        {t("location_sub_title")}
      </h3>

      <article className="w-[100vw] xsm:w-[65vw] sm:w-[70vw] md:w-[65vw] lg:w-[50vw] block justify-center h-[250px] mx-auto my-10">
        <Slider {...settings}>
          {locations.map((location) => (
            <Location
              key={location.id}
              locationName={location.title}
              number={location.phone}
              route={""}
              location={location.direction}
              id={null}
            />
          ))}
        </Slider>
      </article>
    </section>
  );
};
// <div
//   key={location.id}
//   className="flex flex-col items-center justify-center"
// >
//   <div className="w-[350px] h-[350px]">
//     <Image
//       src={location.images}
//       alt={location.name}
//       className="aspect-auto object-contain w-full h-full"
//     />
//   </div>
//   <p className="text-[#19192C] font-inter text-[16px]">
//     {location.name}
//   </p>
// </div>
