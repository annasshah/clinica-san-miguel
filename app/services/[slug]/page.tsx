"use client";

import { styles } from "@/app/styles";
import { About } from "@/components";
import { useSupabase } from "@/context/supabaseContext";
import { Services, Testimonials } from "@/sections";
import { useCallback, useEffect } from "react";

// import { useRef } from "react";
// import { SampleNextArrow, SamplePrevArrow } from "@/utils";

// const questionStyle =
//   "text-[25px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-poppins font-bold text-customGray";
// const answerStyle =
//   "text-[16px] md:text-[20px] lg:text-[25px] text-customGray font-poppins";

// const QuestionAndAnswer = [
//   {
//     id: 1,
//     type: "question",
//     content: <h1 className={questionStyle}>What are ultrasounds?</h1>,
//   },
//   {
//     id: 2,
//     type: "answer",
//     content: (
//       <p className={`${answerStyle} px-3`}>
//         Ultrasounds are a type of imaging that uses sound waves to create
//         “pictures” of structures within your body. This technology uses a
//         handheld transducer to direct high-frequency sound waves into your body.
//         <br />
//         As those sound waves strike internal tissues, they bounce back and are
//         collected by the equipment. They’re translated into imaging, providing a
//         clear and accurate view of your organs and other structures.
//       </p>
//     ),
//   },
//   {
//     id: 3,
//     type: "question",
//     content: (
//       <h1 className={questionStyle}>
//         How are ultrasounds used in medical care?
//       </h1>
//     ),
//   },
//   {
//     id: 4,
//     type: "answer",
//     content: (
//       <div className="flex flex-col gap-3 px-3">
//         <p className={answerStyle}>
//           You may be familiar with ultrasounds performed during pregnancy. The
//           imaging created during a pregnancy ultrasound helps practitioners
//           check a baby’s development and identify potential problems in the
//           earliest possible stages.
//         </p>

//         <div>
//           <p className={answerStyle}>
//             Additional uses for medical ultrasounds include:
//           </p>
//           <ul className={`${answerStyle} list-disc`}>
//             <li>Examining a breast lump</li>
//             <li>Checking your thyroid gland</li>
//             <li>Evaluating blood flow</li>
//             <li>Diagnosing gallbladder disease</li>
//             <li>Detecting joint inflammation</li>
//           </ul>
//         </div>

//         <p className={answerStyle}>
//           These are just some of the potential medical uses for ultrasound
//           technology. If your physician feels that this type of imaging is a
//           good fit for your needs, they explain the role ultrasounds can play in
//           your diagnostic and treatment plan.
//         </p>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     type: "question",
//     content: (
//       <h1 className={questionStyle}>
//         What is the process for getting an ultrasound?
//       </h1>
//     ),
//   },
//   {
//     id: 6,
//     type: "answer",
//     content: (
//       <div className="flex flex-col gap-3 px-3">
//         <p className={answerStyle}>
//           One of the reasons ultrasounds are used so frequently is that they’re
//           safe, effective, and painless. On the day of your ultrasound, there’s
//           no need for any form of anesthesia.
//         </p>
//         <p className={answerStyle}>
//           Depending on the area being examined, you may be asked to refrain from
//           eating or drinking for a period of time prior to your visit. You might
//           also be asked to drink a lot of water to enhance bladder imaging.
//         </p>
//         <p className={answerStyle}>
//           Most ultrasounds are performed using a handheld transducer that is
//           moved across the surface of your skin. Some types use a probe inserted
//           into your vagina or anus to create the required imaging.
//         </p>
//         <p className={answerStyle}>
//           For external ultrasounds, the practitioner applies a clear gel to your
//           skin to help the transducer glide over the surface of your skin and to
//           enhance sound wave transmission. Depending on the area your doctor is
//           attempting to view, you might need to alter your position during the
//           ultrasound. The entire process usually takes less than 30 minutes.
//         </p>
//         <p className={answerStyle}>
//           The imaging created during an ultrasound is transmitted onto an
//           external screen. Your practitioner can see those images as the
//           ultrasound is being performed, and can determine if additional
//           screening is needed.
//         </p>
//       </div>
//     ),
//   },
// ];

