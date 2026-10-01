"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const PROMPT = `${site.shell.user}@${site.shell.host}:~$`;

const WELCOME = [
  `Welcome to ${site.shell.host} v1.0.`,
  'Type "help" to see what I can do.',
];

const HELP = [
  "available commands:",
  "  help     — show this list",
  "  whoami   — who is this guy?",
  "  about    — a short bio",
  "  contact  — how to reach me",
  "  socials  — where to find me",
  "  date     — current date and time",
  "  clear    — clear the terminal",
];

function answer(command: string): string[] | "CLEAR" {
  const cmd = command.trim().toLowerCase();
  switch (cmd) {
    case "":
      return [];
    case "help":
      return HELP;
    case "whoami":
      return [`${site.name.toLowerCase()} — ${site.tagline}`];
    case "about":
      return site.bio;
    case "contact":
      return [`email me at ${site.email}`];
    case "socials":
      return site.socials.map((s) => `${s.label.toLowerCase()} — ${s.href}`);
    case "date":
      return [new Date().toString()];
    case "clear":
      return "CLEAR";
    default:
      return [`command not found: ${command.trim()} — try "help"`];
  }
}

export function TerminalWindow() {
  const [lines, setLines] = useState<string[]>(WELCOME);
  const [value, setValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [lines]);

  const run = (raw: string) => {
    const result = answer(raw);
    if (result === "CLEAR") {
      setLines([]);
    } else {
      setLines((prev) => [...prev, `${PROMPT} ${raw}`, ...result]);
    }
    setValue("");
  };

  return (
    <div
      className="flex h-full min-h-64 flex-col text-[13px] leading-relaxed sm:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={scrollRef}
        className="min-h-0 flex-1 overflow-y-auto"
        role="log"
        aria-label="Terminal output"
        aria-live="polite"
      >
        {lines.map((line, i) => (
          <p
            key={i}
            className={
              line.startsWith(PROMPT)
                ? "text-[var(--color-ink)]"
                : "text-[var(--color-ink-soft)]"
            }
          >
            {line.startsWith(PROMPT) ? (
              <>
                <span className="text-[var(--color-accent)]">{PROMPT}</span>
                {line.slice(PROMPT.length)}
              </>
            ) : (
              line
            )}
          </p>
        ))}
      </div>

      <form
        className="mt-2 flex shrink-0 items-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
        }}
      >
        <label htmlFor="terminal-input" className="sr-only">
          Terminal input
        </label>
        <span aria-hidden="true" className="shrink-0 text-[var(--color-accent)]">
          {PROMPT}
        </span>
        <input
          ref={inputRef}
          id="terminal-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Type a command, for example help"
          placeholder='try "help"'
          className="w-full min-w-0 flex-1 bg-transparent text-[var(--color-ink)] caret-[var(--color-accent)] outline-none placeholder:text-[var(--color-ink-soft)]/50"
        />
      </form>
    </div>
  );
}
