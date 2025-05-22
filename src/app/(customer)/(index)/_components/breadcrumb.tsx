import Link from "next/link";
import React from "react";

export default function Breadcrumb() {
  return (
    <div className="flex gap-5 items-center">
      <Link href={"/catalogs"} className="page text-sm text-[#6A7789] last-of-type:text-black">Shop</Link>
      <span className="text-sm text-[#6A7789]">/</span>
      <Link href={"/"} className="page text-sm text-[#6A7789] last-of-type:text-black">Browse</Link>
      <span className="text-sm text-[#6A7789]">/</span>
      <Link href={"/"} className="page text-sm text-[#6A7789] last-of-type:text-black">Details</Link>
    </div>
  );
}
