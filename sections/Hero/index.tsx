"use client";

import {
  HeroBox,
  // ScheduleTreatment,
  // SearchBox,
  // Testimonial,
} from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import { Button, IconButton } from "@/utils";
import { useRouter } from "next/navigation";
import { FaPhoneFlip } from "react-icons/fa6";

export const Hero = () => {
  const router = useRouter();
  // const heading = "Proper care of your body for life";
  // const description =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const { heroSection } = useSupabase();
  const go_to_contact_handle = () => {
    router.push(`/contact`);
  }

  return (
    <section className=" flex flex-col gap-20 justify-center md:justify-start items-center md:items-start">
      <article className="flex flex-col mt-[10%] sm:mt-[5%] md:mt-10 md:flex-row w-[95%] lg:w-[100%] justify-center items-center gap-10">
        <div className="flex flex-col items-end justify-end gap-5 w-auto order-2 md:order-1 md:w-1/2">
          {/* <div className="flex flex-col gap-3 justify-start items-start">
            <h2 className="text-[#C1001F] font-poppins text-[25px] font-normal">
              Nearest location
            </h2>
            <SearchBox />
          </div> */}
          <div className="w-[100%] md:w-[95%] lg:w-[80%] xl:w-[60%] flex flex-col gap-5">
            <div className="text-[25px] md:text-[30px] text-center md:text-left lg:text-[48px] leading-[25px] md:leading-[30px] lg:leading-[48px] font-poppins font-bold text-[#000000]">
              {heroSection[0]?.title}
            </div>
            <p className="text-[16px] text-center md:text-left font-poppins text-[#19192C] leading-[25px]">
              {heroSection[0]?.content}
            </p>

            <div className="flex gap-7 justify-center md:justify-start items-center">
              <Button
                text={"Get Appointment"}
                size={{ width: "270px", height: "73px" }}
                route={""}
                bgColor={"#3D3D3C"}
                textColor={"#ffffff"}
                onClick={go_to_contact_handle}
              />
              <IconButton
                size={{ width: "75px", height: "75px" }}
                icon={<FaPhoneFlip />}
                bgColor="#C1001F"
                fontSize={"30px"}
                route={""}
                onClick={go_to_contact_handle}
              />
            </div>
          </div>
        </div>
        <div className="w-[100%] sm:w-[90%] flex justify-center md:justify-start order-1 md:order-2 md:w-1/2">
          <HeroBox />
        </div>
      </article>

      {/* <article className="w-full flex justify-center items-center">
        <ScheduleTreatment />
      </article> */}

      {/* <Testimonial comment={""} author={""} /> */}
    </section>
  );
};
