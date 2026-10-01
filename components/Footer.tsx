import { site } from "@/data/site";
import { ThemeToggle } from "./ThemeToggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200/70 dark:border-neutral-800/70">
      <div className="mx-auto flex w-full max-w-2xl items-center justify-between px-6 py-8">
        <p className="text-sm text-neutral-500 dark:text-neutral-500">
          © {year} {site.name}. All rights reserved.
        </p>
        <ThemeToggle />
      </div>
    </footer>
  );
}
