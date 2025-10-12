"use client";
import { CategoriesType } from "@/types/categories.type";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { RiVuejsFill } from "react-icons/ri";

const Navbar2 = ({ categories }: { categories: CategoriesType[] }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="bg-zinc-700 fixed top-0 left-0 w-full z-1001 ">
      <div className=" max-w-[1400px] m-auto  flex justify-between items-center px-4 py-4 ">
        <div>
          <Link
            className="hover:text-green-600 duration-200 ease-out"
            href={"/"}
          >
            <RiVuejsFill size={35} />
          </Link>
        </div>
        <ul className="list-none sm:flex cursor-pointer hidden gap-2 font-stretch-semi-expanded">
          {categories.map((category: CategoriesType, index: number) => (
            <Link
              key={index}
              className="hover:text-red-300 hover:underline"
              href={`/${category.slug}`}
            >
              {category.label}
            </Link>
          ))}
        </ul>

        {/* mobile ui */}
        {toggle && (
          <ul
            className={
              "absolute sm:hidden z-1999 h-[calc(100vh-56px)] top-14 text-center w-full left-0 bg-zinc-700 flex flex-col items-center justify-center gap-6"
            }
          >
            {categories.map((category: CategoriesType, index: number) => (
              <Link key={index} href={`/${category.slug}`}>
                {category.label}
              </Link>
            ))}
          </ul>
        )}

        <div className="flex text-[35px] cursor-pointer sm:hidden">
          {!toggle ? (
            <GiHamburgerMenu onClick={() => setToggle(!toggle)} />
          ) : (
            <IoCloseSharp onClick={() => setToggle(!toggle)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
