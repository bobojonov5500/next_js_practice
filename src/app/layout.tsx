import BlogsService from "@/services/blog.service";
import Footer from "./components/footer/footer";
import Navbar2 from "./components/navbar2/navbar2";
import ClientProgress from "./components/clientProgress/clientProgress";
import "./globals.css";
import { Suspense } from "react";

const categories = await BlogsService.getCategories();

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="bg-zinc-800 min-h-screen flex flex-col text-white">
          <Navbar2 categories={categories} />
          <div className="grow mt-[67px]">
            <Suspense fallback={null}>
              <ClientProgress />
            </Suspense>
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
