"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, profile } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/88 backdrop-blur-md">
      <div className="rail flex h-14 items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-3 text-ink-strong">
          <span className="grid size-7 place-items-center border border-line-strong font-display text-[13px] font-semibold">
            N
          </span>
          <span className="mark hidden sm:inline">Nofolio / {profile.shortName}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover-invert px-3 py-2 mark text-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href={profile.youtube} size="sm" className="hidden sm:inline-flex">
            YouTube
          </Button>
          <Button href={profile.resumeHref} download="Reza-Tavangar-Resume.pdf" variant="secondary" size="sm" className="hidden lg:inline-flex">
            Resume
          </Button>
          <button
            type="button"
            className="hover-invert grid size-9 place-items-center border border-line md:hidden"
            aria-expanded={open}
            aria-label="Open menu"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-4 py-3 md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover-invert px-3 py-3 mark"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button href={profile.youtube} className="mt-2 w-full">
              YouTube {profile.youtubeHandle}
            </Button>
            <Button
              href={profile.resumeHref}
              download="Reza-Tavangar-Resume.pdf"
              variant="secondary"
              className="mt-2 w-full"
            >
              Download resume
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
