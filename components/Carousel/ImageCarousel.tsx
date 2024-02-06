"use client";

import { useState } from "react";
import Image from "next/image";
import { sample1, sample2, sample3, sample4 } from "@/assets/images/slider";

export const ImageCarousel = () => {
  const allImages = [
    { id: 1, image: sample1 },
    { id: 2, image: sample2 },
    { id: 3, image: sample3 },
    { id: 4, image: sample4 },
  ];

  const [selectedImage, setSelectedImage] = useState(allImages[0].image);

  const handleClick = (image: any) => {
    setSelectedImage(image);
  };

  const filteredImages = allImages.filter(
    (item) => item.image !== selectedImage
  );

  return (
    <section
      className="min-w-[320px] max-w-[1000px] min-h-[430px] h-full max-h-[650px] bg-[#D9D9D9] flex flex-col items-start justify-start gap-4 p-5 rounded-[10px] w-full"
      //   style={{ aspectRatio: "1:3" }}
    >
      <div className="w-full" style={{ aspectRatio: 1 }}>
        {selectedImage && (
          <div className="relative w-full h-full">
            <Image
              src={selectedImage}
              alt={`location image`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        )}
      </div>
      <div className="flex gap-2 items-center">
        {filteredImages.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(item.image)}
            className="cursor-pointer"
          >
            <Image
              src={item.image}
              alt={`Image ${item.id}`}
              width={100}
              height={100}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
