import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 border-t border-neutral-200/70 dark:border-neutral-800/70"
    >
      <Reveal className="py-16 sm:py-24">
        <h2
          id="about-heading"
          className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white"
        >
          About
        </h2>
        <div className="mt-6 max-w-xl space-y-5 text-base leading-relaxed">
          {site.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
