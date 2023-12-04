import { styles } from "@/app/styles";
import { about } from "@/assets/images";
import { About } from "@/components";

export const AboutSection = () => {
  return (
    <section className="w-full flex flex-col justify-center gap-10 items-center my-14">
      <h1 className={`${styles.sectionHeadText} flex lg:hidden text-[#C1001F]`}>
        About Us
      </h1>
      <About
        image={about}
        heading={"About Us"}
        content={
          "Clinica San Miguel: Multi-specialty family practice with 11 Texas locations. Bilingual staff, comprehensive care for Hispanic communities. Services: preventive, chronic care, urgent care, on-site procedures. "
        }
      />
    </section>
  );
};
