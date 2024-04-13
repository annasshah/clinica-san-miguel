import { styles } from "@/app/[locale]/styles";
import { clinicProfessionalCover } from "@/assets/images/cover";
import Image from "next/image";

export const AboutProfessionals = () => {
  return (
    <main className="flex flex-col relative gap-6 my-10 p-3 w-[100vw] md:w-[90vw] lg:w-[85vw] xl:w-[75vw]">
      <section className="flex w-full justify-center">
        <article className="flex flex-col items-start gap-6 w-full sm:w-1/2">
          <h2 className="text-[40px] md:text-[50px] font-semibold text-[#19192C]">
            lOVE YOUR <br />
            <span className="text-[#C1001F]">DOCTOR!</span>
          </h2>
          <div className="text-[20px] md:text-[25px] text-left">
            At Clinic San Miguel, our skilled healthcare professionals offer
            innovative preventive and general health treatments for maintaining
            healthy and vibrant lives. Patients of every age can receive
            comprehensive healthcare services to detect and prevent further
            issues before they develop. Through regular health check-ups and
            screenings, you can experience improved overall well-being,
            contributing to restorative and aesthetic results.
          </div>
        </article>

        <article className="hidden sm:flex sm:justify-center sm:items-start sm:w-1/2">
          <Image
            src={clinicProfessionalCover}
            alt="clinic Professional Cover"
            className="object-cover aspect-auto h-[650px] w-[500px] rounded-[46px]"
          />
        </article>
      </section>
    </main>
  );
};
