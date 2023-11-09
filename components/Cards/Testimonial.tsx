"use client";

import { Commas } from "@/assets";

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
      <p className="text-[16px] h-[120px]">&quot;{comment}&quot;</p>

      <div className="flex flex-col">
        <p className="text-[11.7px]">{author}</p>

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
