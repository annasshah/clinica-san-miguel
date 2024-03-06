"use client";
import React, {useEffect} from 'react'
import "regenerator-runtime/runtime";

import {
  AboutSection,
  Blog,
  CommunityMission,
  FAQs,
  Hero,
  JoinTeam,
  Locations,
  Testimonials,
  Treatments,
} from "@/sections";
// import Image from "next/image";

import { useSupabase } from "@/context/supabaseContext";

export default function Home() {
  const { about, blogs, faqs } = useSupabase();

  const translateText = async () => {
    const text = 'Ik spreek Engels';
    const to = 'en';
    try {
      const response = await fetch(`/api/traslation?text=${text}`);
      const data = await response.json();
      console.log('data',data)
      // setTranslatedText(data.translatedText);
    } catch (error) {
      console.error('API request error:', error);
    }
  };

  useEffect(() => {
    translateText()
  }, [])
  return (
    <main className="flex flex-col justify-center items-center overflow-x-hidden gap-10">
      <Hero />
      <Testimonials headingFlag={true} mode={"dark"} />
      <CommunityMission />
      <AboutSection data={about} />
      <Treatments />
      {/* <article className="h-[100px] w-full font-poppins bg-[#19192C] flex justify-center items-center text-[16px] md:text-[20px] text-[#F8F5F0]">
        No insurance needed, walk-ins welcome!{" "}
      </article>
      <JoinTeam /> */}
      {/* <Blog data={blogs} /> */}
      <Locations />
      <FAQs data={faqs} />
    </main>
  );
}
