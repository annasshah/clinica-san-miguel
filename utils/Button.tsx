export const Button = ({
  text,
  size,
  route,
}: {
  text: string;
  size: object;
  route: string;
}) => {
  return (
    <button
      className={`rounded-[10px] flex justify-center items-center text-[16px] text-[#ffffff] text-opacity-20`}
    >
      {text}
    </button>
  );
};
