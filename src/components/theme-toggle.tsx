"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "light" | "dark";

const KEY = "nofolio-theme";

function readTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const stored = document.documentElement.getAttribute("data-theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(readTheme());
  }, []);

  function cycle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.add("theme-anim");
    root.setAttribute("data-theme", next);
    localStorage.setItem(KEY, next);
    setTheme(next);
    window.setTimeout(() => root.classList.remove("theme-anim"), 450);
  }

  return (
    <button
      type="button"
      onClick={cycle}
      className="hover-invert grid size-9 place-items-center border border-line text-ink"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <Sun size={15} strokeWidth={1.75} /> : <Moon size={15} strokeWidth={1.75} />}
    </button>
  );
}
