// "use client";

import "regenerator-runtime/runtime";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import {
  AboutSection,
  // Blog,
  CommunityMission,
  FAQs,
  Hero,
  // JoinTeam,
  Locations,
  Testimonials,
  Treatments,
} from "@/sections";
// import Image from "next/image";

const i18nNamespaces = ["home", "common"];
// import { useSupabase } from "@/context/supabaseContext";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col justify-center items-center overflow-x-hidden gap-10">
        <Hero />
        <Testimonials headingFlag={true} mode={"dark"} />
        <CommunityMission />
        <AboutSection />
        <Treatments />
        {/* <article className="h-[100px] w-full font-poppins bg-[#19192C] flex justify-center items-center text-[16px] md:text-[20px] text-[#F8F5F0]">
        No insurance needed, walk-ins welcome!{" "}
      </article>
      <JoinTeam /> */}
        {/* <Blog data={blogs} /> */}
        <Locations />
        <FAQs />
      </main>
    </TranslationsProvider>
  );
}
