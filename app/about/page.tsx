import {
  about_cover,
  earth_care,
  heart_with_pulse,
  journey,
} from "@/assets/images";
import { Divider } from "@/utils";
import Image from "next/image";

const Expertise = ({
  image,
  heading,
  description,
}: {
  image: any;
  heading: string;
  description: string;
}) => {
  return (
    <article className="flex flex-col items-center justify-center gap-3">
      <Image src={image} alt={""} className="w-[100px] aspect-auto" />
      <h1 className="text-[35px] leading-[35px] text-center text-[#000000] font-bold">
        {heading}
      </h1>
      <p className="text-[24px] leading-[30px] w-[80%] md:w-[70%] text-center text-[#000000]">
        {description}
      </p>
    </article>
  );
};

const About = () => {
  const aboutus_description =
    "Welcome to Clinica San Miguel, a leading multi-specialty family medicine practice dedicated to providing exceptional care for families in Texas With 11 convenient locations, including three in Dallas, five in Houston, and one each in Fresno, Farmers Branch, Arlington, and Pasadena, we are committed to serving diverse communities across the state.";
  const whatwedo =
    "At Clinica San Miguel, we understand the importance of effective communication in healthcare. That's why we take pride in our team of bilingual English and Spanish-speaking providers. Our commitment to linguistic diversity ensures that every member of our community receives the highest quality healthcare services.";

  const expertise = [
    {
      id: 1,
      image: journey,
      heading: "A Journey from Alianza Medica Hispana to Clinica San Miguel",
      description:
        "Our journey began in 2015 with the establishment of Alianza Medica Hispana, our very first location. Over the years, we've grown and transformed into Clinica San Miguel, expanding our reach and enhancing our services. We now proudly serve patients aged five and older throughout Texas, offering comprehensive care for every member of your family.",
    },
    {
      id: 2,
      image: heart_with_pulse,
      heading: "Comprehensive Family Healthcare",
      description:
        "What sets Clinica San Miguel apart is our commitment to comprehensive healthcare. We are your one-stop destination for a wide range of services, including preventive care, sick care, and chronic disease management. Our state-of-the-art facilities are equipped with the latest technology and our dedicated physicians have the expertise to perform on-site procedures such as abscess drainage, electrocardiograms (EKGs), ultrasounds, and bloodwork.",
    },
    {
      id: 3,
      image: heart_with_pulse,
      heading: "Meeting Diverse Healthcare Needs",
      description:
        "What sets Clinica San Miguel apart is our commitment to comprehensive healthcare. We are your one-stop destination for a wide range of services, including preventive care, sick care, and chronic disease management. Our state-of-the-art facilities are equipped with the latest technology and our dedicated physicians have the expertise to perform on-site procedures such as abscess drainage, electrocardiograms (EKGs), ultrasounds, and bloodwork.",
    },
  ];

  return (
    <main className="py-[5%] flex flex-col gap-20 px-[20px] items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-32">
        <article className="flex flex-col md:flex-row justify-center items-start w-full gap-20">
          <div className="flex items-start flex-col">
            <h1 className="text-[50px] text-[#000000] font-antipasto">About</h1>
            <span className="text-[35px] leading-[35px] text-[#C1001F]">
              Clinica San Miguel
            </span>
          </div>
          <p className="w-full md:w-[60%] text-[24px] text-[#000000]">
            {aboutus_description}
          </p>
        </article>

        <article className="w-[50%] flex justify-center items-center">
          <Image
            src={about_cover}
            alt={""}
            className="w-[100%] aspect-auto object-contain"
          />
        </article>

        <article className="flex flex-col md:flex-row justify-center gap-6 items-start w-full">
          <div className="flex items-start flex-col gap-2">
            <Image src={earth_care} className="w-[60px] aspect-auto" alt={""} />
            <h1 className="text-[50px] leading-[50px] text-[#000000] font-antipasto">
              Bilingual Care for
            </h1>
            <span className="text-[35px] leading-[35px] text-[#C1001F]">
              All Communities
            </span>
          </div>
          <p className="w-full md:w-[60%] text-[24px]">{whatwedo}</p>
        </article>
      </section>

      <Divider />

      {expertise.map((item, index) => (
        <>
          <Expertise
            image={item.image}
            heading={item.heading}
            description={item.description}
            key={item.id}
          />
          {index !== expertise.length - 1 && <Divider />}
        </>
      ))}
    </main>
  );
};

export default About;
