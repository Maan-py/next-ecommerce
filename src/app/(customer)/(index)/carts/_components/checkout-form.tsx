"use client";
import { useCart } from "@/hooks/useCart";
import { rupiahFormat } from "@/lib/utils";
import React, { useMemo } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { storeOrder } from "../lib/action";
import { ActionResult } from "@/types";

const InitialState: ActionResult = {
  error: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className="p-[12px_24px] bg-[#0D5CD7] rounded-full text-center font-semibold text-white cursor-pointer">
      {pending ? "Checkout with Xendit..." : "Checkout Now"}
    </button>
  );
}

export default function CheckoutForm() {
  const { products } = useCart();

  const grandTotal = useMemo(() => {
    return products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0);
  }, [products]);

  const storeOrderParam = (_: unknown, formData: FormData) => storeOrder(_, formData, grandTotal, products);
  const [state, formAction] = useFormState(storeOrderParam, InitialState);
  return (
    // <form action={formAction} id="checkout-info" className="container max-w-[1130px] mx-auto flex justify-between gap-5 mt-[50px] pb-[100px]">
    //   <div className="w-[650px] flex flex-col shrink-0 gap-4 h-fit">
    //     <h2 className="font-bold text-2xl leading-[34px]">Your Shipping Address</h2>
    //     <div className="flex flex-col gap-5 p-[30px] rounded-3xl border border-[#E5E5E5] bg-white">
    //       <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/profile-circle.svg" alt="icon" />
    //         </div>
    //         <input type="text" id="" name="name" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your real complete name" required />
    //       </div>
    //       <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/house-2.svg" alt="icon" />
    //         </div>
    //         <input type="text" id="" name="address" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your active house address" required />
    //       </div>
    //       <div className="flex items-center gap-[30px]">
    //         <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
    //           <div className="flex shrink-0">
    //             <img src="/assets/icons/global.svg" alt="icon" />
    //           </div>
    //           <input type="text" id="" name="city" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="City" required />
    //         </div>
    //         <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
    //           <div className="flex shrink-0">
    //             <img src="/assets/icons/location.svg" alt="icon" />
    //           </div>
    //           <input type="number" id="" name="postal_code" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Post code" required />
    //         </div>
    //       </div>
    //       <div className="flex items-start gap-[10px] rounded-[20px] border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/note.svg" alt="icon" />
    //         </div>
    //         <textarea name="note" id="" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black resize-none" rows={6} placeholder="Additional notes for courier" required />
    //       </div>
    //       <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/call.svg" alt="icon" />
    //         </div>
    //         <input type="tel" id="" name="phone" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your phone number or whatsapp" required />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex flex-1 flex-col shrink-0 gap-4 h-fit">
    //     <h2 className="font-bold text-2xl leading-[34px]">Payment Details</h2>
    //     <div className="w-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
    //       <a href="">
    //         <div className="w-full bg-white border border-[#E5E5E5] flex items-center justify-between gap-2 p-5 rounded-3xl">
    //           <div className="flex items-center gap-[10px]">
    //             <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
    //               <img src="/assets/icons/cake.svg" alt="icon" />
    //             </div>
    //             <div className="flex flex-col gap-[2px]">
    //               <p className="font-semibold">100% Its Original</p>
    //               <p className="text-sm">We dont sell fake products</p>
    //             </div>
    //           </div>
    //           <div className="flex shrink-0">
    //             <img src="/assets/icons/arrow-right.svg" alt="icon" />
    //           </div>
    //         </div>
    //       </a>
    //       <div className="flex flex-col gap-4">
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-2">
    //             <div className="flex shrink-0">
    //               <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //             </div>
    //             <p>Sub Total</p>
    //           </div>
    //           <p className="font-semibold">{rupiahFormat(grandTotal)}</p>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-2">
    //             <div className="flex shrink-0">
    //               <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //             </div>
    //             <p>Insurance 12%</p>
    //           </div>
    //           <p className="font-semibold">Rp 18.389.492</p>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-2">
    //             <div className="flex shrink-0">
    //               <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //             </div>
    //             <p>Shipping (Flat)</p>
    //           </div>
    //           <p className="font-semibold">Rp 200.000</p>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-2">
    //             <div className="flex shrink-0">
    //               <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //             </div>
    //             <p>Warranty Original</p>
    //           </div>
    //           <p className="font-semibold">Rp 0</p>
    //         </div>
    //         <div className="flex items-center justify-between">
    //           <div className="flex items-center gap-2">
    //             <div className="flex shrink-0">
    //               <img src="/assets/icons/tick-circle.svg" alt="icon" />
    //             </div>
    //             <p>PPN 11%</p>
    //           </div>
    //           <p className="font-semibold">Rp 123.489.333</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-1">
    //         <p className="font-semibold">Grand Total</p>
    //         <p className="font-bold text-[32px] leading-[48px] underline text-[#0D5CD7]">{rupiahFormat(grandTotal)}</p>
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <SubmitButton />
    //         <a href="" className="p-[12px_24px] bg-white rounded-full text-center font-semibold border border-[#E5E5E5]">
    //           Contact Sales
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </form>
    <form action={formAction} id="checkout-info" className="container max-w-[1130px] mx-auto flex flex-col xl:flex-row justify-between gap-5 mt-[50px] px-8 lg:px-0 pb-[100px]">
      <div className="sm:w-[650px] w-full flex flex-col shrink-0 gap-4 h-full text-sm md:w-full lg:w-[650px]">
        <h2 className="font-bold text-2xl mt-5 md:text-3xl leading-9 break-words sm:w-full">Your Shipping Address</h2>
        <div className="flex flex-col gap-5 p-[15px] rounded-3xl border border-[#E5E5E5] bg-white md:text-[1rem]">
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_15px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/profile-circle.svg" alt="icon" />
            </div>
            <input type="text" id="" name="name" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your real complete name" required />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/house-2.svg" alt="icon" />
            </div>
            <input type="text" id="" name="address" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your active house address" />
          </div>
          <div className="flex flex-col items-center w-full gap-[30px] text-sm sm:text-[1rem] sm:flex-row">
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] w-full md:w-1/2 focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300  ">
              <div className="flex shrink-0">
                <img src="/assets/icons/global.svg" alt="icon" />
              </div>
              <input type="text" id="" name="city" className="appearance-none outline-none w-1/4 placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="City" required />
            </div>
            <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] w-full md:w-1/2 focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
              <div className="flex shrink-0">
                <img src="/assets/icons/location.svg" alt="icon" />
              </div>
              <input type="number" id="" name="postal_code" className="appearance-none outline-none w-full placeholder:text-[#616369]  placeholder:font-normal font-semibold text-black " placeholder="Post code" required />
            </div>
          </div>
          <div className="flex items-start gap-[10px] rounded-[20px] border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/note.svg" alt="icon" />
            </div>
            <textarea name="note" id="" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black resize-none" rows={6} placeholder="Additional notes for courier" />
          </div>
          <div className="flex items-center gap-[10px] rounded-full border border-[#E5E5E5] p-[12px_20px] focus-within:ring-2 focus-within:ring-[#FFC736] transition-all duration-300">
            <div className="flex shrink-0">
              <img src="/assets/icons/call.svg" alt="icon" />
            </div>
            <input type="tel" id="" name="phone" className="appearance-none outline-none w-full placeholder:text-[#616369] placeholder:font-normal font-semibold text-black" placeholder="Write your phone number" required />
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col shrink-0 gap-4 self-stretch">
        <h2 className="font-bold text-2xl mt-5 md:text-3xl leading-9 break-words sm:w-full">Payment Details</h2>
        <div className="w-full h-full bg-white border border-[#E5E5E5] flex flex-col gap-[30px] p-[30px] rounded-3xl">
          <button disabled>
            <div className="w-full bg-white border border-[#E5E5E5] flex items-center justify-between gap-2 p-5 rounded-3xl">
              <div className="flex items-center gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                  <img src="/assets/icons/cake.svg" alt="icon" />
                </div>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-semibold ml-5">100% It&apos;s Original</p>
                </div>
              </div>
            </div>
          </button>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex shrink-0">
                  <img src="/assets/icons/tick-circle.svg" alt="icon" />
                </div>
                <p>Sub Total</p>
              </div>
              <p className="font-semibold">{rupiahFormat(grandTotal)}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Grand Total</p>
            <p className="font-bold sm:text-[32px] md:text-xl text-xl leading-[48px] underline text-[#0D5CD7]">{rupiahFormat(grandTotal)}</p>
          </div>
          <div className="flex flex-col gap-3">
            <SubmitButton />
          </div>
        </div>
      </div>
    </form>
  );
}
