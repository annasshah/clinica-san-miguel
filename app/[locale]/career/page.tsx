import { career_cover } from "@/assets/images";
import { Locations, Services, Testimonials } from "@/sections";

import Image from "next/image";
import { styles } from "../styles";
import { Opportunities } from "@/sections/Career/Opportunities";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["career", "common"];

const Career = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  // const [firstDivHeight, setFirstDivHeight] = useState<number>(0);

  // const firstDivRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const currentRef = firstDivRef.current;
  //   if (currentRef) {
  //     const firstDivWidth = currentRef.offsetWidth;
  //     const calculatedFirstDivHeight = (firstDivWidth * 30) / 100;
  //     setFirstDivHeight(calculatedFirstDivHeight);
  //   }
  // }, [firstDivRef]);

  // const opportunities = [
  //   "Dental Assistant",
  //   "Medical Assistant",
  //   "Primary Care Physician ( MD ) Doctor of Medicine",
  // ];
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <main>
      <section className="flex flex-col relative w-full gap-10">
        <div className="flex flex-col gap-1 justify-center items-center">
          <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
            {t("career_title")}
          </h1>
        </div>
        <article
          style={{ aspectRatio: "2.5 / 1" }}
          className="left-0 w-[96%] md:w-[90%] lg:w-[85%] xl:w-[80%] rounded-r-full bg-[#ccc]"
        >
          <Image
            src={career_cover}
            alt=""
            style={{ aspectRatio: "2.5 / 1" }}
            className="bg-cover object-cover w-full object-center rounded-r-full"
          />
        </article>
        <article className="flex flex-col gap-4 w-full items-center px-7">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className={`${styles.sectionHeadText} text-customGray`}>
              {t("career_sub_title")}
            </h1>
            <p className={`${styles.sectionSubText} text-[#000000]`}>
              {t(
                "Thanks for your interest in job opportunities at Clinica San Miguel"
              )}
            </p>
          </div>

          <div className="flex flex-col items-start gap-2">
            <p className="text-[25px] text-[#000000] font-poppins">
              {t("Current Opportunities:")}
            </p>
            <ul className="flex flex-col items-start">
              <Opportunities />
            </ul>
          </div>
        </article>
      </section>
      <div className="w-full flex justify-center">
        <Services />
      </div>
      <Locations />
      <Testimonials headingFlag={true} mode={"light"} />
    </main>
  );
};

export default Career;