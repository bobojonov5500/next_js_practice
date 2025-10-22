"use client";
import dynamic from "next/dynamic";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { format } from "date-fns";
import { BlogsType } from "@/types/blogs.type";

const Carousel = dynamic(() => import("react-multi-carousel"), {
  ssr: false,
});

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Hero = ({ blogs }: { blogs: BlogsType[] }) => {
  return (
    <div>
      <Carousel responsive={responsive}>
        {blogs?.map((item: BlogsType, index: number) => (
          <div
            key={index}
            className="text-white relative w-full text-2xl  h-[60vh]"
          >
            <Image
              fill
              className="object-cover"
              src={item?.image?.url}
              alt="image1"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center xs:items-start  justify-center z-10 text-white">
              <div className="mt-[120px] xs:mt-0 xs:ml-[90px] sm:ml-[100px] md:ml-[120px]">
                <h2 className="text-3xl font-bold">{item?.title}</h2>
                <p className="mt-2 text-[15px] max-w-[250px] xs:text-[20px] xs:max-w-[300px] sm:max-w-[600px]">
                  {item?.description}
                </p>
                <div className="flex items-center  mt-3 gap-3">
                  <div className="w-[45px]  relative h-[45px]">
                    <Image
                      sizes="45px"
                      priority
                      src={item.author.avatar.url}
                      alt={item.author.avatar.url}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className=" text-[18px]">
                    <h4>{item?.author?.name}</h4>
                    <span className=" text-[13px]">
                      {` ${format(new Date(item?.createdAt), "dd MMM, yyyy")}`}{" "}
                      &#8226; 10min read
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
