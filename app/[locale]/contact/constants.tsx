"use client";

import { Location } from "@/components";
import { useSupabase } from "@/context/supabaseContext";

export const LocationsData = () => {
  const { locations } = useSupabase();
  return (
    <>
      {locations.map((location) => (
        <Location
          key={location.id}
          id={location.id}
          locationName={location.title}
          number={location.phone}
          route={""}
          location={location.direction}
        />
      ))}
    </>
  );
};
