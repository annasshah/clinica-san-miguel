import { Hero, Locations, Testimonials } from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-10">
      <Hero />
      <Testimonials />
      <Locations />
    </main>
  );
}
