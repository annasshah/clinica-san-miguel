export const Button = ({
  text,
  size,
  route,
  bgColor,
  textColor,
}: {
  text: string;
  size: { width: string; height: string };
  route: string;
  bgColor: string;
  textColor: string;
}) => {
  return (
    <button
      className={`rounded-[10px] font-antipasto flex justify-center items-center text-[20px] text-opacity-8`}
      style={{
        width: `${size.width}`,
        height: `${size.height}`,
        backgroundColor: `${bgColor}`,
        color: `${textColor}`,
      }}
    >
      {text}
    </button>
  );
};
