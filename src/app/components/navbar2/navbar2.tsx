"use client";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { RiVuejsFill } from "react-icons/ri";

const Navbar2 = () => {
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
          <Link
            className="hover:text-red-300 hover:underline"
            href={"/contact"}
          >
            contact
          </Link>
          <Link className="hover:text-red-300 hover:underline" href={"/about"}>
            {" "}
            about
          </Link>
          <Link
            className="hover:text-red-300 hover:underline"
            href={"/context"}
          >
            {" "}
            context
          </Link>
          <Link className="hover:text-red-300 hover:underline" href={"/info"}>
            {" "}
            info
          </Link>
        </ul>

        {/* mobile ui */}
        {toggle && (
          <ul
            className={
              "absolute sm:hidden z-1999 h-[calc(100vh-56px)] top-14 text-center w-full left-0 bg-zinc-700 flex flex-col items-center justify-center gap-6"
            }
          >
            <li>contact</li>
            <li> about</li>
            <li> context</li>
            <li> info</li>
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
