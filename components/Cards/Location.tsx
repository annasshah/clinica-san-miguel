import { direction } from "@/assets/images";
import { Button, OutlinedButton } from "@/utils";
import Image from "next/image";
import { Map } from "../Map";

export const Location = ({
  locationName,
  number,
  route,
  location,
}: {
  locationName: string;
  number: string;
  route: string;
  location: string;
}) => {
  return (
    <article className="w-[320px] sm:w-[350px] h-[200px] my-4 ">
      <div className="relative w-full h-[120px] rounded-t-[5px]">
        <Map location={location} />
        <div className="absolute bottom-3 right-3 z-20">
          <Image
            src={direction}
            alt={"direction arrow"}
            className="w-[33px] aspect-auto"
          />
        </div>
      </div>
      <article className="bg-[#FFFFFF] flex p-4 justify-between h-[80px] rounded-b-[5px]">
        <h4 className="text-[16px] text-[#626262] font-poppins text-left">
          {locationName}
        </h4>
        <article className="flex flex-col items-center  bg-white justify-center gap-2 ">
          <button
            className={`rounded-[10px] font-poppins flex justify-center items-center text-[14px] md:text-[17px] text-opacity-8`}
            style={{
              width: "130px",
              height: "30px",
              backgroundColor: "#19192C",
              color: "#FFFFFF",
            }}
          >
            Appointment
          </button>
          <button
            className={`rounded-[10px] font-poppins flex justify-center items-center text-[14px] md:text-[16px] bg-transparent text-opacity-8`}
            style={{
              width: "130px",
              height: "30px",
              color: "#19192C",
              border: `2px solid #19192C`,
            }}
          >
            {number}
          </button>
        </article>
      </article>
    </article>
  );
};
