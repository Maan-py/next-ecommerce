"use client";
import React, { useState } from "react";
import Navbar from "../../_components/navbar";
import SearchBar from "./search-bar";
import FilterPrice from "./filter-price";
import FilterStock from "./filter-stock";
import FilterBrand from "./filter-brands";
import FilterLocation from "./filter-location";
import FilterCategories from "./filter-categories";
import ProductsListing from "./products-listing";
import { Session } from "lucia";
import { User } from "lucia";

interface CatalogProps {
  session: Session | null;
  user: User | null;
}

export default function CatalogPage({ session, user }: CatalogProps) {
  return (
    <>
      <header className="bg-white fixed lg:relative lg:top-auto lg:right-auto lg:left-auto lg:pt-[30px] lg:pb-[50px] top-0 right-0 left-0 z-[999999]">
        <Navbar session={session} user={user} />
      </header>
      <SearchBar />
      <div id="catalog" className="container max-w-[1130px] mx-auto flex gap-[30px] mt-[50px] pb-[100px] w-full">
        {/* Filter Desktop */}
        <form action="" className="flex-1 flex-col bg-white p-[30px] gap-5 h-fit border border-[#E5E5E5] rounded-[30px] hidden lg:flex">
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
        </form>

        {/* Filter Mobile */}
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

        <div className="w-[780px] flex flex-col bg-white p-[30px] gap-[30px] h-fit border mx-5 xl:mx-0 border-[#E5E5E5] rounded-[30px] -mt-10 sm:mt-0">
          <h2 className="font-bold text-2xl leading-[34px]">Products</h2>
          <ProductsListing />
        </div>
      </div>
    </>
  );
}
