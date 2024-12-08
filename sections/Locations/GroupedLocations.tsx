"use client";

import { styles } from "@/app/[locale]/styles";
import { locationCover } from "@/assets/images/cover";
import { LocationDetailedCard } from "@/components";
import { GroupedMap, Map } from "@/components/Map";
import { useSupabase } from "@/context/supabaseContext";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

export const GroupedLocations = () => {
  const t = useTranslations("home");
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = [
    {
      id: 1,
      name: "All",
      value: "",
      location: "14oe73P17wHPAV_L6R1DmmLVw3JDw60k&ehbc=2E312F",
    },
    {
      id: 2,
      name: "Dallas",
      value: "A",
      location: "1vaZ0nzB6WqN9P4gHZedwyx0tGmVDSjE&ehbc=2E312F",
    },
    {
      id: 3,
      name: "Houston",
      value: "B",
      location: "1vrLm72whzL6KBgr7n_C2RfoeO1fH1u8&ehbc=2E312F",
    },
    {
      id: 4,
      name: "San Antonio",
      value: "C",
      location: "1cwsxmz-1Sm0zYTFaNizGELErRpCQf_I&ehbc=2E312F",
    },
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
        {t("section2_title")}
      </h1>

      <section className="flex w-full justify-center flex-col gap-3 lg:gap-0 lg:flex-row">
        <article className="flex justify-end w-full lg:w-1/2">
          <article className="flex flex-col items-center lg:items-start gap-6 w-full">
            <div className="flex justify-start gap-3 items-center">
              {tabs.map((tab, index) => (
                <div
                  key={tab.id}
                  className="rounded-lg py-[5px] px-[6px] text-[20px] font-semibold cursor-pointer"
                  style={{
                    background:
                      selectedTab === tab.value ? "#C1001F" : "#D9D9D9",
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
        </article>

        <article className="flex justify-center items-start w-full lg:w-1/2">
          <GroupedMap
            height={600}
            width={400}
            location={tabs.find((tab) => tab.value === selectedTab)?.location}
          />
        </article>
      </section>
    </main>
  );
};
