import Footer from "./components/footer/footer";
import Navbar2 from "./components/navbar2/navbar2";
import ClientProgress from "./components/clientProgress/clientProgress";
import "./globals.css";
import { Suspense } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="bg-zinc-800 min-h-screen flex flex-col text-white">
          <Navbar2 />
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
