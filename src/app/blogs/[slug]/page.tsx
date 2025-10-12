import BlogsService from "@/services/blog.service";
import Sidebar from "@/app/components/sidebar/sidebar";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";

const DetailedBlogsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const blog = await BlogsService.getDetailedBlogs(slug);
  const blogs = await BlogsService.getAllBlogs();
  return (
    <div className="flex w-full md:flex-row flex-col ">
      <div className="md:w-[70%] w-full mx-2 my-3 fill-white drop-shadow-xl/50">
        <div className="w-full relative rounded-lg h-[50vh]  overflow-hidden ">
          <Image
            src={blog.image.url}
            alt="Example Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className=" object-cover  transition-transform duration-300 hover:scale-115"
          />
        </div>
        <div className="mt-3">
          <div className="flex gap-3 my-4">
            <div className="w-[45px]  relative h-[45px]">
              <Image
                src={blog.author.avatar.url}
                alt={blog.author.avatar.url}
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
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
          <h1 className="text-[35px]">{blog.title}</h1>
          <p className="opacity-45">{blog.description}</p>
          <hr className="my-3 opacity-40" />
          <div dangerouslySetInnerHTML={{ __html: blog.statement.html }}></div>
        </div>
      </div>
      <div className="md:w-[30%] mb-2 w-full  ">
        <Sidebar blogs={blogs} />
      </div>
    </div>
  );
};

export default DetailedBlogsPage;
