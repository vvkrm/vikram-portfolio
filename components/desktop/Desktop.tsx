"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MenuBar } from "./MenuBar";
import { DesktopIcons } from "./DesktopIcons";
import { Dock } from "./Dock";
import { Window } from "./Window";
import { HeroWindow } from "./HeroWindow";
import { AboutWindow } from "./AboutWindow";
import { ContactWindow } from "./ContactWindow";
import { TerminalWindow } from "./TerminalWindow";

export type AppId = "home" | "about" | "contact" | "terminal";

export function Desktop() {
  const [active, setActive] = useState<AppId>("home");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const wallpaper =
    mounted && resolvedTheme === "dark"
      ? "/wallpapers/dark.webp"
      : "/wallpapers/light.webp";

  return (
    <div className="fixed inset-0 flex h-dvh flex-col overflow-hidden">
      {/* Wallpaper */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />

      <MenuBar active={active} />

      {/* Desktop area */}
      <div className="relative min-h-0 flex-1">
        <DesktopIcons active={active} onOpen={setActive} />

        {active === "home" ? (
          <HeroWindow onOpen={setActive} />
        ) : (
          <Window
            key={active}
            title={
              active === "about"
                ? "About Me"
                : active === "contact"
                  ? "Contact"
                  : "Terminal"
            }
            path={active === "about" ? "~/about" : active === "contact" ? "~/contact" : "~"}
            onClose={() => setActive("home")}
          >
            {active === "about" && <AboutWindow />}
            {active === "contact" && <ContactWindow />}
            {active === "terminal" && <TerminalWindow />}
          </Window>
        )}
      </div>

      <Dock active={active} onOpen={setActive} />
    </div>
  );
}
