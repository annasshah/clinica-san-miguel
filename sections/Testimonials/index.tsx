"use client";

import { useRef } from "react";

import { Testimonial } from "@/components";
import { styles } from "@/app/styles";
import testimonials from "./testimonials.json";
import { SampleNextArrow, SamplePrevArrow } from "@/utils";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const Testimonials = ({
  headingFlag,
  mode,
}: {
  headingFlag: boolean;
  mode: string;
}) => {
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
        breakpoint: 1564,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 1,
        },
      },
      {
        breakpoint: 1118,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          // rows: 2,
          // slidesPerRow: 1,
        },
      },
      {
        breakpoint: 704,
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
      <section className="flex flex-col justify-center w-full items-center my-5 px-4">
        {headingFlag && (
          <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
            Testinomials
          </h1>
        )}
        <p
          className={`${styles.sectionSubText} text-[#19192C] text-center px-5`}
        >
          Real Stories, Real Impact: The Voice of Satisfied Clients
        </p>
        <div className="w-[100vw] sm:w-[95vw] md:w-[80vw] lg:w-[75vw] xl:w-[70vw] block justify-center h-auto px-8  my-10">
          <Slider ref={slider} {...settings}>
            {testimonials.map((testimonial) => {
              return (
                <Testimonial
                  comment={testimonial.comment}
                  author={testimonial.author}
                  key={testimonial.id}
                  ratings={testimonial.ratings}
                  mode={mode}
                />
              );
            })}
          </Slider>
        </div>
      </section>
    </>
  );
};
