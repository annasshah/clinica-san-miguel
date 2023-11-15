import { about } from "@/assets/images";
import { About } from "@/components";

export const AboutSection = () => {
  return (
    <section className="w-full flex justify-center items-center my-14">
      <About
        image={about}
        heading={"About Us"}
        content={
          "Clinica San Miguel: Multi-specialty family practice with 11 Texas locations. Bilingual staff, comprehensive care for Hispanic communities. Services: preventive, chronic care, urgent care, on-site procedures. From immigration physicals to urgent care, diverse healthcare needs met. Book online or call."
        }
      />
    </section>
  );
};
