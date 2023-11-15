"use client";

import { Commas } from "@/assets/images";

import Image from "next/image";

import StarRatings from "react-star-ratings";

export const Testimonial = ({
  comment,
  author,
  ratings,
}: {
  comment: string;
  author: string;
  ratings: number;
}) => {
  return (
    <article className="w-[254px] flex flex-col gap-4 items-start">
      <div>
        <Image
          src={Commas}
          alt={"Commas"}
          className="w-[22px] aspect-auto object-contain"
        />
      </div>
      <p className="text-[18px] font-[700] h-[120px] font-antipasto">
        &quot;{comment}&quot;
      </p>

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
  );
};
