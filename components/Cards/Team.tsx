import Image from "next/image";

export const Team = ({
  image,
  heading,
  description,
}: {
  image: any;
  heading: string;
  description: string;
}) => {
  return (
    <article className="flex flex-col w-[340px] gap-7 justify-center items-center">
      <Image
        src={image}
        alt={""}
        className="w-full h-[179px] aspect-auto object-contain"
      />
      <div
        className="relative w-full p-3 bg-[#3D3D3C] h-[180px] flex flex-col items-center justify-center"
        style={{ zIndex: 20 }}
      >
        <div
          className="absolute top-0 left-5 mt-[-25px]"
          style={{
            borderStyle: "solid",
            borderColor: "transparent transparent #3D3D3C transparent",
            borderWidth: "0 44.5px 50px 44.5px",
            display: "inline-block",
            height: 0,
            width: 0,
            borderRadius: "10px",
            zIndex: 10,
          }}
        ></div>
        <h3 className="text-[#F8F5F0] font-antipasto font-semibold text-[20px] text-left">
          {heading}
        </h3>
        <p className="text-[#F8F5F0] font-inter text-[14px] text-left">
          {description}
        </p>
      </div>
    </article>
  );
};
