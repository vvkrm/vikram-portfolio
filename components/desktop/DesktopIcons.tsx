"use client";

import { APPS } from "./apps";
import type { AppId } from "./Desktop";

export function DesktopIcons({
  active,
  onOpen,
}: {
  active: AppId;
  onOpen: (app: AppId) => void;
}) {
  return (
    <div
      className="absolute top-4 left-3 z-10 flex flex-col gap-4 sm:top-6 sm:left-5 sm:gap-5"
      role="group"
      aria-label="Desktop shortcuts"
    >
      {APPS.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onOpen(id)}
          aria-pressed={active === id}
          className="group flex w-16 flex-col items-center gap-1.5 sm:w-[72px]"
        >
          <span
            className={`frosted flex h-11 w-11 items-center justify-center rounded-xl border shadow-sm transition-transform group-hover:scale-105 group-active:scale-95 sm:h-12 sm:w-12 ${
              active === id
                ? "border-[var(--color-accent)]/60 text-[var(--color-accent)]"
                : "border-black/10 text-[var(--color-ink)] dark:border-white/10"
            }`}
          >
            <Icon size={20} aria-hidden="true" />
          </span>
          <span className="rounded px-1 text-[11px] leading-tight text-white [text-shadow:0_1px_4px_rgba(0,0,0,0.6)]">
            {label}
          </span>
        </button>
      ))}
    </div>
  );
}
