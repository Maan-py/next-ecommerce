import React from "react";
import Navbar from "../_components/navbar";
import CartProducts from "./_components/cart-products";
import CheckoutForm from "./_components/checkout-form";
import { getUser } from "@/lib/auth";
import Breadcrumb from "../_components/breadcrumb";

export default async function CartsPage() {
  const { session, user } = await getUser();
  return (
    <>
      {/* <header className="bg-[#EFF3FA] pt-[30px] h-[351px] -mb-[181px]">
        <Navbar />
      </header> */}
      <header className="bg-white fixed lg:relative lg:top-auto lg:right-auto lg:left-auto lg:pt-[30px] lg:pb-[50px] top-0 right-0 left-0 z-[999999]">
        <Navbar session={session} user={user} />
      </header>
      {/* <div id="title" className="container max-w-[1130px] mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Shop</a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Browse</a>
            <span className="text-sm text-[#6A7789]">/</span>
            <a className="page text-sm text-[#6A7789] last-of-type:text-black">Details</a>
          </div>
          <h1 className="font-bold text-4xl leading-9">My Shopping Cart</h1>
        </div>
      </div> */}
      <div id="title" className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[110px] px-8 lg:px-0">
        <div className="flex flex-col gap-5">
          <Breadcrumb/>
          <h1 className="font-bold text-2xl mt-5 md:text-3xl leading-9 break-words sm:w-full">My Shopping Cart</h1>
        </div>
      </div>
      <CartProducts />
      <CheckoutForm />
    </>
  );
}
