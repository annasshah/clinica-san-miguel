"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export const About = ({
  image,
  heading,
  content,
}: {
  image: any;
  heading: string;
  content: string;
}) => {
  const [firstDivHeight, setFirstDivHeight] = useState<number>(0);
  const [secondDivHeight, setSecondDivHeight] = useState<number>(0);

  const firstDivRef = useRef<HTMLDivElement>(null);
  const secondDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (firstDivRef.current) {
      const firstDivWidth = firstDivRef.current.offsetWidth;
      const calculatedFirstDivHeight = (firstDivWidth * 80) / 100;
      setFirstDivHeight(calculatedFirstDivHeight);

      if (secondDivRef.current) {
        const calculatedSecondDivHeight = (calculatedFirstDivHeight * 90) / 100;
        setSecondDivHeight(calculatedSecondDivHeight);
      }
    }
  }, [firstDivRef, secondDivRef]);

  return (
    <article className="w-[60vw] flex items-center">
      <div
        ref={firstDivRef}
        style={{
          height: `${firstDivHeight}px`,
          boxShadow: "5px 0 15px rgba(0, 0, 0, 0.8)", // Adjust the values as needed
        }}
        className="w-[40%] flex justify-center items-center rounded-[10px] z-20"
      >
        <Image
          src={image}
          alt="about image"
          className="object-cover aspect-auto w-full h-full"
        />
      </div>
      <div
        ref={secondDivRef}
        style={{ height: `${secondDivHeight}px` }}
        className="w-[60%] rounded-[10px] flex flex-col justify-center bg-[#3D3D3C] p-5 ml-[-70px] pl-[70px] z-10"
      >
        <h1 className="text-[#ffffff] text-[3vw] text-left">{heading}</h1>
        <p className="text-[#ACACAC] text-[20px] text-left">{content}</p>
      </div>
    </article>
  );
};
