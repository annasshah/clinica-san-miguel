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
      className={`rounded-[10px] flex justify-center items-center text-[16px] text-[#ffffff] text-opacity-20 bg-[${bgColor}] w-[${size.width}] h-[${size.height}]`}
    >
      {text}
    </button>
  );
};
