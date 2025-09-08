import Content from "./components/content/content";
import Hero from "./components/hero/hero";
import Sidebar from "./components/sidebar/sidebar";
import BlogsService from "@/services/blog.service";

export const metadata = {
  title: "Home page",
  description: "This is the home page of my Next.js app",
};

export default async function Home() {
  const blogs = await BlogsService.getAllBlogs();
  console.log(blogs);

  return (
    <div className="max-w-[1400px] m-auto">
      <Hero />
      <div className="flex w-full md:flex-row flex-col">
        <div className="md:w-[40%] w-full  ">
          <Sidebar />
        </div>
        <div className="md:w-[60%] w-full">
          <Content />
        </div>
      </div>
    </div>
  );
}


