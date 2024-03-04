"use client";

import { CompactService } from "@/components";
import { Testimonials } from "@/sections";
import { services } from "../../constants";
import { styles } from "../styles";

import { useSupabase } from "@/context/supabaseContext";

const Services = () => {
  const { services } = useSupabase();

  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-col justify-center items-center">
          <p className={`${styles.sectionSubText} text-[#19192C]`}>
            what we offer
          </p>
          <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
            services
          </h1>
        </div>
        <article className="flex flex-wrap justify-center items-center gap-5">
          {services.map((service) => (
            <CompactService
              id={service.id}
              heading={service.title}
              icon={service.icon}
              description={service.description}
              // mode={service.id % 2 === 0 ? "light" : "dark"}
              mode={"light"}
              key={service.id}
            />
          ))}
        </article>
      </section>

      <Testimonials headingFlag={true} mode={"light"} />
    </main>
  );
};

export default Services;
