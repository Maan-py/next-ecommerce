"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface CarouselImagesProp {
  images: string[];
}

export default function CarouselImages({ images }: CarouselImagesProp) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: false,
    slides: {
      perView: "auto",
      spacing: 20,
    },
  });

  return (
    <div id="details-images" className="overflow-x-hidden mt-[30px]">
      <div ref={sliderRef} className="keen-slider">
        {images.map((item, i) => (
          <div key={item + i} className="keen-slider__slide image-card pr-5 first-of-type:pl-[calc((100vw-1130px-20px)/2)]">
            <div className="bg-white w-[470px] h-[350px] p-10 flex shrink-0 border border-[#E5E5E5] justify-center items-center rounded-[30px] overflow-hidden">
              <img src={item} className="w-full h-full object-contain" alt="thumbnail" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
