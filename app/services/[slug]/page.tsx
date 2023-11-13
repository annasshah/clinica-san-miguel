"use client";

import { About, CompactService } from "@/components";
import { Testimonials } from "@/sections";
import { services } from "../services";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useRef } from "react";
// import { SampleNextArrow, SamplePrevArrow } from "@/utils";

const QuestionAndAnswer = [
  {
    id: 1,
    type: "question",
    content: (
      <h1 className="text-[60px] font-antipasto font-bold text-[#3D3D3C]">
        What are ultrasounds?
      </h1>
    ),
  },
  {
    id: 2,
    type: "answer",
    content: (
      <p className="text-[25px] text-[#3D3D3C] font-antipasto">
        Ultrasounds are a type of imaging that uses sound waves to create
        “pictures” of structures within your body. This technology uses a
        handheld transducer to direct high-frequency sound waves into your body.
        <br />
        As those sound waves strike internal tissues, they bounce back and are
        collected by the equipment. They’re translated into imaging, providing a
        clear and accurate view of your organs and other structures.
      </p>
    ),
  },
  {
    id: 3,
    type: "question",
    content: (
      <h1 className="text-[60px] font-antipasto font-bold text-[#3D3D3C]">
        How are ultrasounds used in medical care?
      </h1>
    ),
  },
  {
    id: 4,
    type: "answer",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          You may be familiar with ultrasounds performed during pregnancy. The
          imaging created during a pregnancy ultrasound helps practitioners
          check a baby’s development and identify potential problems in the
          earliest possible stages.
        </p>

        <div>
          <p className="text-[25px] text-[#3D3D3C] font-antipasto">
            Additional uses for medical ultrasounds include:
          </p>
          <ul className="text-[25px] list-disc text-[#3D3D3C] font-antipasto">
            <li>Examining a breast lump</li>
            <li>Checking your thyroid gland</li>
            <li>Evaluating blood flow</li>
            <li>Diagnosing gallbladder disease</li>
            <li>Detecting joint inflammation</li>
          </ul>
        </div>

        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          These are just some of the potential medical uses for ultrasound
          technology. If your physician feels that this type of imaging is a
          good fit for your needs, they explain the role ultrasounds can play in
          your diagnostic and treatment plan.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    type: "question",
    content: (
      <h1 className="text-[60px] font-antipasto font-bold text-[#3D3D3C]">
        What is the process for getting an ultrasound?
      </h1>
    ),
  },
  {
    id: 6,
    type: "answer",
    content: (
      <div className="flex flex-col gap-3">
        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          One of the reasons ultrasounds are used so frequently is that they’re
          safe, effective, and painless. On the day of your ultrasound, there’s
          no need for any form of anesthesia.
        </p>
        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          Depending on the area being examined, you may be asked to refrain from
          eating or drinking for a period of time prior to your visit. You might
          also be asked to drink a lot of water to enhance bladder imaging.
        </p>
        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          Most ultrasounds are performed using a handheld transducer that is
          moved across the surface of your skin. Some types use a probe inserted
          into your vagina or anus to create the required imaging.
        </p>
        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          For external ultrasounds, the practitioner applies a clear gel to your
          skin to help the transducer glide over the surface of your skin and to
          enhance sound wave transmission. Depending on the area your doctor is
          attempting to view, you might need to alter your position during the
          ultrasound. The entire process usually takes less than 30 minutes.
        </p>
        <p className="text-[25px] text-[#3D3D3C] font-antipasto">
          The imaging created during an ultrasound is transmitted onto an
          external screen. Your practitioner can see those images as the
          ultrasound is being performed, and can determine if additional
          screening is needed.
        </p>
      </div>
    ),
  },
];

const ServiceDetails = ({ params }: { params: { slug: string } }) => {
  const serviceDescription =
    "Ultrasounds are a great way to “see” internal body structures and understand more about how your body is functioning. Clinica San Miguel offers ultrasounds at all 12 locations throughout Texas, including three in Dallas, five in Houston, and one in Fresno, Arlington, Farmers Branch, San Antonio, and Pasadena. If you’d like more information about the role an ultrasound might play in your health planning, book a visit online or by phone today.";
  const slider = useRef(null);

  const settings = {
    dots: true,
    arrows: true,
    dotsClass: "slick-dots",
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "60px",
    rows: 1,
    slidesPerRow: 2,
    // initialSlide: 0,
    appendDots: (dots: any) => <ul>{dots}</ul>,
    customPaging: (i: any) => <div className="ft-slick__dots--custom"></div>,
    // nextArrow: (
    //   <SampleNextArrow
    //     className={undefined}
    //     style={undefined}
    //     onClick={() => slider?.current?.slickNext()}
    //   />
    // ),
    // prevArrow: (
    //   <SamplePrevArrow
    //     className={undefined}
    //     style={undefined}
    //     onClick={() => slider?.current?.slickPrev()}
    //   />
    // ),
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 840,
        settings: {
          // arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          // arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 2,
        },
      },
    ],
  };

  return (
    <main>
      <section className="flex flex-col justify-center items-center gap-20 mb-14">
        <h1 className="text-[70px] text-[#C1001F] font-antipasto">
          {params.slug}
        </h1>

        <About
          image={undefined}
          heading={"About"}
          content={serviceDescription}
        />
      </section>

      <section className="flex flex-col items-center gap-5 justify-center w-full">
        <article className="w-[80%] md:h-[80px] lg:h-[134px] flex items-center justify-center bg-[#3D3D3C] rounded-[10px]">
          <h1 className="md:text-[30px] lg:text-[60px] text-[#F8F5F0] font-antipasto">
            General Consultation
          </h1>
        </article>

        <article className="flex flex-col items-center justify-center w-[80%] gap-5">
          {QuestionAndAnswer.map((item) => (
            <div
              key={item.id}
              className="flex p-3 gap-4 rounded-[10px] w-[100%]"
              style={{
                border: `${
                  item.type === "question"
                    ? "3px solid #3D3D3C"
                    : "3px dotted #3D3D3C"
                }`,
              }}
            >
              <h1
                className="text-[200px] font-antipasto"
                style={{
                  color: `${item.type === "question" ? "#3D3D3C" : "#C1001F"}`,
                }}
              >
                {item.type === "question" ? "Q" : "A."}
              </h1>
              <div className="flex items-center">{item.content}</div>
            </div>
          ))}
        </article>
      </section>

      <section className="flex flex-col gap-6 my-10">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[20px] text-[#19192C] font-antipasto">
            what we offer
          </p>
          <h1 className="text-[70px] text-[#C1001F] font-antipasto">
            services
          </h1>
        </div>
        <article className="w-[70vw]   xl:w-[80vw] mobile:w-[99vw] block justify-center h-auto mx-auto my-10">
          <Slider ref={slider} {...settings}>
            {services.map((service) => (
              <CompactService
                heading={service.heading}
                icon={service.icon}
                description={service.description}
                mode={service.id % 2 === 0 ? "light" : "dark"}
                key={service.id}
              />
            ))}
          </Slider>
        </article>
      </section>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-[70px] text-[#C1001F] font-antipasto">
          testinomials
        </h1>

        <Testimonials />
      </section>
    </main>
  );
};

export default ServiceDetails;
