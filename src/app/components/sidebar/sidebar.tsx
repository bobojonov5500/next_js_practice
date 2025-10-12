"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { BlogsType } from "@/types/blogs.type";
import { useRouter } from "next/navigation";

const Sidebar = ({ blogs }: { blogs: BlogsType[] }) => {
  const router = useRouter();
  return (
    <div className="sticky top-[80px]">
      <div className="my-3 mr-2 border-2 p-3 rounded-[7px]">
        <h1 className="text-[30px]">Category</h1>
        <div className="flex-col flex pl-2">
          {blogs.map((item: BlogsType, index) => (
            <Link
              href={`/${item.category.slug}`}
              key={index}
              className="pt-3 hover:bg-zinc-600 transition-all font-bold duration-200 ease-out text-blue-400"
            >
              {item.category.label.toUpperCase()}
              <hr className="opacity-5" />
            </Link>
          ))}
        </div>
      </div>
      <div className="my-3 text-white mr-2 border-2 p-3 rounded-[7px]">
        <h1 className="text-[30px]">Latest Blog</h1>
        {blogs.map((item: BlogsType, index) => (
          <div
            className="cursor-pointer"
            onClick={() => router.push(`/blogs/${item.slug}`)}
            key={index}
          >
            <div className="flex my-5">
              <div className="relative w-[120px] h-[90px] overflow-hidden transition-transform duration-300 hover:scale-110">
                <Image
                  src={item.image.url}
                  alt={item.image.url}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className=" ml-5">
                <h3 className=" max-w-[340px] ">{item.title}</h3>
                <div className="flex items-center gap-3 ">
                  <div className="relative w-[35px] h-[35px]">
                    <Image
                      fill
                      className="rounded-full object-cover w-full h-full object-center"
                      src={item.author.avatar.url}
                      alt="author-image"
                      sizes="35px"
                    />
                  </div>
                  <div className="flex-col flex">
                    <h4>{item.author.name}</h4>
                    <span className="text-[12px] opacity-70">
                      {" "}
                      {` ${format(
                        new Date(item.createdAt),
                        "dd MMM, yyyy"
                      )}`}{" "}
                      &#8226; 10min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="opacity-5" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
