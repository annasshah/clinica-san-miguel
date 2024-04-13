// "use client";

import "regenerator-runtime/runtime";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

import {
  AboutProfessionals,
  AboutSection,
  CommunityMission,
  FAQs,
  GroupedLocations,
  Hero,
  HeroTopSection,
  Locations,
  Testimonials,
  Treatments,
} from "@/sections";

const i18nNamespaces = ["home", "common"];

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
        <div className="w-full bg-[#F1F1F1]">
          <HeroTopSection />
        </div>
        <GroupedLocations />
        <AboutProfessionals />
        <Hero />
        <Testimonials headingFlag={true} mode={"dark"} />
        <CommunityMission />
        <AboutSection />
        <Treatments />
        <Locations />
        <FAQs />
      </main>
    </TranslationsProvider>
  );
}
