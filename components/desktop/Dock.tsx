"use client";

import { APPS } from "./apps";
import type { AppId } from "./Desktop";

export function Dock({
  active,
  onOpen,
}: {
  active: AppId;
  onOpen: (app: AppId) => void;
}) {
  return (
    <div className="pointer-events-none relative z-30 flex shrink-0 justify-center px-4 pt-2 pb-4 sm:pb-6">
      <nav
        aria-label="Applications"
        className="frosted pointer-events-auto flex items-end gap-1 rounded-2xl border border-black/10 px-2.5 py-2 shadow-xl shadow-black/10 sm:gap-2 sm:px-3 dark:border-white/10 dark:shadow-black/40"
      >
        {APPS.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => onOpen(id)}
              title={label}
              aria-label={`Open ${label}`}
              aria-pressed={isActive}
              className="group relative flex flex-col items-center gap-1 rounded-xl px-2 py-1.5 transition-colors hover:bg-black/5 sm:px-2.5 dark:hover:bg-white/10"
            >
              <Icon
                size={22}
                aria-hidden="true"
                className={`transition-all group-hover:-translate-y-0.5 ${
                  isActive
                    ? "text-[var(--color-accent)]"
                    : "text-[var(--color-ink-soft)] group-hover:text-[var(--color-ink)]"
                }`}
              />
              <span
                aria-hidden="true"
                className={`h-1 w-1 rounded-full transition-opacity ${
                  isActive
                    ? "bg-[var(--color-accent)] opacity-100"
                    : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
}
