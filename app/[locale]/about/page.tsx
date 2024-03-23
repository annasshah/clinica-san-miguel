import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import AboutScreen from "./AboutScreen";

const i18nNamespaces = ["home", "common"];

const About = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <AboutScreen />
    </TranslationsProvider>
  );
};

export default About;
