import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200/70 bg-white/80 backdrop-blur-md dark:border-neutral-800/70 dark:bg-neutral-950/80">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-2xl items-center justify-between px-6"
      >
        <a
          href="#home"
          className="text-base font-semibold tracking-tight text-neutral-900 dark:text-white"
        >
          {site.name}
        </a>
        <div className="flex items-center gap-1 sm:gap-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <span
            aria-hidden="true"
            className="mx-1 h-5 w-px bg-neutral-200 dark:bg-neutral-800"
          />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
