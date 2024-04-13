"use client";

import { styles } from "@/app/[locale]/styles";
import { locationCover } from "@/assets/images/cover";
import { LocationDetailedCard } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export const GroupedLocations = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = [
    { id: 1, name: "All", value: "" },
    { id: 2, name: "Dallas", value: "A" },
    { id: 3, name: "Houstan", value: "B" },
    { id: 4, name: "San Antanio", value: "C" },
  ];

  const [locationData, setLocationData] = useState<any[]>([]);

  const { locations, fetchSearchedData, searchedData } = useSupabase();

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  useEffect(() => {
    if (selectedTab === "") {
      setLocationData(locations);
    } else {
      fetchSearchedData("Locations", "Group", selectedTab);
      setLocationData(searchedData);
    }
  }, [locations, selectedTab, searchedData]);

  return (
    <main className="flex flex-col relative gap-6 my-10 p-3 w-[100vw] md:w-[90vw] lg:w-[85vw] xl:w-[75vw]">
      <h1 className={`${styles.sectionHeadText} text-[#C1001F] `}>
        Find Nearest Clinic
      </h1>

      <section className="flex w-full justify-center">
        <article className="flex flex-col items-center md:items-end gap-6 w-full md:w-1/2">
          <div className="flex justify-start gap-3 items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                className="rounded-lg py-[5px] px-[6px] text-[20px] font-semibold cursor-pointer"
                style={{
                  background: selectedTab === tab.value ? "#C1001F" : "#D9D9D9",
                  color: selectedTab === tab.value ? "#F8F5F0" : "#C1001F",
                }}
                onClick={() => handleTabChange(tab.value)}
              >
                {tab.name}
              </div>
            ))}
          </div>

          <article className="flex flex-col items-start justify-start gap-5 pr-2 overflow-auto max-h-[500px]">
            {locationData?.map((location, index) => (
              <LocationDetailedCard
                key={location.id}
                id={location.id}
                address={location.address}
                name={location.title}
                phone={location.phone}
              />
            ))}
          </article>
        </article>

        <article className="hidden md:flex md:justify-center md:items-start md:w-1/2">
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
