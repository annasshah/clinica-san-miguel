"use client";

import { career_cover } from "@/assets/images";
import { Locations, Services, Testimonials } from "@/sections";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Career = () => {
  const [firstDivHeight, setFirstDivHeight] = useState<number>(0);

  const firstDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = firstDivRef.current;
    if (currentRef) {
      const firstDivWidth = currentRef.offsetWidth;
      const calculatedFirstDivHeight = (firstDivWidth * 30) / 100;
      setFirstDivHeight(calculatedFirstDivHeight);
    }
  }, [firstDivRef]);

  const opportunities = [
    "Dental Assistant",
    "Medical Assistant",
    "Primary Care Physician ( MD ) Doctor of Medicine",
  ];

  return (
    <main>
      <section className="flex flex-col relative w-full gap-10">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-[70px] text-[#C1001F] leading-[70px] font-poppins">
            Career
          </h1>
        </div>

        <article
          ref={firstDivRef}
          style={{ height: `${firstDivHeight}px` }}
          className="left-0 top-[20%] w-[80vw] rounded-r-full bg-[#ccc]"
        >
          <Image
            src={career_cover}
            alt=""
            className="w-full h-full object-cover object-center rounded-r-full"
          />
        </article>

        <article className="flex flex-col gap-4 w-full items-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-[70px] text-[#3D3D3C] leading-[70px] font-poppins">
              Join Our Team!
            </h1>
            <p className="text-[25px] text-[#000000] leading-[25px] font-poppins">
              Thanks for your interest in job opportunities at Clinica San
              Miguel
            </p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <p className="text-[25px] text-[#000000] font-poppins">
              Current Opportunities:
            </p>
            <ul className="flex flex-col items-start">
              {opportunities.map((item, index) => (
                <li
                  className="list-disc text-[20px] text-[#000000] font-poppins"
                  key={index}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>

      <Services />
      <Locations />
      <Testimonials headingFlag={true} />
    </main>
  );
};

export default Career;
