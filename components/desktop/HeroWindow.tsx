"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, InstagramIcon, LinkedinIcon, XIcon } from "../icons";
import type { AppId } from "./Desktop";

const SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  x: XIcon,
  instagram: InstagramIcon,
};

function useRoleTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % site.roles.length),
      2800,
    );
    return () => clearInterval(id);
  }, []);

  return site.roles[index];
}

function useLocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    update();
    const id = setInterval(update, 30_000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export function HeroWindow({ onOpen }: { onOpen: (app: AppId) => void }) {
  const role = useRoleTicker();
  const time = useLocalTime();

  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center p-4 pt-12 sm:p-8">
      <section
        aria-label="Introduction"
        className="window-in frosted w-full max-w-lg rounded-2xl border border-black/10 px-6 py-8 text-center shadow-2xl shadow-black/20 sm:px-10 sm:py-10 dark:border-white/10 dark:shadow-black/50"
      >
        <p className="text-[11px] tracking-[0.2em] text-[var(--color-ink-soft)] uppercase">
          ~/home
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Hi, I&rsquo;m {site.name}
        </h1>

        <p
          key={role}
          aria-live="polite"
          className="ticker-in mt-3 text-sm text-[var(--color-accent)] sm:text-base"
        >
          {role}
        </p>

        <p className="mt-4 text-sm text-[var(--color-ink-soft)]">
          {site.intro}
        </p>

        {time && (
          <p className="mt-2 text-xs text-[var(--color-ink-soft)] tabular-nums">
            local time — {time}
          </p>
        )}

        <div
          className="mt-6 flex items-center justify-center gap-2"
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
                aria-label={label}
                title={label}
                className="rounded-xl border border-black/10 p-2.5 text-[var(--color-ink-soft)] transition-all hover:-translate-y-0.5 hover:border-[var(--color-accent)]/50 hover:text-[var(--color-accent)] dark:border-white/10"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-2.5 sm:flex-row">
          <button
            type="button"
            onClick={() => onOpen("contact")}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-[var(--color-accent)]/60 px-5 py-2.5 text-sm font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)]/10 sm:w-auto"
          >
            Get in touch <ArrowRight size={15} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => onOpen("about")}
            className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-chrome)] transition-opacity hover:opacity-85 sm:w-auto"
          >
            More about me <ArrowRight size={15} aria-hidden="true" />
          </button>
        </div>

        <p className="mt-8 text-[11px] text-[var(--color-ink-soft)]">
          © {new Date().getFullYear()} {site.name}
        </p>
      </section>
    </div>
  );
}
