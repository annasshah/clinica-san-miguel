"use client";

import { Commas } from "@/assets/images";

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
    <article className="min-w-[254px] max-[700px]">
      <div className="flex flex-col items-center w-[300px] gap-2">
        <div className="w-[300px] h-[300px] rounded-[115px]">
          <Image
            src={displayImage}
            alt={""}
            className="object-cover object-center rounded-[115px]"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-[20px] uppercase text-[#C1001F] font-antipasto">
            {name}
          </h1>
          <p className="text-center text-[16px] text-[#3D3D3C] font-antipasto">
            Submitted on
            <br />
            {postDate}
          </p>
        </div>
      </div>
      <article className="min-w-[254px] max-[500px] flex flex-col gap-4 items-start">
        <div>
          <Image
            src={Commas}
            alt={"Commas"}
            className="w-[22px] aspect-auto object-contain"
          />
        </div>
        <div>
          <h3>{title}</h3>
          <p className="text-[18px] font-[700] h-[120px] font-antipasto">
            &quot;{comment}&quot;
          </p>
        </div>
        <div className="flex flex-col">
          <p className="text-[11.7px] font-inter">{author}</p>

          <StarRatings
            rating={ratings}
            starDimension="15px"
            starSpacing="1px"
            numberOfStars={5}
            starRatedColor="#C1001F"
          />
        </div>
      </article>
    </article>
  );
};
