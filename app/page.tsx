import {
  AboutSection,
  CommunityMission,
  Hero,
  JoinTeam,
  Locations,
  Testimonials,
  Treatments,
} from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <Hero />
      <Testimonials />
      <CommunityMission />
      <AboutSection />
      <Treatments />
      <article className="h-[100px] w-full font-antipasto bg-[#19192C] flex justify-center items-center text-[20px] text-[#F8F5F0]">
        No insurance needed, walk-ins welcome!{" "}
      </article>
      <JoinTeam />
      <Locations />
    </main>
  );
}