const ServiceDetails = ({ params }: { params: { slug: string } }) => {
  // const serviceDescription =
  //   "Ultrasounds are a great way to “see” internal body structures and understand more about how your body is functioning. Clinica San Miguel offers ultrasounds at all 12 locations throughout Texas, including three in Dallas, five in Houston, and one in Fresno, Arlington, Farmers Branch, San Antonio, and Pasadena. If you’d like more information about the role an ultrasound might play in your health planning, book a visit online or by phone today.";

  const { detailData, fetchDetailedData } = useSupabase();

  const fetchDataCallback = useCallback(() => {
    fetchDetailedData("services", parseInt(params.slug));
  }, [fetchDetailedData, params.slug]);

  useEffect(() => {
    fetchDataCallback();
  }, [fetchDataCallback]);

  const detailedServiceData = detailData["services"] || [];

  const {
    title,
    description,
    image,
    // question_1,
    // answer_1,
    // question_2,
    // answer_2,
    // question_3,
    // answer_3,
  } = detailedServiceData[0] || {};

  // let QuestionAndAnswer = [
  //   {
  //     id: 1,
  //     type: "question",
  //     content: <h1 className={questionStyle}>{question_1}</h1>,
  //   },
  //   {
  //     id: 2,
  //     type: "answer",
  //     content: <p className={`${answerStyle} px-3`}>{answer_1}</p>,
  //   },
  //   {
  //     id: 3,
  //     type: "question",
  //     content: <h1 className={questionStyle}>{question_2}</h1>,
  //   },
  //   {
  //     id: 4,
  //     type: "answer",
  //     content: <p className={`${answerStyle} px-3`}>{answer_2}</p>,
  //   },
  //   {
  //     id: 5,
  //     type: "question",
  //     content: <h1 className={questionStyle}>{question_3}</h1>,
  //   },
  //   {
  //     id: 6,
  //     type: "answer",
  //     content: <p className={`${answerStyle} px-3`}>{answer_3}</p>,
  //   },
  // ];

  const serviceDescription = [
    {
      id: 1,
      question: "Do you have warts that bother you or embarrass you? ",
      answer: {
        description:
          "At Clínica San Miguel, located at 5712 Fondren Rd, Houston, TX 77036, we offer a safe and effective procedure to remove them with cautery.",
      },
    },
    {
      id: 2,
      question: "How is the procedure performed?",
      answer: {
        description: [
          "Local anesthesia is applied to the affected area to numb it.",
          "The cauterizer is used to burn the wart.",
          "The area is cleaned and a bandage is applied",
        ],
      },
    },
  ];

  const keywords = [
    "Wart removal",
    "Wart cauterization",
    "San Clinic Miguel",
    "5712 Fondren Rd",
    "Houston",
    "TX 77036",
    "Warts",
    "Moles",
    "Skin Cancer",
  ];

  const siteLinks = [
    {
      id: 1,
      link: "https://www.mayoclinic.org/es /diseases-conditions/common-warts/diagnosis-treatment/drc-20371131",
    },
    {
      id: 2,
      link: "https://es.familydoctor.org/condicion/verrugas-es/",
    },
    {
      id: 3,
      link: "https://www .mayoclinic.org/es/diseases-conditions/genital-warts/doctors-departments/ddc-20355241",
    },
  ];

  const desc =
    "We hope this information has been useful to you. If you have any further questions or would like to schedule an appointment, please feel free to contact us.";

  return (
    <main className="flex flex-col gap-10 px-10 w-[100vw] h-full overflow-x-hidden">
      <section className="flex flex-col justify-center items-center gap-20 mb-14">
        <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>{title}</h1>

        <About image={image} heading={"About"} content={description} />
      </section>

      <section className="flex flex-col items-start gap-10 justify-start w-full  lg:px-[10%]">
        {/* <article className="w-[80%] py-5 md:py-10 flex items-center justify-center bg-customGray rounded-[10px]">
          <h1 className={`${styles.sectionHeadText} text-[#F8F5F0]`}>
            General Consultation
          </h1>
        </article> */}

        {/* <article className="flex flex-col items-center justify-center w-[80%] gap-5">
          {QuestionAndAnswer.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row p-3 gap-4 rounded-[10px] w-[100%]"
              style={{
                border: `${
                  item.type === "question"
                    ? "3px solid #3D3D3C"
                    : "3px dotted #3D3D3C"
                }`,
              }}
            >
              <h1
                className="text-[35px] md:text-[80px] lg:text-[120px] xl:text-[200px] font-poppins font-bold"
                style={{
                  color: `${item.type === "question" ? "#3D3D3C" : "#C1001F"}`,
                }}
              >
                {item.type === "question" ? "Q" : "A."}
              </h1>
              <div className="flex items-center">{item.content}</div>
            </div>
          ))}
        </article> */}

        {serviceDescription.map((item, index) => (
          <article
            key={item.id}
            className="flex flex-col gap-5 items-start justify-start"
          >
            <div className="text-[16px] md:text-[18px] font-semibold text-[#C1001F]">
              {item.question}
            </div>

            <div className="text-[16px] md:text-[18px] text-black text-[400]">
              {Array.isArray(item.answer.description) ? (
                <ul className="flex flex-col gap-2 items-start justify-start pl-5">
                  {item.answer.description.map((listItem, idx) => (
                    <li key={idx} className="list-disc">
                      {listItem}
                    </li>
                  ))}
                </ul>
              ) : (
                item.answer.description
              )}
            </div>
          </article>
        ))}

        <article className="flex justify-start items-start gap-3">
          <h3 className="text-[16px] md:text-[18px] text-black font-bold">
            Keywords:
          </h3>
          <div className="text-[16px] md:text-[18px] text-black">
            {keywords.join(", ")}
          </div>
        </article>

        <article className="flex justify-start">
          <div className="text-[16px] md:text-[18px] text-black">{desc}</div>
        </article>

        <article className="flex flex-col justify-start gap-7">
          <h3 className="text-[20px] text-black">SiteLinks:</h3>
          <div className="flex flex-col items-start justify-start gap-1">
            {siteLinks.map((item, index) => (
              <p
                key={item.id}
                className="text-[16px] text-black underline break-words"
              >
                {item.link}
              </p>
            ))}
          </div>
        </article>
      </section>
      <div className="w-full flex justify-center">
        <Services />
      </div>
      <Testimonials headingFlag={true} mode={"light"} />
    </main>
  );
};

export default ServiceDetails;
