"use client";
// import { getUser } from "@/lib/auth";
import { Session, User } from "lucia";
import Link from "next/link";
import React, { useState } from "react";

interface NavbarProps {
  session: Session | null;
  user: User | null;
}

export default function Navbar({ session, user }: NavbarProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);

    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
    setIsAnimating(false);
  }
  // const { session, user } = await getUser();
  return (
    <>
      {/* <nav className="container max-w-[1130px] mx-auto flex items-center justify-between bg-[#0D5CD7] p-5 rounded-3xl">
        <div className="flex shrink-0">
          <img src="/assets/logos/logo.svg" alt="icon" />
        </div>
        <ul className="flex items-center gap-[30px]">
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-[#FFC736]">
            <Link href="/catalogs">Shop</Link>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <Link href="/">Categories</Link>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <Link href="/">Testimonials</Link>
          </li>
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 text-white">
            <Link href="/">Rewards</Link>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/carts">
            <div className="w-12 h-12 flex shrink-0">
              <img src="/assets/icons/cart.svg" alt="icon" />
            </div>
          </Link>
          {session && user.role === "customer" ? (
            <>
              <p className="text-white">Hi, {user.name}</p>
              <div className="w-[48px] h-[48px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                <img src="/assets/photos/p4.png" className="w-full h-full object-cover rounded-full" alt="photo" />
              </div>
            </>
          ) : (
            <>
              <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold">
                Sign In
              </Link>
              <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav> */}

      {/* Hamburger Button */}
      <div className="lg:hidden flex fixed top-0 right-0 left-0 z-[2] justify-between items-center p-5 bg-[#0D5CD7]">
        <button onClick={openSidebar} id="hamburger" className="text-white focus:outline-none cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* <div className="flex shrink-0 self-center h-full">
          <img src="/assets/logos/logo.svg" alt="icon" />
        </div> */}

        <div className="flex items-center gap-3">
          <Link href="/carts">
            <div className="w-10 h-10 flex shrink-0">
              <img src="/assets/icons/cart.svg" alt="icon" />
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`menu lg:hidden fixed z-2 inset-0 w-full h-full transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-full">
          <div className="w-[65%] bg-white relative">
            {session && user?.role === "customer" ? (
              <>
                <div className="flex gap-3 items-center p-3 bg-[#0D5CD7]">
                  <div className="w-[70px] h-[70px] flex shrink-0 rounded-full p-1">
                    <img src="/assets/photos/no-profile.png" className="w-full h-full object-cover rounded-full" alt="photo" />
                  </div>
                  <div className="flex flex-col h-full leading-5 mr-10">
                    <p className="font-semibold text-white w-full">
                      Hi, <br />
                      {user.name}
                    </p>
                  </div>
                </div>
                <ul className="mt-10 flex flex-col pr-3">
                  <li className="hover:font-bold hover:bg-[#eff3fa] hover:text-[#FFC736] transition-all duration-300 p-2 pl-5 font-semibold text-black rounded-tr-lg rounded-br-lg flex items-center">
                    <Link href="/catalogs" className="w-full h-full flex justify-between">
                      Shop
                      <div className="w-6 h-6 flex shrink-0 self-end">
                        <img src="/assets/icons/next.png" alt="icon" />
                      </div>
                    </Link>
                  </li>
                  <li className="opacity-50 hover:bg-[#eff3fa] p-2 pl-5 text-black font-semibold rounded-tr-lg rounded-br-lg flex justify-start">
                    <button className="flex justify-between hover:cursor-not-allowed w-full h-full text-left">
                      Categories
                      <div className="w-6 h-6 flex shrink-0 self-end">
                        <img src="/assets/icons/next.png" alt="icon" />
                      </div>
                    </button>
                  </li>
                  <li className="opacity-50 hover:bg-[#eff3fa] p-2 pl-5 text-black font-semibold rounded-tr-lg rounded-br-lg flex">
                    <button className="flex justify-between hover:cursor-not-allowed w-full h-full text-left">
                      Testimonials
                      <div className="w-6 h-6 flex shrink-0 self-end">
                        <img src="/assets/icons/next.png" alt="icon" />
                      </div>
                    </button>
                  </li>
                  <li className="opacity-50 hover:bg-[#eff3fa] p-2 pl-5 text-black font-semibold rounded-tr-lg rounded-br-lg flex">
                    <button className="flex justify-between hover:cursor-not-allowed w-full h-full text-left">
                      Rewards
                      <div className="w-6 h-6 flex shrink-0 self-end">
                        <img src="/assets/icons/next.png" alt="icon" />
                      </div>
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <ul className="mt-5 flex flex-col pr-3">
                <li className="hover:font-bold hover:bg-[#eff3fa] hover:text-[#FFC736] transition-all duration-300 p-2 pl-5 font-semibold text-[#0D5CD7] rounded-tr-lg rounded-br-lg flex items-center">
                  <Link href="/sign-in" className="w-full h-full flex justify-between">
                    Sign In
                    <div className="w-6 h-6 flex shrink-0 self-end">
                      <img src="/assets/icons/next.png" alt="icon" />
                    </div>
                  </Link>
                </li>
                <li className="hover:font-bold hover:bg-[#eff3fa] hover:text-[#FFC736] transition-all duration-300 p-2 pl-5 font-semibold text-[#0D5CD7] rounded-tr-lg rounded-br-lg flex items-center">
                  <Link href="/sign-up" className="w-full h-full flex justify-between">
                    Sign Up
                    <div className="w-6 h-6 flex shrink-0 self-end">
                      <img src="/assets/icons/next.png" alt="icon" />
                    </div>
                  </Link>
                </li>
                <li className="hover:font-bold hover:bg-[#eff3fa] hover:text-[#FFC736] transition-all duration-300 p-2 pl-5 font-semibold text-black rounded-tr-lg rounded-br-lg flex items-center">
                  <Link href="/" className="w-full h-full flex justify-between">
                    Shop
                    <div className="w-6 h-6 flex shrink-0 self-end">
                      <img src="/assets/icons/next.png" alt="icon" />
                    </div>
                  </Link>
                </li>
                <li className="opacity-50 hover:bg-[#eff3fa] p-2 pl-5 text-black font-semibold rounded-tr-lg rounded-br-lg flex justify-start">
                  <button className="flex justify-between hover:cursor-not-allowed w-full h-full text-left">
                    Categories
                    <div className="w-6 h-6 flex shrink-0 self-end">
                      <img src="/assets/icons/next.png" alt="icon" />
                    </div>
                  </button>
                </li>
                <li className="opacity-50 hover:bg-[#eff3fa] p-2 pl-5 text-black font-semibold rounded-tr-lg rounded-br-lg flex">
                  <button className="flex justify-between hover:cursor-not-allowed w-full h-full text-left">
                    Testimonials
                    <div className="w-6 h-6 flex shrink-0 self-end">
                      <img src="/assets/icons/next.png" alt="icon" />
                    </div>
                  </button>
                </li>
                <li className="opacity-50 hover:bg-[#eff3fa] p-2 pl-5 text-black font-semibold rounded-tr-lg rounded-br-lg flex">
                  <button className="flex justify-between hover:cursor-not-allowed w-full h-full text-left">
                    Rewards
                    <div className="w-6 h-6 flex shrink-0 self-end">
                      <img src="/assets/icons/next.png" alt="icon" />
                    </div>
                  </button>
                </li>
              </ul>
            )}

            {/* Close Button */}
            <div onClick={closeSidebar} id="close-button" className="absolute z-30 top-8 -right-16 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer bg-white shadow-lg">
              <img src="/assets/icons/close.png" alt="icon" className="w-4 h-4" />
            </div>
          </div>
          <div onClick={closeSidebar} id="overlay" className={`flex-grow h-full bg-black transition-opacity duration-300 ${isSidebarOpen ? "bg-opacity-65" : "bg-opacity-0"} ${isAnimating ? "opacity-65" : "opacity-0"}`}></div>
        </div>
      </nav>

      {/* <!-- Existing Desktop Navigation --> */}
      <nav className="container max-w-[1130px] z-3 mx-auto lg:flex items-center justify-between bg-[#0D5CD7] p-5 rounded-3xl hidden fixed left-1/2 -translate-x-1/2">
        {/* <div className="flex shrink-0">
          <img src="/assets/logos/logo.svg" alt="icon" />
        </div> */}
        <ul className="flex ml-20 items-center gap-[30px]">
          <li className="hover:font-bold hover:text-[#FFC736] transition-all duration-300 font-bold text-white">
            <Link href="/catalogs">Shop</Link>
          </li>
          <li className="opacity-50 text-white">
            <button className="hover:cursor-not-allowed">Categories</button>
          </li>
          <li className="opacity-50 text-white">
            <button className="hover:cursor-not-allowed">Testimonials</button>
          </li>
          <li className="opacity-50 text-white">
            <button className="hover:cursor-not-allowed">Rewards</button>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Link href="/carts">
            <div className="w-12 h-12 flex shrink-0">
              <img src="/assets/icons/cart.svg" alt="icon" />
            </div>
          </Link>
          {session && user?.role === "customer" ? (
            <>
              <p className="text-white">Hi, {user?.name}</p>
              <div className="w-[48px] h-[48px] flex shrink-0 rounded-full p-1 border border-[#E5E5E5] overflow-hidden">
                <img src="/assets/photos/no-profile.png" className="w-full h-full object-cover rounded-full" alt="photo" />
              </div>
            </>
          ) : (
            <>
              <Link href="/sign-in" className="p-[12px_20px] bg-white rounded-full font-semibold">
                Sign In
              </Link>
              <Link href="/sign-up" className="p-[12px_20px] bg-white rounded-full font-semibold">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
