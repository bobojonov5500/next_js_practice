"use client";

import React from "react";
import Image from "next/image";
import { format } from "date-fns";
import { BlogsType } from "@/types/blogs.type";
import { useRouter } from "next/navigation";

const Content = ({ blogs }: { blogs: BlogsType[] }) => {
  const router = useRouter();
  return (
    <div className="py-2">
      {blogs.map((blog: BlogsType, index: number) => (
        <div
          onClick={() => router.push(`/blogs/${blog.slug}`)}
          key={index}
          className="bg-black cursor-pointer text-white rounded-lg shadow-lg my-2 p-5"
        >
          <div className="w-full relative rounded-lg h-[50vh]  overflow-hidden ">
            <Image
              src={blog.image.url}
              alt="Example Image"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className=" object-cover  transition-transform duration-300 hover:scale-115"
            />
          </div>
          <h2 className="mt-2 text-[30px]">{blog.title}</h2>
          <p className="opacity-70">{blog.description}</p>
          <hr className="my-3 opacity-40" />
          <div className="flex gap-3 ">
            <div className="w-[45px]  relative h-[45px]">
              <Image
                src={blog.author.avatar.url}
                alt={blog.author.avatar.url}
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-col">
              <span>{blog.author.name}</span>
              <span className="opacity-70">
                {`${format(new Date(blog.createdAt), "dd MMM, yyyy")}`} &#8226;
                10min read
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
