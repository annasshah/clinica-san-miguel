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
    <article className="w-[350px] h-auto lg:h-[230px] rounded-[10px] bg-transparent lg:bg-[#F8F5F0] lg:shadow-md flex flex-col justify-center items-center lg:items-start p-4">
      <div className="text-center lg:text-left text-[#C1001F] text-[40px] w-[40px] h-[40px]">
        {icon}
      </div>
      <div className="flex flex-col justify-center lg:justify-start items-center lg:items-start">
        <h3 className="text-[22px] text-white lg:text-[#3D3D3C] font-poppins">
          {heading}:
        </h3>
        <p className="text-[16px] text-white lg:text-[#3D3D3C] text-center lg:text-left font-poppins">
          {content}
        </p>
      </div>
    </article>
  );
};
