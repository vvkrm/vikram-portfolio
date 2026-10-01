import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "../icons";

const SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  instagram: InstagramIcon,
};

export function ContactWindow() {
  return (
    <div>
      <p className="text-[11px] tracking-[0.2em] text-[var(--color-ink-soft)] uppercase">
        Contact
      </p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        Say hello
      </h2>
      <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
        The fastest way to reach me is email — I read everything.
      </p>

      <a
        href={`mailto:${site.email}`}
        className="mt-6 inline-flex items-center gap-2.5 rounded-xl bg-[var(--color-ink)] px-5 py-3 text-sm font-medium text-[var(--color-chrome)] transition-opacity hover:opacity-85"
      >
        <Mail size={16} aria-hidden="true" />
        {site.email}
      </a>

      <div
        className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4"
        role="group"
        aria-label="Social links"
      >
        {site.socials.map(({ label, href, icon }) => {
          const Icon = SOCIAL_ICONS[icon];
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-xl border border-black/10 px-3.5 py-3 text-sm text-[var(--color-ink-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] dark:border-white/10"
            >
              <Icon size={17} />
              {label}
            </a>
          );
        })}
      </div>

      <p className="mt-8 text-[11px] text-[var(--color-ink-soft)]">
        © {new Date().getFullYear()} {site.name}
      </p>
    </div>
  );
}
