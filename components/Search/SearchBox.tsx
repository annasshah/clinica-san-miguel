import { Button } from "@/utils";
import Image from "next/image";

export const SearchBox = () => {
  return (
    <div className="flex gap-4">
      <div className="">
        <input />
        <Image src={""} alt={""} />
      </div>
      <Button
        text={"search"}
        size={{ width: "192px", height: "48px" }}
        route={""}
        bgColor={"#3D3D3C"}
      />
    </div>
  );
};
