export const IconButton = ({
  icon,
  fontSize,
  route,
  bgColor,
  size,
}: {
  icon: any;
  fontSize: string;
  route: string;
  bgColor: string;
  size: { width: string; height: string };
}) => {
  return (
    <div
      className="flex justify-center items-center rounded-full"
      style={{
        backgroundColor: `${bgColor}`,
        width: `${size.width}`,
        height: `${size.height}`,
      }}
    >
      <div
        className="text-[#ffffff] aspect-auto"
        style={{ fontSize: `${fontSize}` }}
      >
        {icon}
      </div>
    </div>
  );
};
