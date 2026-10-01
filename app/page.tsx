import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-2xl px-6">
      <Hero />
      <About />
      <Contact />
    </div>
  );
}
