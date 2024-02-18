"use client";

import { styles } from "@/app/styles";
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

  const { locations } = useSupabase();

  // const locations = [
  //   {
  //     id: 1,
  //     images: Houston,
  //     name: "San Miguel Clinic, Houston, TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  //   {
  //     id: 2,
  //     images: Arlington,
  //     name: "San Miguel Clinic, Arlington, TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  //   {
  //     id: 3,
  //     images: Dallas,
  //     name: "San Miguel Clinic, Dallas, TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  //   {
  //     id: 4,
  //     images: Fresno,
  //     name: "San Miguel Clinic, Fresno, TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  //   {
  //     id: 5,
  //     images: Pasadena,
  //     name: "San Miguel Clinic, pasadena , TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  //   {
  //     id: 6,
  //     images: FortWorth,
  //     name: "San Miguel Clinic, fort worth , TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  //   {
  //     id: 7,
  //     images: SanAntonio,
  //     name: "San Miguel Clinic, san antonio , TX",
  //     number: "469-809-2047",
  //     location:
  //       "!1m18!1m12!1m3!1d3355.764805032311!2d-96.82054992371607!3d32.7454353855983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e99973c005cb9%3A0xc8ae707a71769ed1!2s428%20E%20Jefferson%20Blvd%2C%20Dallas%2C%20TX%2075203%2C%20USA!5e0!3m2!1sen!2s!4v1701718238221!5m2!1sen!2s",
  //   },
  // ];

  return (
    <section className="flex flex-col justify-center items-center my-14">
      <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
        OUR LOCATIONS
      </h1>
      <h3 className={`${styles.sectionSubText} text-[#000000]`}>
        Choose your preferred location
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
