"use client";
import { useFilter } from "@/hooks/useFilter";
import React, { ReactNode, useEffect, useState } from "react";
import Breadcrumb from "../../_components/breadcrumb";

// interface SearchbarProps {
//   children: ReactNode;
// }

export default function SearchBar() {
  const { setFilter } = useFilter();
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const debounceInput = setTimeout(() => {
      setFilter({
        search: query,
      });
    }, 1500);

    return () => clearTimeout(debounceInput);
  }, [query]);

  return (
    <div id="title" className="container max-w-[1130px] mx-auto flex flex-col px-8 pt-[110px] lg:px-0 md:px-12 lg:mt-5">
      <div className="flex flex-col gap-5 self-start sm:ml-0">
        <Breadcrumb />
        <h1 className="font-bold text-2xl mt-5 mb-6 sm:mb-0 md:text-3xl leading-9 break-words sm:w-full w-full">Our Product Catalog</h1>
      </div>
      <div className="flex gap-3 sm:w-full justify-end">
        {/* <form action="" className="max-w-[480px] w-full bg-white flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
          <input
            type="text"
            id=""
            name=""
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black"
            placeholder="Search product by name, brand, category"
          />
          <button type="submit" className="flex shrink-0">
            <img src="/assets/icons/search-normal.svg" alt="icon" />
          </button>
        </form> */}
        <form
          action=""
          className="max-w-[480px] w-full bg-white flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[8px_20px] sm:p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300 md:mt-4">
          <input
            type="text"
            id=""
            name=""
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black text-xs sm:text-sm"
            placeholder="Search product by name, brand, category"
          />
          <button type="submit" className="flex shrink-0">
            <img src="/assets/icons/search-normal.svg" alt="icon" />
          </button>
        </form>
        <div id="filter-button" className="flex items-center gap-3 sm:hidden">
          <button>
            <div className="w-10 h-10 flex shrink-0 rounded-full items-center justify-center border border-[#E5E5E5] cursor-pointer">
              <img src="assets/icons/filter.png" alt="icon" className="w-6 h-6" />
            </div>
          </button>
        </div>
        {/* {children} */}
      </div>
    </div>
  );
}
