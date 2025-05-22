import React, { Suspense } from "react";
import Navbar from "../../_components/navbar";
import CarouselImages from "./_components/carousel-images";
import ListProducts from "../../_components/list-products";
import PriceInfo from "./_components/price-info";
import { Tparams } from "@/types";
import { getProductById } from "./lib/data";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/auth";
import Breadcrumb from "../../_components/breadcrumb";

interface DetailProductProp {
  params: Tparams;
}

export default async function DetailProductPage({ params }: DetailProductProp) {
  const { session, user } = await getUser();
  const { id }: { id: string } = await params;
  const product = await getProductById(Number.parseInt(id));

  if (!product) {
    return redirect("/");
  }

  return (
    // <>
    //   <header className="bg-[#EFF3FA] pt-[30px] h-[351px] -mb-[181px]">
    //     <Navbar session={session} user={user} />
    //   </header>
    //   <div id="title" className="container max-w-[1130px] mx-auto flex items-center justify-between">
    //     <div className="flex flex-col gap-5">
    //       <Breadcrumb />
    //       <h1 className="font-bold text-4xl leading-9">{product.name}</h1>
    //     </div>
    //     <div className="flex items-center gap-2 justify-end">
    //       <div className="flex items-center">
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/Star.svg" alt="star" />
    //         </div>
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/Star.svg" alt="star" />
    //         </div>
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/Star.svg" alt="star" />
    //         </div>
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/Star.svg" alt="star" />
    //         </div>
    //         <div className="flex shrink-0">
    //           <img src="/assets/icons/Star-gray.svg" alt="star" />
    //         </div>
    //       </div>
    //       <p className="font-semibold">({product._count.orders})</p>
    //     </div>
    //   </div>
    //   <CarouselImages images={product.images} />
    //   <div id="details-benefits" className="container max-w-[1130px] mx-auto flex items-center gap-[50px] justify-center mt-[50px]">
    //     <div className="flex items-center gap-[10px]">
    //       <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
    //         <img src="/assets/icons/star-outline.svg" alt="icon" />
    //       </div>
    //       <p className="font-semibold text-sm">
    //         Include Official <br /> Warranty
    //       </p>
    //     </div>
    //     <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
    //     <div className="flex items-center gap-[10px]">
    //       <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
    //         <img src="/assets/icons/code-circle.svg" alt="icon" />
    //       </div>
    //       <p className="font-semibold text-sm">
    //         Bonus Mac OS <br /> Capitan Pro
    //       </p>
    //     </div>
    //     <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
    //     <div className="flex items-center gap-[10px]">
    //       <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
    //         <img src="/assets/icons/like.svg" alt="icon" />
    //       </div>
    //       <p className="font-semibold text-sm">
    //         100% Original <br /> From Factory
    //       </p>
    //     </div>
    //     <div className="border-[0.5px] border-[#E5E5E5] h-12"></div>
    //     <div className="flex items-center gap-[10px]">
    //       <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
    //         <img src="/assets/icons/tag.svg" alt="icon" />
    //       </div>
    //       <p className="font-semibold text-sm">
    //         Free Tax On <br /> Every Sale
    //       </p>
    //     </div>
    //   </div>
    //   <div id="details-info" className="container max-w-[1030px] mx-auto flex justify-between gap-5 mt-[50px]">
    //     <div className="max-w-[650px] w-full flex flex-col gap-[30px]">
    //       <div id="about" className="flex flex-col gap-[10px]">
    //         <h3 className="font-semibold">About Product</h3>
    //         <p className="leading-[32px]">{product.description}</p>
    //       </div>
    //       <div id="testi" className="flex flex-col gap-[10px]">
    //         <h3 className="font-semibold">Real Testimonials</h3>
    //         <div className="grid grid-cols-2 gap-5">
    //           <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
    //             <div className="flex">
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star-gray.svg" alt="star" />
    //               </div>
    //             </div>
    //             <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
    //             <div className="flex items-center gap-[10px]">
    //               <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
    //                 <img src="/assets/photos/p2.png" className="w-full h-full object-cover rounded-full" alt="photo" />
    //               </div>
    //               <div className="flex flex-col gap-[2px]">
    //                 <p className="font-semibold text-sm leading-[22px]">Angga Risky</p>
    //                 <p className="text-xs leading-[18px]">12 January 2028</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
    //             <div className="flex">
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star-gray.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star-gray.svg" alt="star" />
    //               </div>
    //             </div>
    //             <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
    //             <div className="flex items-center gap-[10px]">
    //               <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
    //                 <img src="/assets/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo" />
    //               </div>
    //               <div className="flex flex-col gap-[2px]">
    //                 <p className="font-semibold text-sm leading-[22px]">Sarifuding</p>
    //                 <p className="text-xs leading-[18px]">12 January 2028</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
    //             <div className="flex">
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //             </div>
    //             <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
    //             <div className="flex items-center gap-[10px]">
    //               <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
    //                 <img src="/assets/photos/p3.png" className="w-full h-full object-cover rounded-full" alt="photo" />
    //               </div>
    //               <div className="flex flex-col gap-[2px]">
    //                 <p className="font-semibold text-sm leading-[22px]">Ika Nurina</p>
    //                 <p className="text-xs leading-[18px]">12 January 2028</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
    //             <div className="flex">
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star-gray.svg" alt="star" />
    //               </div>
    //             </div>
    //             <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
    //             <div className="flex items-center gap-[10px]">
    //               <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
    //                 <img src="/assets/photos/p1.png" className="w-full h-full object-cover rounded-full" alt="photo" />
    //               </div>
    //               <div className="flex flex-col gap-[2px]">
    //                 <p className="font-semibold text-sm leading-[22px]">Sami Mami</p>
    //                 <p className="text-xs leading-[18px]">12 January 2028</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="testi-card flex flex-col bg-white p-5 gap-5 border border-[#E5E5E5] rounded-[20px] h-fit">
    //             <div className="flex">
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star-gray.svg" alt="star" />
    //               </div>
    //               <div className="flex shrink-0">
    //                 <img src="/assets/icons/Star-gray.svg" alt="star" />
    //               </div>
    //             </div>
    //             <p className="line-clamp-2 hover:line-clamp-none leading-[28px]">I do really love this product helped me to achieve my first million Lorem ipsum dolor sit amet.</p>
    //             <div className="flex items-center gap-[10px]">
    //               <div className="w-[50px] h-[50px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
    //                 <img src="/assets/photos/p2.png" className="w-full h-full object-cover rounded-full" alt="photo" />
    //               </div>
    //               <div className="flex flex-col gap-[2px]">
    //                 <p className="font-semibold text-sm leading-[22px]">Baronia</p>
    //                 <p className="text-xs leading-[18px]">12 January 2028</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <PriceInfo
    //       isLogin={session ? true : false}
    //       item={{
    //         id: product.id,
    //         category_name: product.category.name,
    //         image_url: product.images[0],
    //         name: product.name,
    //         price: Number(product.price),
    //       }}
    //     />
    //   </div>
    //   <div id="recommedations" className="container max-w-[1130px] mx-auto flex flex-col gap-[30px] pb-[100px] mt-[70px]">
    //     <Suspense fallback={<span>Loading...</span>}>
    //       <ListProducts
    //         type="New Release"
    //         title={
    //           <>
    //             Other Products <br /> You Might Need
    //           </>
    //         }
    //         isShowDetail={false}
    //       />
    //     </Suspense>
    //   </div>
    // </>
    <>
      <header className="bg-white fixed lg:relative lg:top-auto lg:right-auto lg:left-auto lg:pt-[30px] lg:pb-[50px] top-0 right-0 left-0 z-[999999]">
        <Navbar session={session} user={user} />
      </header>
      <div id="title" className="container max-w-[1130px] mx-auto flex flex-col px-8 pt-[110px] lg:px-0 md:px-12 lg:mt-5">
        <div className="flex flex-col gap-5 w-full mb-5">
          <Breadcrumb />
        </div>
        <div className="flex flex-col gap-2 justify-start sm:flex-row md:pr-8">
          <h1 className="font-bold text-2xl mt-5 md:text-3xl leading-9 break-words sm:w-full">{product.name}</h1>
          <div className="flex items-center">
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star.svg" alt="star" />
            </div>
            <div className="flex shrink-0">
              <img src="/assets/icons/Star-gray.svg" alt="star" />
            </div>
            <p className="font-semibold ml-2">({product._count.orders})</p>
          </div>
        </div>
      </div>
      <CarouselImages images={product.images} />
      <div id="details-info" className="container max-w-[1030px] mx-auto flex flex-col justify-between gap-5 mt-[30px] p-8 md:p-12 lg:p-0 lg:flex-row">
        <div className="max-w-[650px] w-full flex flex-col gap-[30px]">
          <div id="about" className="flex flex-col gap-[10px]">
            <h3 className="font-semibold">About Product</h3>
            <p className="leading-[32px]">{product.description}</p>
          </div>
          <div id="details-benefits" className="container flex flex-col items-center gap-5 w-full sm:gap-[50px] mt-[5px] sm:mt-[50px] sm:flex-row">
            <div className="flex flex-col justify-center sm:flex-row gap-5 d:justify-center md:items-center md:self-center">
              <div className="flex items-center gap-2 w-full mb-5 sm:flex-row sm:items-center sm:gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                  <img src="/assets/icons/star-outline.svg" alt="icon" />
                </div>
                <p className="font-semibold text-sm sm:text-left">
                  Include Official <br /> Warranty
                </p>
              </div>

              <div className="border-[0.5px] border-[#E5E5E5] h-12 hidden sm:block"></div>

              <div className="flex items-center gap-2 w-full mb-5 sm:flex-row sm:items-center sm:gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                  <img src="/assets/icons/code-circle.svg" alt="icon" />
                </div>
                <p className="font-semibold text-sm sm:text-left">Bonus Pembelian</p>
              </div>

              <div className="border-[0.5px] border-[#E5E5E5] h-12 hidden sm:block"></div>

              <div className="flex items-center gap-2 w-full mb-5 sm:flex-row sm:items-center sm:gap-[10px]">
                <div className="w-12 h-12 flex shrink-0 rounded-full bg-[#FFC736] items-center justify-center overflow-hidden">
                  <img src="/assets/icons/like.svg" alt="icon" />
                </div>
                <p className="font-semibold text-sm sm:text-left">
                  100% Original/ <br /> From Factory
                </p>
              </div>
            </div>
          </div>
        </div>
        <PriceInfo
          isLogin={session ? true : false}
          item={{
            id: product.id,
            category_name: product.category.name,
            image_url: product.images[0],
            name: product.name,
            price: Number(product.price),
          }}
        />
      </div>
      <div id="recommedations" className="container max-w-[1130px] mx-auto flex flex-col gap-[30px] pb-[100px] mt-[70px] mb-32 p-8 lg:p-0 md:p-12">
        <Suspense fallback={<span>Loading...</span>}>
          <ListProducts
            type="New Release"
            title={
              <>
                Other Products <br /> You Might Need
              </>
            }
            isShowDetail={false}
          />
        </Suspense>
      </div>
    </>
  );
}
