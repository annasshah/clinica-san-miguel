import {
  Houston,
  Arlington,
  Dallas,
  Fresno,
  Pasadena,
  FortWorth,
  SanAntonio,
} from "@/assets";
import Image from "next/image";

export const Locations = () => {
  const locations = [
    { id: 1, images: Houston, name: "San Miguel Clinic, Houston, TX" },
    { id: 2, images: Arlington, name: "San Miguel Clinic, Arlington, TX" },
    { id: 3, images: Dallas, name: "San Miguel Clinic, Dallas, TX" },
    { id: 4, images: Fresno, name: "San Miguel Clinic, Fresno, TX" },
    { id: 5, images: Pasadena, name: "San Miguel Clinic, pasadena , TX" },
    {
      id: 6,
      images: FortWorth,
      name: "San Miguel Clinic, fort worth , TX",
    },
    {
      id: 7,
      images: SanAntonio,
      name: "San Miguel Clinic, san antonio , TX",
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center my-14">
      <h1 className="text-[#C1001F] font-antipasto text-center text-[70px] font-bold">
        OUR LOCATIONS
      </h1>
      <h3 className="text-center font-antipasto text-[#000000] text-[20px]">
        Choose your preferred location
      </h3>

      <article className="flex flex-wrap gap-10 px-[15%] justify-center">
        {locations.map((location) => (
          <div
            key={location.id}
            className="flex flex-col items-center justify-center"
          >
            <div className="w-[350px] h-[350px]">
              <Image
                src={location.images}
                alt={location.name}
                className="aspect-auto object-contain w-full h-full"
              />
            </div>
            <p className="text-[#19192C] font-inter text-[16px]">
              {location.name}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};
