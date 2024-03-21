"use client";

import { Location } from "@/components";
import { Testimonials } from "@/sections";
// import { services } from "../../constants";
import { styles } from "../styles";

import { useSupabase } from "@/context/supabaseContext";
import Link from "next/link";

const Contact = () => {
  const { locations } = useSupabase();

  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col justify-center items-center my-10">
        <div className="flex flex-col justify-center items-center">
          <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
            OUR LOCATIONS
          </h1>
          <p className={`${styles.sectionSubText} text-[#19192C]`}>
            Choose your preferred location
          </p>
        </div>
        <article className="flex flex-wrap justify-center items-center gap-5">
          {locations.map((location) => (
            <Location
              key={location.id}
              id={location.id}
              locationName={location.title}
              number={location.phone}
              route={""}
              location={location.direction}
            />
          ))}
        </article>
      </section>

      <Testimonials headingFlag={true} mode={"light"} />
    </main>
  );
};

export default Contact;
