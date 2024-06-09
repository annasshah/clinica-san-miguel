"use client";

import { styles } from "@/app/[locale]/styles";
import { useSupabase } from "@/context/supabaseContext";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const AccordionItem = ({
  question,
  answer,
  isOpen,
  toggleAccordion,
}: {
  question: string | null | undefined;
  answer: string | null | undefined;
  isOpen: boolean;
  toggleAccordion: () => void;
}) => {
  return (
    <div
      className={`bg-[#C1001F] w-full flex justify-end rounded-[2px] relative`}
    >
      <div
        className={`bg-[#19192C] w-[99.5%] p-4 pr-7 rounded-[2px] transition-all delay-75 ease-in-out flex flex-col justify-center items-start`}
        onClick={toggleAccordion}
      >
        <div className="cursor-pointer bg-transparent px-2 py-3 rounded-md">
          <div className="flex justify-between items-center">
            <h4
              className={`text-[18px] font-poppins font-semibold text-[#F8F5F0]`}
            >
              {question}
            </h4>
            {isOpen ? (
              <IoIosArrowUp className="text-[16px] text-[#F8F5F0] absolute right-5" />
            ) : (
              <IoIosArrowDown className="text-[16px] text-[#F8F5F0] absolute right-5" />
            )}
          </div>
        </div>
        {isOpen && (
          <div
            className={`mt-2 text-[16px] px-2 py-3 font-poppins transition-all delay-75 ease-in-out text-[#F8F5F0]`}
          >
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export const FAQs = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const t = useTranslations("home");
  const locale = useLocale();

  const { faqs, faqs_es } = useSupabase();

  const data = locale === "es" ? faqs_es : faqs;

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prev) => (prev === index ? null : index));
  };

  return (
    <section className="flex w-full flex-col items-center py-[4%]">
      <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
        {t("faqs_title")}
      </h1>
      <h3 className={`${styles.sectionSubText}  text-[#000000]`}>
        {t("faqs_sub_title")}
      </h3>
      <div className="flex flex-col w-[80%] items-center gap-6 my-5">
        {data &&
          data.map(
            (
              faq: {
                id: number;
                question: string | null | undefined;
                answer: string | null | undefined;
              },
              index: number
            ) => (
              <AccordionItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === openAccordion}
                toggleAccordion={() => toggleAccordion(index)}
              />
            )
          )}
      </div>
    </section>
  );
};
