interface MapProps {
  location: string;
  height: number;
}

export const Map: React.FC<MapProps> = ({ height, location }) => {
  return (
    <iframe
      src={`https://www.google.com/maps/embed?pb=${location}`}
      // width="350"
      height={height}
      className="w-[100%] rounded-t-[5px]"
      style={{ borderRadius: "5px 0 5px 0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
};
