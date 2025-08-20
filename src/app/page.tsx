import Hero from "./components/hero/hero";

export const metadata = {
  title: "Home page",
  description: "This is the home page of my Next.js app",
};

export default function Home() {
  return (
    <div>
       <Hero/>
    </div>
  );
}
