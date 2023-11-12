export const Mission = ({
  icon,
  heading,
  content,
}: {
  icon: any;
  heading: string;
  content: string;
}) => {
  return (
    <article className="w-[350px] h-[230px] rounded-[10px] bg-white shadow-md flex flex-col justify-center items-start p-4">
      <div className="text-left text-[#C1001F] text-[40px] w-[40px] h-[40px]">
        {icon}
      </div>
      <div className="flex flex-col justify-start items-start">
        <h3 className="text-[25px] text-[#3D3D3C] font-antipasto">
          {heading}:
        </h3>
        <p className="text-[20px] text-[#3D3D3C] font-inter">{content}</p>
      </div>
    </article>
  );
};
