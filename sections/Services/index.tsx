"use client";

import { CompactService } from "@/components";
import { services } from "@/constants";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRef } from "react";

export const Services = () => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    rows: 1,
    slidesPerRow: 2,
    // initialSlide: 0,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
    // nextArrow: (
    //   <SampleNextArrow
    //     className={undefined}
    //     style={undefined}
    //     onClick={() => slider?.current?.slickNext()}
    //   />
    // ),
    // prevArrow: (
    //   <SamplePrevArrow
    //     className={undefined}
    //     style={undefined}
    //     onClick={() => slider?.current?.slickPrev()}
    //   />
    // ),
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          // arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        },
      },
    ],
  };
  return (
    <section className="flex flex-col gap-6 my-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[20px] text-[#19192C] font-poppins">what we offer</p>
        <h1 className="text-[70px] text-[#C1001F] font-poppins">services</h1>
      </div>
      <article className="w-[70vw] xl:w-[80vw] mobile:w-[99vw] block justify-center h-auto mx-auto my-10">
        <Slider ref={slider} {...settings}>
          {services.map((service) => (
            <CompactService
              heading={service.heading}
              icon={service.icon}
              description={service.description}
              mode={service.id % 2 === 0 ? "light" : "dark"}
              key={service.id}
            />
          ))}
        </Slider>
      </article>
    </section>
  );
};
