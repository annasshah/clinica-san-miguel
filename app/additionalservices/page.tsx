"use client";

import { AdditionalService } from "@/components";
import { Locations, Services, Testimonials } from "@/sections";
import { additionalServices } from "@/constants";

const AdditionalServices = () => {
  return (
    <main>
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[70px] text-[#C1001F] font-antipasto">
            additional services
          </h1>
        </div>

        <article className="h-[140px] w-full font-antipasto bg-[#19192C] flex justify-center items-center text-[20px] text-[#F8F5F0]">
          Our highly qualified staff will assist you quickly and without an
          appointment. Come directly to our facilities. We speak English and
          Spanish.
        </article>

        <article className="flex flex-wrap justify-center items-center gap-8 my-[5%]">
          {additionalServices.map((service) => (
            <AdditionalService
              image={service.image}
              heading={service.heading}
              description={service.description}
              key={service.id}
            />
          ))}
        </article>
      </section>

      <Services />
      <Locations />
      <Testimonials headingFlag={true} />
    </main>
  );
};

export default AdditionalServices;