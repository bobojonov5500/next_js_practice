import React from "react";
import mockData from "../../../../mock";
import Image from "next/image";
import { format } from "date-fns";

const Content = () => {
  return (
    <div className="py-2">
      {mockData.map((el) => (
        <div
          key={el.author.name}
          className="bg-black rounded-lg shadow-lg my-2 p-5"
        >
          <div className="w-full relative rounded-lg h-[50vh]  overflow-hidden ">
            <Image
              src={el.image}
              alt="Example Image"
              fill
              className=" object-cover  transition-transform duration-300 hover:scale-115"
            />
          </div>
          <h2 className="mt-2 text-[30px]">{el.title}</h2>
          <p className="opacity-70">{el.description}</p>
          <hr className="my-3 opacity-40" />
          <div className="flex gap-3 ">
            <div className="w-[45px]  relative h-[45px]">
              <Image
                src={el.author.image}
                alt={el.author.image}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span>{el.author.name}</span>
              <span className="opacity-70">
                {`${format(new Date(), "dd MMM, yyyy")}`} &#8226; 10min read
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Content;
