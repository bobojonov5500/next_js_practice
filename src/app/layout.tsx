import Footer from "./components/footer/footer";
import Navbar2 from "./components/navbar2/navbar2";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <div className="bg-zinc-800 min-h-screen flex flex-col text-amber-100">
          <Navbar2 />
          <div className="flex-grow mt-[67px]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
