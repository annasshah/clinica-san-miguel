export const OutlinedButton = ({
  text,
  textColor,
  size,
  route,
  borderColor,
}: {
  text: string;
  textColor: string;
  size: { width: string; height: string };
  route: string;
  borderColor: string;
}) => {
  return (
    <button
      className={`rounded-[10px] flex justify-center items-center text-[20px] bg-transparent text-opacity-8`}
      style={{
        width: `${size.width}`,
        height: `${size.height}`,
        color: `${textColor}`,
        border: `2px solid ${borderColor}`,
      }}
    >
      {text}
    </button>
  );
};
