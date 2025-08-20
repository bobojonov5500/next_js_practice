import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Navbar2 from "./components/navbar2/navbar2";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-zinc-800 h-screen text-amber-100">
          <Navbar2 />
          <div className="">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
