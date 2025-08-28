import Link from "next/link";
import React from "react";
import { format } from "date-fns";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-zinc-700 w-full  ">
      <div className="flex m-auto max-w-[1400px] items-center justify-between px-4 py-4">
        <span>
          {`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          repellendus. ${format(new Date(), "yyyy.MM.dd")}
        `}
        </span>
        <div className={"flex gap-4"}>
          <Link
            className="hover:text-blue-500 text-[30px] duration-200 ease-out"
            href="https://facebook.com"
          >
            <FaFacebook />
          </Link>
          <Link
            className="hover:text-blue-400 text-[30px] duration-200 ease-out"
            href="https://linkedin.com"
          >
            <FaLinkedin />
          </Link>
          <Link
            className="hover:text-red-400 text-[30px] duration-200 ease-out"
            href="https://instagram.com"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
