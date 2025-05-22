"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

interface CarouselImagesProp {
  images: string[];
}

export default function CarouselImages({ images }: CarouselImagesProp) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: 1, // Default untuk mobile
      spacing: 10,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: "auto", // Auto untuk desktop
          spacing: 40,
        },
      },
    },
  });

  return (
    <div id="details-images" className="main-carousel mt-[30px] mx-6 lg:ml-22 sm:mx-0">
      <div ref={sliderRef} className="keen-slider">
        {images.map((item, i) => (
          <div key={item + i} className="keen-slider__slide image-card first-of-type:pl-[calc((100vw-1130px-20px)/2)] mr-10 justify-center sm:mr-0 sm:pr-6">
            <div className="bg-white w-[320px] h-[270px] p-10 flex shrink-0 border border-[#E5E5E5] justify-center items-center rounded-[30px] overflow-hidden sm:w-[470px] sm:h-[350px]">
              <Image src={item} alt="thumbnail" fill className="object-contain" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
