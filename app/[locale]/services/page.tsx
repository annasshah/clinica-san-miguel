import { Testimonials } from "@/sections";
// import { services } from "../../../constants";
import { styles } from "../styles";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import { ServicesComponent } from "./ServicesComponent";

const i18nNamespaces = ["common"];

const Services = async ({
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
            <p className={`${styles.sectionSubText} text-[#19192C]`}>
              {t("what we offer")}
            </p>
            <h1 className={`${styles.sectionHeadText} text-[#C1001F]`}>
              {t("services")}
            </h1>
          </div>

          <ServicesComponent />
        </section>

        {/* <Testimonials headingFlag={true} mode={"light"} /> */}
      </main>
    </TranslationsProvider>
  );
};

export default Services;
