import Content from "@/app/components/content/content";
import Sidebar from "@/app/components/sidebar/sidebar";
import BlogsService from "@/services/blog.service";
import React from "react";

const CategoryDetails = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const blogs = await BlogsService.getBlogsByCategory(slug);
  const categories = await BlogsService.getCategories();

  return (
    <div className="flex w-full md:flex-row flex-col">
      <div className="flex w-full md:flex-row flex-col">
        <div className="md:w-[40%]  w-full  ">
          <Sidebar slug={slug} blogs={blogs} categories={categories} />
        </div>
        <div className="md:w-[60%] w-full">
          <Content blogs={blogs} />
        </div>
      </div>
    </div>
  );
};

export default CategoryDetails;
