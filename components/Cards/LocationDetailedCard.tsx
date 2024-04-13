"use client";

import { ImPhone } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { FaMapLocationDot } from "react-icons/fa6";
import { useRouter } from "next/navigation";

export const LocationDetailedCard = ({
  id,
  name,
  address,
  phone,
}: {
  id: number | null;
  name: string | undefined | null;
  address: string | undefined | null;
  phone?: string | null;
}) => {
  const router = useRouter();

  const handleLocation = () => {
    router.push(`/contact/${id}`);
  };

  return (
    <main className="bg-[#FFFEFC] rounded-[13px] min-w-[320px] w-full max-w-[500px] min-h-[179px] py-[16px] px-[10px] flex flex-col justify-between relative">
      <h4 className="text-[16px] font-semibold text-[#FF3030]">
        {name || "Clinica San Miguel Dallas, TX Office"}
      </h4>

      <div className="flex w-full justify-between items-end gap-4">
        <article className="flex flex-col justify-start gap-2">
          <div className="flex justify-start items-center gap-2">
            <ImPhone className="text-[25px] text-[#3D3D3C]" />
            <p className="text-[16px] font-semibold text-[#3D3D3C]">
              {phone || "682-327-1695"}
            </p>
          </div>
          <div className="flex justify-start items-center gap-2">
            <FaMapLocationDot className="text-[25px] text-[#3D3D3C]" />
            <p className="text-[16px] font-semibold text-[#3D3D3C]">
              {address || "787 E Park Row Dr, Arlington, TX 76010"}
            </p>
          </div>
        </article>

        <div
          onClick={handleLocation}
          className="flex justify-center items-center text-[25px] text-white bg-black rounded-full w-[40px] h-[40px]"
        >
          <IoIosArrowForward />
        </div>
      </div>
    </main>
  );
};
