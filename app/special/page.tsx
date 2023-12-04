"use client";

import {
  Blue_and_Red_Health_Icons_Medical_Conference_Poster,
  Grey_Modern_Best_Medical_Service_Poster,
  consulta_poster,
  immigration_medical_exam_poster,
} from "@/assets/images";
import { Locations, Services, Testimonials } from "@/sections";
import Image from "next/image";

const Special = () => {
  const special_posters = [
    {
      id: 1,
      heading: "physical school special",
      image: Blue_and_Red_Health_Icons_Medical_Conference_Poster,
    },
    {
      id: 2,
      heading: "consulta",
      image: consulta_poster,
    },
    {
      id: 3,
      heading: "immigration medical exam",
      image: immigration_medical_exam_poster,
    },
    {
      id: 4,
      heading: "D.O.T + Urine Test",
      image: Grey_Modern_Best_Medical_Service_Poster,
    },
  ];
  return (
    <main>
      <section className="flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className="text-[70px] text-[#C1001F] leading-[70px] font-poppins">
            Specials
          </h1>
          <h1 className="text-[70px] text-[#3D3D3C] leading-[70px] font-poppins">
            Summer Specials
          </h1>
        </div>

        <article className="bg-[#19192C] rounded-[20px] w-[70vw] h-full p-14 flex flex-col justify-center items-center gap-4">
          {special_posters.map((poster) => (
            <article
              className="flex flex-col gap-3 items-center justify-center"
              key={poster.id}
            >
              <h2 className="text-[48px] text-[#ffffff] font-poppins">
                {poster.heading}
              </h2>
              <div>
                <Image
                  src={poster.image}
                  alt={""}
                  className="rounded-[20px] aspect-auto w-[700px]"
                />
              </div>
            </article>
          ))}
        </article>
      </section>

      <Services />
      <Locations />
      <Testimonials headingFlag={true} />
    </main>
  );
};

export default Special;
