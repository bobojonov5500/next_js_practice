"use client";
import dynamic from "next/dynamic";
import React from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { format } from "date-fns";
import mockData from "../../../../mock";

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

console.log(mockData);
const Hero = () => {
  return (
    <div className=" h-[60vh] max-w-[1400px] m-auto">
      <Carousel responsive={responsive}>
        {mockData.map((item, index) => (
          <div
            key={index}
            className="text-white relative w-full text-2xl  h-[60vh]"
          >
            <Image
              fill
              className="object-cover"
              src={item.image}
              alt="image1"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center xs:items-start  justify-center z-10 text-white">
              <div className="mt-[120px] xs:mt-0 xs:ml-[90px] sm:ml-[100px] md:ml-[120px]">
                <h2 className="text-3xl font-bold">{item.title}</h2>
                <p className="mt-2 text-[15px] max-w-[250px] xs:text-[20px] xs:max-w-[300px] sm:max-w-[600px]">
                  {item.description}
                </p>
                <div className="flex items-center mt-3 gap-3">
                  <Image
                    width={5}
                    height={5}
                    className="w-[40px] h-[40px] rounded-full"
                    src={item.author.image}
                    alt="author-image"
                  />
                  <div className=" text-[18px]">
                    <h4>{item.author.name}</h4>
                    <span className=" text-[13px]">
                      {` ${format(new Date(), "dd MMM, yyyy")}`} &#8226; 10min
                      read
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
