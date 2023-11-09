import {
  HeroBox,
  ScheduleTreatment,
  SearchBox,
  // Testimonial,
} from "@/components";
import { Button, IconButton } from "@/utils";
import { FaPhoneFlip } from "react-icons/fa6";

export const Hero = () => {
  const heading = "Proper care of your body for life";
  return (
    <section>
      <article className="flex w-full">
        <div>
          <div className="flex flex-col gap-3 justify-start items-start">
            <h2 className="text-[#C1001F] text-[25px] font-normal">
              Nearest location
            </h2>
            <SearchBox />
          </div>
          <div className="text-[2vw] font-bold text-[#000000]">{heading}</div>
          <div className="flex gap-7 items-center">
            <Button
              text={"Get Appointment"}
              size={{ width: "270px", height: "73px" }}
              route={""}
              bgColor={"#3D3D3C"}
            />
            <IconButton
              size={{ width: "75px", height: "75px" }}
              icon={<FaPhoneFlip />}
              bgColor="#C1001F"
              fontSize={"30px"}
              route={""}
            />
          </div>
        </div>
        <HeroBox />
      </article>

      <article className="w-full flex justify-center items-center">
        <ScheduleTreatment />
      </article>

      {/* <Testimonial comment={""} author={""} /> */}
    </section>
  );
};
