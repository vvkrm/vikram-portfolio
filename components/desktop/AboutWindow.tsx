import { site } from "@/data/site";

export function AboutWindow() {
  return (
    <div>
      <p className="text-[11px] tracking-[0.2em] text-[var(--color-ink-soft)] uppercase">
        About me
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {site.name}
      </h2>
      <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
        {site.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-6 border-t border-black/10 pt-4 text-sm text-[var(--color-ink-soft)] dark:border-white/10">
        <span className="text-[var(--color-accent)]">$</span> whoami —{" "}
        {site.tagline}
      </p>
    </div>
  );
}
