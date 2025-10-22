"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { BlogsType } from "@/types/blogs.type";
import { CategoriesType } from "@/types/categories.type";
import { useRouter } from "next/navigation";

interface SidebarProps {
  blogs: BlogsType[];
  categories: CategoriesType[];
  slug: string;
}

const Sidebar: React.FC<SidebarProps> = ({ blogs, categories, slug }) => {
  const router = useRouter();

  return (
    <aside className="sticky top-[80px] space-y-5">
      {/* CATEGORY LIST */}
      <div className="border-2 p-3 rounded-[7px]">
        <h2 className="text-[30px] mb-3">Category</h2>
        <ul className="flex flex-col gap-2">
          {categories?.map((cat, index) => (
            <li key={index}>
              <Link
                href={`/categories/${cat?.slug}`}
                className={`block pt-3 px-2 font-bold text-blue-400 transition-all duration-200 ease-out hover:bg-zinc-600 ${
                  cat?.slug === slug ? "text-white" : ""
                }`}
              >
                {cat?.label || "Unnamed"}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* LATEST BLOGS */}
      <div className="border-2 p-3 rounded-[7px] h-[calc(100vh-100px)] overflow-y-auto scrollbar-hide text-white">
        <h2 className="text-[30px] mb-3">Latest Blog</h2>
        <ul className="space-y-5">
          {blogs?.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer"
              onClick={() => router.push(`/blogs/${item?.slug}`)}
            >
              <div className="flex gap-5">
                <div className="relative w-[120px] h-[90px] overflow-hidden transition-transform duration-300 hover:scale-110">
                  <Image
                    src={item?.image?.url}
                    alt={item?.title || "blog-image"}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="max-w-[340px]">{item?.title}</h3>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="relative w-[35px] h-[35px]">
                      <Image
                        src={item?.author?.avatar?.url}
                        alt={item?.author?.name || "author-image"}
                        fill
                        className="rounded-full object-cover"
                        sizes="35px"
                      />
                    </div>
                    <div className="flex flex-col text-[12px] opacity-70">
                      <span>{item?.author?.name}</span>
                      <span>
                        {`${format(new Date(item?.createdAt), "dd MMM, yyyy")}`} • 10min read
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="opacity-5 mt-3" />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
