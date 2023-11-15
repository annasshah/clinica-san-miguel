import { CompactService } from "@/components";
import { Testimonials } from "@/sections";
import { services } from "../../constants";

const Services = () => {
  return (
    <main className="flex flex-col gap-5">
      <section className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[16px] text-[#19192C] font-antipasto">
            what we offer
          </p>
          <h1 className="text-[70px] text-[#C1001F] font-antipasto">
            services
          </h1>
        </div>
        <article className="flex flex-wrap justify-center items-center gap-5">
          {services.map((service) => (
            <CompactService
              heading={service.heading}
              icon={service.icon}
              description={service.description}
              mode={service.id % 2 === 0 ? "light" : "dark"}
              key={service.id}
            />
          ))}
        </article>
      </section>

      <Testimonials headingFlag={true} />
    </main>
  );
};

export default Services;
