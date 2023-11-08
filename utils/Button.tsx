export const Button = ({
  text,
  size,
  route,
  bgColor,
}: {
  text: string;
  size: { width: string; height: string };
  route: string;
  bgColor: string;
}) => {
  return (
    <button
      className={`rounded-[10px] flex justify-center items-center text-[20px] text-[#ffffff] text-opacity-8`}
      style={{
        width: `${size.width}`,
        height: `${size.height}`,
        backgroundColor: `${bgColor}`,
      }}
    >
      {text}
    </button>
  );
};
