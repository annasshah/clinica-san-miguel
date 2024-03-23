"use client";

import { CompactService } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import { useTranslation } from "react-i18next";

export const ServicesComponent = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const { services, services_es } = useSupabase();

  const data = currentLocale === "es" ? services_es : services;

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
