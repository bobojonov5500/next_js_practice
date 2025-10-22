import Content from "@/app/components/content/content";
import Sidebar from "@/app/components/sidebar/sidebar";
import BlogsService from "@/services/blog.service";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { slug: string }; // Promise emas, oddiy object
}) {
  const { slug } = params;

  return {
    title:
      slug?.slice(0, 1).toUpperCase() + slug?.slice(1) || "Category details",
    icons: {
      icon: "/icons8-youtube-96.png",
    },
  };
}

const CategoryDetails = async ({
  params,
}: {
  params: { slug: string }; // Promise emas
}) => {
  const { slug } = params;

  // Server fetch bilan fallback qo‘shish
  const blogs = (await BlogsService.getBlogsByCategory(slug)) || [];
  const categories = (await BlogsService.getCategories()) || [];

  return (
    <div className="flex w-full md:flex-row px-2 flex-col">
      <div className="flex w-full md:flex-row flex-col">
        <div className="md:w-[40%] w-full">
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
