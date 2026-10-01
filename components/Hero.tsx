import { site } from "@/data/site";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-heading" className="scroll-mt-24">
      <Reveal className="py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Hello, I&apos;m
        </p>
        <h1
          id="hero-heading"
          className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white"
        >
          {site.name}
        </h1>
        <p className="mt-4 text-xl leading-snug text-neutral-600 dark:text-neutral-400">
          {site.tagline}
        </p>
        <p className="mt-6 max-w-xl text-base leading-relaxed">{site.intro}</p>
      </Reveal>
    </section>
  );
}
