"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Search, Sun } from "lucide-react";
import type { AppId } from "./Desktop";

function useClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  if (!now) return "";
  const date = now.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const time = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
  return `${date} ${time}`;
}

export function MenuBar({ active }: { active: AppId }) {
  const { resolvedTheme, setTheme } = useTheme();
  const clock = useClock();
  const dark = resolvedTheme === "dark";

  return (
    <header className="frosted relative z-30 flex h-9 shrink-0 items-center justify-between border-b border-black/10 px-3 text-[13px] text-[var(--color-ink)] dark:border-white/10 sm:px-4">
      <nav aria-label="Current window" className="flex min-w-0 items-center gap-2">
        <span aria-hidden="true" className="text-[var(--color-accent)]">
          ●
        </span>
        <span className="truncate font-semibold tracking-tight">
          veer<span className="text-[var(--color-ink-soft)]"> / {active}</span>
        </span>
      </nav>

      <div className="flex items-center gap-1 sm:gap-2">
        <button
          type="button"
          aria-label="Search (not available)"
          title="Search"
          className="rounded-md p-1.5 text-[var(--color-ink-soft)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)] dark:hover:bg-white/10"
        >
          <Search size={15} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => setTheme(dark ? "light" : "dark")}
          aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          title={dark ? "Light mode" : "Dark mode"}
          className="rounded-md p-1.5 text-[var(--color-ink-soft)] transition-colors hover:bg-black/5 hover:text-[var(--color-ink)] dark:hover:bg-white/10"
        >
          {dark ? (
            <Sun size={15} aria-hidden="true" />
          ) : (
            <Moon size={15} aria-hidden="true" />
          )}
        </button>
        <span
          aria-hidden="true"
          className="mx-1 h-4 w-px bg-black/15 dark:bg-white/15"
        />
        <p className="tabular-nums whitespace-nowrap text-[var(--color-ink-soft)]">
          {clock || "…"}
        </p>
      </div>
    </header>
  );
}
