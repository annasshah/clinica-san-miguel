import { Testimonials } from "@/sections";
// import { services } from "../../constants";
import { styles } from "../styles";

// import Link from "next/link";
import { LocationsData } from "./constants";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["common"];

const Contact = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main className="flex flex-col gap-5">
        <section className="flex flex-col justify-center items-center my-10">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={`${styles.sectionHeadText} text-[#C1001F] uppercase`}
            >
              {t("Our locations")}
            </h1>
            <p className={`${styles.sectionSubText} text-[#19192C]`}>
              {t("Choose your preferred location")}
            </p>
          </div>
          <article className="flex flex-wrap justify-center items-center gap-5">
            <LocationsData />
          </article>
        </section>

        <Testimonials headingFlag={true} mode={"light"} />
      </main>
    </TranslationsProvider>
  );
};

export default Contact;
