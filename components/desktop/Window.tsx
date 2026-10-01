"use client";

import type { ReactNode } from "react";
import { site } from "@/data/site";

interface WindowProps {
  title: string;
  path: string;
  onClose: () => void;
  children: ReactNode;
}

/** macOS-style window chrome: traffic lights, title bar, terminal path bar. */
export function Window({ title, path, onClose, children }: WindowProps) {
  const prompt = `${site.shell.user}@${site.shell.host}:${path}`;

  return (
    <section
      role="dialog"
      aria-label={title}
      className="window-in absolute inset-0 z-20 mx-auto flex w-full max-w-2xl flex-col p-3 pt-14 sm:p-6 sm:pt-20"
    >
      <div className="frosted flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-black/10 shadow-2xl shadow-black/20 dark:border-white/10 dark:shadow-black/50">
        {/* Title bar */}
        <div className="flex shrink-0 items-center gap-3 border-b border-black/10 px-4 py-2.5 dark:border-white/10">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <button
              type="button"
              onClick={onClose}
              tabIndex={-1}
              title="Close"
              className="h-3 w-3 rounded-full bg-[#ff5f57] transition-transform hover:scale-110"
            />
            <span
              title="Minimize"
              className="h-3 w-3 rounded-full bg-[#febc2e]"
            />
            <span
              title="Maximize"
              className="h-3 w-3 rounded-full bg-[#28c840]"
            />
          </div>
          <h2 className="truncate text-[13px] font-semibold tracking-tight">
            {title}
          </h2>
        </div>

        {/* Path bar */}
        <p className="shrink-0 truncate border-b border-black/10 bg-black/[0.03] px-4 py-1.5 text-[11px] text-[var(--color-ink-soft)] dark:border-white/10 dark:bg-white/[0.03]">
          {prompt}
          <span className="caret-blink ml-1 inline-block h-3 w-[7px] translate-y-[2px] bg-[var(--color-accent)]" />
        </p>

        {/* Body */}
        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          {children}
        </div>
      </div>
    </section>
  );
}
