import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";
import { DetailedLocation } from "./DetailedLocation";

const i18nNamespaces = ["common", "contact"];

const LocationDetails = async ({
  params,
}: {
  params: { slug: string; locale: string };
}) => {
  const { t, resources } = await initTranslations(
    params.locale,
    i18nNamespaces
  );

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={params.locale}
      resources={resources}
    >
      <DetailedLocation slug={params.slug} />
    </TranslationsProvider>
  );
};

export default LocationDetails;
