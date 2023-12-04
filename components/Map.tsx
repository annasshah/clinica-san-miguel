interface MapProps {
  location: string;
}

export const Map: React.FC<MapProps> = ({ location }) => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed?pb=${location}`}
      // width="350"
      height="120"
      className="w-[320px] sm:w-[350px] rounded-t-[5px]"
      style={{ borderRadius: "5px 0 5px 0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
