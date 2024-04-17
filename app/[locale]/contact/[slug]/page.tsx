import { DetailedLocation } from "./DetailedLocation";

const LocationDetails = ({ params }: { params: { slug: string } }) => {
  return <DetailedLocation slug={params.slug} />;
};

export default LocationDetails;
