import BlogsService from "@/services/blog.service";
import Sidebar from "@/app/components/sidebar/sidebar";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await BlogsService.getDetailedBlogs(slug);

  return {
    title: blog?.title || "Blog details",
    description: blog?.description || "",
    icons: {
      icon: "/icons8-youtube-96.png",
    },
  };
}

const DetailedBlogsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const blog = await BlogsService.getDetailedBlogs(slug);
  const blogs = await BlogsService.getAllBlogs();
  const categories = await BlogsService.getCategories();

  return (
    <div className="flex px-2 gap-2 w-full md:flex-row flex-col ">
      <div className="md:w-[70%] w-full my-3 fill-white drop-shadow-xl/50">
        <div className="  relative  rounded-lg h-[50vh]  overflow-hidden ">
          <Image
            src={blog?.image?.url}
            alt="Example Image"
            fill
            className=" object-cover  transition-transform duration-300 hover:scale-115"
          />
        </div>
        <div className="mt-3">
          <div className="flex gap-3 my-4">
            <div className="w-[45px]  relative h-[45px]">
              <Image
                src={blog?.author?.avatar?.url}
                alt={blog?.author?.avatar?.url}
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span>{blog?.author.name}</span>
              <span className="opacity-70">
                {`${format(new Date(blog?.createdAt), "dd MMM, yyyy")}`} &#8226;
                10min read
              </span>
            </div>
          </div>
          <h1 className="text-[35px]">{blog?.title}</h1>
          <p className="opacity-45">{blog?.description}</p>
          <hr className="my-3 opacity-40" />
          <div className="   overflow-hidden text-white">
            <div
              className="[&_p]:text-white [&_h1]:text-lg [&_h2]:text-base [&_*]:text-white"
              dangerouslySetInnerHTML={{ __html: blog?.statement.html }}
            ></div>
          </div>
        </div>
      </div>
      <div className="md:w-[30%] mb-2 w-full  ">
        <Sidebar slug={slug} blogs={blogs} categories={categories} />
      </div>
    </div>
  );
};

export default DetailedBlogsPage;
