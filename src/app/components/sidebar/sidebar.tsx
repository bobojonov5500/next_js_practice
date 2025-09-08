import React from "react";
import navItems from "../../../../constants";
import Link from "next/link";
import mockData from "../../../../mock";
import Image from "next/image";
import { format } from "date-fns";

const Sidebar = () => {
  return (
    <div className="sticky top-[80px]">
      <div className="my-3 mx-2 border-2 p-3 rounded-[7px]">
        <h1 className="text-[30px]">Category</h1>
        <div className="flex-col flex pl-2">
          {navItems.map((items, index) => (
            <Link
              href={`/${items}`}
              key={index}
              className="pt-3 hover:bg-zinc-600 transition-all font-bold duration-200 ease-out text-blue-400"
            >
              {items.toUpperCase()}
              <hr className="opacity-5" />
            </Link>
          ))}
        </div>
      </div>
      <div className="my-3 text-white mx-2 border-2 p-3 rounded-[7px]">
        <h1 className="text-[30px]">Latest Blog</h1>
        {mockData.map((item, index) => (
          <div key={index}>
            <div className="flex my-5">
              <div className="relative w-[120px] h-[90px] overflow-hidden transition-transform duration-300 hover:scale-110">
                <Image
                  src={item.image}
                  alt={item.image}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className=" ml-5">
                <h3 className=" max-w-[340px] ">{item.description}</h3>
                <div className="flex items-center gap-3 ">
                  <div className="">
                    <Image
                      width={35}
                      height={35}
                      className="rounded-full"
                      src={item.author.image}
                      alt="author-image"
                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex-col flex">
                    <h4>{item.author.name}</h4>
                    <span className="text-[12px] opacity-70">
                      {" "}
                      {` ${format(new Date(), "dd MMM, yyyy")}`} &#8226; 10min
                      read
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
