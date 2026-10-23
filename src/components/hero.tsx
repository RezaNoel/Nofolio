import { ArrowDownRight, ArrowUpRight, Download } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-line">
      <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-line lg:block" />

      <div className="rail relative px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <span className="cross left-4 top-6 sm:left-6" />
        <span className="cross right-4 top-6 sm:right-6" />
        <span className="cross bottom-6 left-4 sm:left-6" />
        <span className="cross bottom-6 right-4 sm:right-6" />

        <p className="mark text-accent-ink">01 / Hero · {profile.location}</p>

        <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.35rem,7vw,5.25rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink-strong">
          <span className="block">Reza</span>
          <span className="block">Tavangar</span>
          <span className="mt-4 block font-serif text-[clamp(1.35rem,3.4vw,2.35rem)] font-normal italic leading-snug tracking-[-0.03em] text-ink">
            Full-Stack Software Developer
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {profile.subtitle}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button href={profile.youtube} size="lg">
            Watch YouTube
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </Button>
          <Button href="#projects" variant="secondary" size="lg">
            View Projects
            <ArrowDownRight size={16} strokeWidth={1.75} />
          </Button>
          <Button
            href={profile.resumeHref}
            download="Reza-Tavangar-Resume.pdf"
            variant="secondary"
            size="lg"
          >
            Download Resume
            <Download size={16} strokeWidth={1.75} />
          </Button>
        </div>

        <dl className="mt-16 grid max-w-3xl grid-cols-2 gap-px border border-line bg-line sm:grid-cols-4">
          {[
            ["Base", "Yerevan"],
            ["Work", "Full-stack"],
            ["Languages", "5"],
            ["YouTube", "@chibodeh"],
          ].map(([label, value]) => (
            <div key={label} className="bg-bg px-4 py-4">
              <dt className="mark text-faint">{label}</dt>
              <dd className="mt-2 font-display text-lg text-ink-strong">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
