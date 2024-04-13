"use client";

import { styles } from "@/app/[locale]/styles";
import { locationCover } from "@/assets/images/cover";
import { LocationDetailedCard } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import Image from "next/image";
import { useState } from "react";

export const GroupedLocations = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabs = [
    { id: 1, name: "All" },
    { id: 2, name: "Dallas" },
    { id: 3, name: "Houstan" },
    { id: 4, name: "San Antanio" },
  ];

  const { locations } = useSupabase();

  return (
    <main className="flex flex-col relative gap-6 my-10 p-3 w-[100vw] md:w-[90vw] lg:w-[85vw] xl:w-[75vw]">
      <h1 className={`${styles.sectionHeadText} text-[#C1001F] `}>
        Find Nearest Clinic
      </h1>

      <section className="flex w-full justify-center">
        <article className="flex flex-col items-end gap-6 w-full sm:w-1/2">
          <div className="flex justify-start gap-3 items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className="rounded-lg py-[5px] px-[6px] text-[20px] font-semibold cursor-pointer"
                style={{
                  background: selectedTab === tab.name ? "#C1001F" : "#D9D9D9",
                  color: selectedTab === tab.name ? "#F8F5F0" : "#C1001F",
                }}
                onClick={() => setSelectedTab(tab.name)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          <article className="flex flex-col items-start justify-start gap-5 pr-2 overflow-auto max-h-[500px]">
            {locations.map((location, index) => (
              <LocationDetailedCard
                key={location.id}
                address={location.address}
                name={location.title}
                phone={location.phone}
              />
            ))}
          </article>
        </article>

        <article className="hidden sm:flex sm:justify-center sm:items-start sm:w-1/2">
          <Image
            src={locationCover}
            alt="location cover"
            className="object-cover aspect-auto h-[600px] w-[400px] rounded-[46px]"
          />
        </article>
      </section>
    </main>
  );
};
