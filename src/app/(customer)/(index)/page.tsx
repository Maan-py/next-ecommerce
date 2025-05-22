import React, { Suspense } from "react";
import Navbar from "./_components/navbar";
import ListCategory from "./_components/list-category";
import ListProducts from "./_components/list-products";
import ListBrands from "./_components/list-brands";
import { getUser } from "@/lib/auth";
import Link from "next/link";

export default async function LandingPage() {
  const { session, user } = await getUser();
  return (
    <>
      {/* <header className="bg-[#EFF3FA] pt-[30px] pb-[50px]">
        <Navbar session={session} user={user} />
        <div className="container max-w-[1130px] mx-auto flex items-center justify-between gap-1 mt-[50px]">
          <div className="flex flex-col gap-[30px]">
            <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit">
              <div className="w-[22px] h-[22px] flex shrink-0">
                <img src="/assets/icons/crown.svg" alt="icon" />
              </div>
              <p className="font-semibold text-sm">Most Popular 100th Product in Belanja</p>
            </div>
            <div className="flex flex-col gap-[14px]">
              <h1 className="font-bold text-[55px] leading-[55px]">Working Faster 10x</h1>
              <p className="text-lg leading-[34px] text-[#6A7789]">Dolor si amet lorem super-power features riches than any other platform devices AI integrated.</p>
            </div>
            <div className="flex items-center gap-3">
              <Link href="" className="p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white">
                Add to Cart
              </Link>
              <Link href="" className="p-[18px_24px] rounded-full font-semibold bg-white">
                View Details
              </Link>
            </div>
          </div>
          <div className="w-[588px] h-[360px] flex shrink-0 overflow-hidden relative">
            <img src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png" className="object-contain" alt="icon" />
            <div className="absolute top-[60%] bg-white p-[14px_16px] rounded-3xl flex items-center gap-[10px]">
              <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                <img src="/assets/icons/code-circle.svg" className="w-6 h-6" alt="icon" />
              </div>
              <p className="font-semibold text-sm">
                Bonus Mac OS <br /> Capitan Pro
              </p>
            </div>
            <div className="absolute right-0 top-[30%] bg-white p-[14px_16px] rounded-3xl flex flex-col items-center gap-[10px]">
              <div className="w-12 h-12 flex shrink-0 rounded-full items-center justify-center bg-[#FFC736] overflow-hidden">
                <img src="/assets/icons/star-outline.svg" className="w-6 h-6" alt="icon" />
              </div>
              <p className="font-semibold text-sm text-center">
                Include <br /> Warranty
              </p>
            </div>
          </div>
        </div>
        <div className="container max-w-[1130px] mx-auto flex items-center justify-center gap-10 mt-[50px]">
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="/assets/photos/p1.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">Awesome product!</p>
              <p className="text-xs leading-[18px]">Jemmie Pemilia</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="/assets/photos/p2.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">Money saver 25%</p>
              <p className="text-xs leading-[18px]">Angga Risky</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="/assets/photos/p3.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">I love the warranty</p>
              <p className="text-xs leading-[18px]">Petina Malaka</p>
            </div>
          </div>
          <div className="flex items-center gap-[10px]">
            <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
              <img src="/assets/photos/p4.png" className="w-full h-full object-cover" alt="photo" />
            </div>
            <div className="flex flex-col gap-[2px]">
              <p className="font-semibold text-sm leading-[22px]">Big deals ever!</p>
              <p className="text-xs leading-[18px]">Udin Sarifun</p>
            </div>
          </div>
        </div>
      </header> */}
      <header className="bg-white lg:relative lg:top-auto lg:right-auto lg:left-auto lg:pt-[30px] lg:pb-[50px] ">
        <Navbar session={session} user={user} />
        <div className="container md:max-w-[1130px] mx-auto flex flex-col md sm:flex-row items-center justify-between gap-1 pt-[110px] mt-5">
          <div className="flex flex-col gap-[30px] p-10 ">
            <div className="flex items-center gap-[10px] p-[8px_16px] rounded-full bg-white w-fit">
              <div className="w-[22px] h-[22px] flex shrink-0">
                <img src="/assets/icons/crown.svg" alt="icon" />
              </div>
              <p className="font-semibold text-sm w-full">Most Popular 100th Product in Belanja</p>
            </div>
            <div className="flex flex-col lg:flex-row md:w-full gap-5 justify-center items-center">
              <div className="sm:w-[588px] sm:h-[360px] w-full h-full p-10 flex flex-col shrink-0 overflow-hidden xl:-top-10 lg:order-2">
                <img src="/assets/banners/mba13-m2-digitalmat-gallery-1-202402-Photoroom 2.png" className="object-contain" alt="icon" />
              </div>
              <div className="sm:flex sm:flex-col">
                <div className="flex flex-col gap-[14px]">
                  <h1 className="font-bold sm:text-[50px] sm:leading-[55px] text-[40px]">Working Faster 10x</h1>
                  <p className="text-lg mb-5 leading-[34px] text-[#6A7789]">Eksplorasi tampilan toko digital dengan elemen antarmuka e-commerce yang siap dikembangkan lebih lanjut.</p>
                </div>
                <div className="flex flex-col items-start sm:flex-row md:flex-row sm:items-center gap-3">
                  <Link href="/carts" className="p-[18px_24px] rounded-full font-semibold bg-[#0D5CD7] text-white">
                    Add to Cart
                  </Link>
                  <Link href="/catalogs" className="p-[18px_24px] rounded-full font-semibold bg-[#EFF3FA]">
                    View Catalogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container max-w-[1130px] mx-auto flex items-center justify-center gap-10 mt-[50px]">
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img src="/assets/photos/p1.png" className="w-full h-full object-cover" alt="photo">
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px]">Awesome product!</p>
                    <p className="text-xs leading-[18px]">Jemmie Pemilia</p>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img src="/assets/photos/p2.png" className="w-full h-full object-cover" alt="photo">
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px]">Money saver 25%</p>
                    <p className="text-xs leading-[18px]">Angga Risky</p>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img src="/assets/photos/p3.png" className="w-full h-full object-cover" alt="photo">
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px]">I love the warranty</p>
                    <p className="text-xs leading-[18px]">Petina Malaka</p>
                </div>
            </div>
            <div className="flex items-center gap-[10px]">
                <div className="w-[50px] h-[50px] flex shrink-0 rounded-full border-[5px] border-white overflow-hidden">
                    <img src="/assets/photos/no-profile.png" className="w-full h-full object-cover" alt="photo">
                </div>
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-[22px]">Big deals ever!</p>
                    <p className="text-xs leading-[18px]">Udin Sarifun</p>
                </div>
            </div>
        </div>  */}
      </header>
      <section id="content" className="container max-w-[1130px] mx-auto flex flex-col gap-[50px] pt-[50px] pb-[100px] p-10">
        <Suspense fallback={<span>Loading...</span>}>
          <ListCategory />
        </Suspense>

        <Suspense fallback={<span>Loading...</span>}>
          <ListProducts
            type="Most Picked"
            title={
              <>
                Most Picked <br /> Quality Products
              </>
            }
          />
        </Suspense>

        <ListBrands />
        <Suspense fallback={<span>Loading...</span>}>
          <ListProducts
            type="New Release"
            title={
              <>
                New Releases <br /> From Stores
              </>
            }
          />
        </Suspense>
      </section>
    </>
  );
}
