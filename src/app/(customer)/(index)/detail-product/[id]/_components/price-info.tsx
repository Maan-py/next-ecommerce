"use client";
import { useCart } from "@/hooks/useCart";
import { rupiahFormat } from "@/lib/utils";
import { TCart, TProduct } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

interface PriceInfoProp {
  item: TProduct;
  isLogin: boolean;
}

export default function PriceInfo({ item, isLogin }: PriceInfoProp) {
  const { addProduct } = useCart();

  const router = useRouter();

  function checkout() {
    const newCart: TCart = {
      ...item,
      quantity: 1,
    };

    addProduct(newCart);

    router.push("/carts");
  }

  return (
    // <div className="w-[302px] flex flex-col shrink-0 gap-5 h-fit">
    //   <div className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
    //     <div className="flex flex-col gap-1">
    //       <p className="font-semibold">Brand New</p>
    //       <p className="font-bold text-[28px] leading-[48px]">{rupiahFormat(item.price)}</p>
    //     </div>
    //     <div className="flex flex-col gap-4">
    //       <div className="flex items-center gap-2">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //         </div>
    //         <p className="font-semibold">Peti telur packaging</p>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //         </div>
    //         <p className="font-semibold">Manual book instructions</p>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //         </div>
    //         <p className="font-semibold">Customer service 24/7</p>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //         </div>
    //         <p className="font-semibold">Free delivery Jababeka</p>
    //       </div>
    //       <div className="flex items-center gap-2">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //         </div>
    //         <p className="font-semibold">Kwitansi orisinal 100%</p>
    //       </div>
    //     </div>
    //     <div className="flex flex-col gap-3">
    //       <button type="button" disabled={!isLogin} onClick={checkout} className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white disabled:opacity-60 cursor-pointer">
    //         Add to Cart
    //       </button>
    //       <a href="" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5]">
    //         Save to Wishlist
    //       </a>
    //     </div>
    //   </div>
    //   <a href="">
    //     <div className="w-full bg-white border border-[#E5E5E5] flex items-center justify-between gap-2 p-5 rounded-3xl">
    //       <div className="flex items-center gap-[10px]">
    //         <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
    //           <img src="/assets/icons/cake.svg" alt="icon" />
    //         </div>
    //         <div className="flex flex-col gap-[2px]">
    //           <p className="font-semibold">Buy as a Gift</p>
    //           <p className="text-sm">Free Delivery</p>
    //         </div>
    //       </div>
    //       <div className="flex shrink-0">
    //         <img src="/assets/icons/arrow-right.svg" alt="icon" />
    //       </div>
    //     </div>
    //   </a>
    // </div>
    <div className="w-[302px] flex flex-col shrink-0 gap-5 h-fit md:w-full lg:w-1/3">
      <div className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Brand New</p>
          <p className="font-bold text-[32px] leading-[48px]">{rupiahFormat(item.price)}</p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Manual book instructions</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Customer service 24/7</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Free delivery</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex shrink-0">
              <img src="/assets/icons/tick-circle.svg" alt="icon" />
            </div>
            <p className="font-semibold">Kuitansi orisinal 100%</p>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button disabled={!isLogin} onClick={checkout} className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white cursor-pointer">
            Add to Cart
          </button>
          <button className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5] disabled:cursor-not-allowed" disabled>
            Save to Wishlist
          </button>
        </div>
      </div>
      <button className="hover:cursor-not-allowed">
        <div className="w-full bg-white border border-[#E5E5E5] flex items-center justify-between gap-2 p-5 rounded-3xl">
          <div className="flex items-center gap-[10px]">
            <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
              <img src="/assets/icons/cake.svg" alt="icon" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold">Buy as a Gift</p>
              <p className="text-sm">Free Delivery</p>
            </div>
          </div>
          <div className="flex shrink-0">
            <img src="/assets/icons/arrow-right.svg" alt="icon" />
          </div>
        </div>
      </button>
    </div>
  );
}
