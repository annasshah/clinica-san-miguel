"use client";

import { ClosingCommas, OpeningCommas } from "@/assets/images";

import Image from "next/image";

import StarRatings from "react-star-ratings";

export const ExpandedTestimonial = ({
  comment,
  title,
  author,
  ratings,
  displayImage,
  name,
  postDate,
}: {
  comment: string;
  title: string;
  author: string;
  ratings: number;
  displayImage: any;
  name: string;
  postDate: string;
}) => {
  return (
    <article className="min-w-[254px] max-[700px] flex gap-7 items-center">
      <div className="flex flex-col items-center w-[300px] gap-2">
        <div className="w-[300px] h-[300px] rounded-[115px]">
          <Image
            src={displayImage}
            alt={""}
            className="object-cover object-center rounded-[115px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[20px] uppercase text-[#C1001F] font-poppins">
            {name}
          </h1>
          <p className="text-center text-[16px] text-[#3D3D3C] font-poppins">
            Submitted on
            <br />
            {postDate}
          </p>
        </div>
      </div>
      <article className="min-w-[254px] max-[500px] p-5 relative flex flex-col gap-4 items-center">
        <div className="mb-[5%] relative">
          <div className="absolute top-0 left-0">
            <Image
              src={OpeningCommas}
              alt={"Commas"}
              className="w-[22px] aspect-auto object-contain"
            />
          </div>
          <h3 className="text-[20px] text-center text-[#C1001F] font-poppins font-bold">
            &quot;{title}&quot;
          </h3>
          <p className="text-[18px] font-[700] w-[500px] font-poppins">
            {comment}
          </p>
          <div className="absolute bottom-0 right-0">
            <Image
              src={ClosingCommas}
              alt={"Commas"}
              className="w-[22px] aspect-auto object-contain"
            />
          </div>{" "}
        </div>
        <div className="flex flex-col">
          {/* <p className="text-[11.7px] font-inter">{author}</p> */}

          <StarRatings
            rating={ratings}
            starDimension="20px"
            starSpacing="1px"
            numberOfStars={5}
            starRatedColor="#C1001F"
          />
        </div>
      </article>
    </article>
  );
};
