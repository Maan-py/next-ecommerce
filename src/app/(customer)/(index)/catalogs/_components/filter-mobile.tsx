"use client";

import { useRef, useState } from "react";
import FilterPrice from "./filter-price";
import FilterStock from "./filter-stock";
import FilterBrand from "./filter-brands";
import FilterLocation from "./filter-location";
import FilterCategories from "./filter-categories";

export default function FilterMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div id="filter" className="fixed z-50 top-0 bottom-0 left-0 right-0 h-full hidden" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <form
        id="filter-form"
        action=""
        className="w-full max-h-[75vh] h-1/2 fixed bottom-0 left-0 right-0 opacity-100 flex flex-col bg-white z-30 p-[30px] gap-[14px] border border-[#E5E5E5] rounded-t-[30px] overflow-y-auto transition-transform duration-300 ease-in-out translate-y-full sm:hidden">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-2xl leading-[34px]">Filters</h2>
          <FilterPrice />
          <hr className="border-[#E5E5E5]" />
          <FilterStock />
          <hr className="border-[#E5E5E5]" />
          <FilterBrand />
          <hr className="border-[#E5E5E5]" />
          <FilterLocation />
          <hr className="border-[#E5E5E5]" />
          <FilterCategories />
        </div>
      </form>
    </div>
  );
}
