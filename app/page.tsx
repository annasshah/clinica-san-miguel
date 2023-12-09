import {
  AboutSection,
  Blog,
  CommunityMission,
  Hero,
  JoinTeam,
  Locations,
  Testimonials,
  Treatments,
} from "@/sections";
// import Image from "next/image";

// import { supabase } from "@/supabaseClient";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden gap-10">
      <Hero />
      <Testimonials headingFlag={true} mode={"dark"} />
      <CommunityMission />
      <AboutSection />
      <Treatments />
      <article className="h-[100px] w-full font-poppins bg-[#19192C] flex justify-center items-center text-[16px] md:text-[20px] text-[#F8F5F0]">
        No insurance needed, walk-ins welcome!{" "}
      </article>
      <JoinTeam />
      <Blog />
      <Locations />
    </main>
  );
}
