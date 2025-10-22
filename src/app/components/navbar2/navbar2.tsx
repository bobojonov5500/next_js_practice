"use client";
import { CategoriesType } from "@/types/categories.type";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { RiVuejsFill } from "react-icons/ri";
import BlogsService from "@/services/blog.service";

const Navbar2: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const [categories, setCategories] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await BlogsService.getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
    <nav className="bg-zinc-700 fixed top-0 left-0 w-full z-1001">
      <div className="max-w-[1400px] m-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link className="hover:text-green-600 duration-200 ease-out" href="/">
          <RiVuejsFill size={35} />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden sm:flex gap-4 cursor-pointer font-stretch-semi-expanded">
          {categories?.map((category, index) => (
            <li key={index}>
              <Link
                href={`/categories/${category?.slug}`}
                className="hover:text-red-300 hover:underline"
              >
                {category?.label || "Unnamed"}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        {toggle && (
          <ul className="absolute sm:hidden z-1999 h-[calc(100vh-56px)] top-14 w-full left-0 bg-zinc-700 flex flex-col items-center justify-center gap-6">
            {categories?.map((category, index) => (
              <li key={index}>
                <Link href={`/categories/${category?.slug}`}>
                  {category?.label || "Unnamed"}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Hamburger toggle */}
        <div className="flex sm:hidden text-[35px] cursor-pointer">
          {!toggle ? (
            <GiHamburgerMenu onClick={() => setToggle(true)} />
          ) : (
            <IoCloseSharp onClick={() => setToggle(false)} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
