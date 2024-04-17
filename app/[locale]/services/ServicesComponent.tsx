"use client";

import { CompactService } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import { useLocale } from "next-intl";

export const ServicesComponent = () => {
  const locale = useLocale();

  const { services, services_es } = useSupabase();

  const data = locale === "es" ? services_es : services;

  return (
    <article className="flex flex-wrap justify-center items-center gap-5">
      {data.map((service) => (
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
  );
};
