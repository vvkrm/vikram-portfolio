import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { site, type SocialIcon } from "@/data/site";
import { Reveal } from "./Reveal";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
} from "./icons";

const icons: Record<SocialIcon, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  instagram: InstagramIcon,
};

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 border-t border-neutral-200/70 dark:border-neutral-800/70"
    >
      <Reveal className="py-16 sm:py-24">
        <h2
          id="contact-heading"
          className="text-2xl font-bold tracking-tight text-neutral-900 sm:text-3xl dark:text-white"
        >
          Get in touch
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed">
          The best way to reach me is by email. I read everything and reply when
          I can.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 dark:text-neutral-950"
          >
            <Mail size={16} aria-hidden="true" />
            {site.email}
          </a>
        </div>
        <ul
          aria-label="Social links"
          className="mt-8 flex items-center gap-2"
        >
          {site.socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white"
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
