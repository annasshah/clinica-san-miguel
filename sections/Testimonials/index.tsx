"use client";

import { useRef } from "react";

import { Testimonial } from "@/components";
import testimonials from "./testimonials.json";
import { SampleNextArrow, SamplePrevArrow } from "@/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonials = ({ headingFlag }: { headingFlag: boolean }) => {
  const slider = useRef(null);

  const settings = {
    dots: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
        breakpoint: 1550,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 1,
        },
      },
      {
        breakpoint: 840,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          // arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          // rows: 3,
          // slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        {headingFlag && (
          <h1 className="text-[70px] text-[#C1001F] font-antipasto">
            testinomials
          </h1>
        )}

        <div className="w-[70vw] xl:w-[85vw] mobile:w-[99vw] block justify-center h-auto mx-auto my-10">
          <Slider ref={slider} {...settings}>
            {testimonials.map((testimonial) => {
              return (
                <Testimonial
                  comment={testimonial.comment}
                  author={testimonial.author}
                  key={testimonial.id}
                  ratings={testimonial.ratings}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};
