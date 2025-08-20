"use client";
import { SiNextdotjs } from "react-icons/si";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-amber-600 px-6 py-3 flex justify-between items-center">
      {/* Left side Logo */}
      <Link href={"/"} className="flex items-center gap-2">
        <SiNextdotjs size={40} />
        <span className="font-bold text-lg">Project</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-5">
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/category"}>Category</Link>
        <Link href={"/blogs"}>Blogs</Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}

      <div
        className={`absolute top-14 left-0 w-full bg-amber-600 flex flex-col items-center gap-4 py-6 sm:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <Link href={"/contact"} onClick={() => setIsOpen(false)}>
          Contact
        </Link>
        <Link href={"/about"} onClick={() => setIsOpen(false)}>
          About
        </Link>
        <Link href={"/category"} onClick={() => setIsOpen(false)}>
          Category
        </Link>
        <Link href={"/blogs"} onClick={() => setIsOpen(false)}>
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
