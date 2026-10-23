import { ArrowUpRight, Download } from "lucide-react";
import { projects } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Projects() {
  return (
    <section id="projects" className="border-b border-line">
      <div className="rail px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mark text-accent-ink">03 / Selected work</p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.03em] text-ink-strong sm:text-5xl">
              Projects you can
              <span className="font-serif italic"> open and take.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Nojen, Bet on Poker, the language plugin, and the automation garden.
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="relative flex flex-col bg-bg-raised p-6 sm:p-8">
              <span className="cross right-3 top-3 hidden sm:block" />
              <p className="mark text-faint">{project.index}</p>
              <h3 className="mt-4 font-display text-3xl tracking-[-0.03em] text-ink-strong">
                {project.title}
              </h3>
              <p className="mt-3 max-w-md flex-1 text-base leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="border border-line px-2 py-1 mark text-faint"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-2">
                <Button href={project.showcaseHref} variant="secondary" size="sm">
                  {project.showcaseLabel}
                  <ArrowUpRight size={14} />
                </Button>
                <Button
                  href={project.downloadHref}
                  download={project.downloadHref.endsWith(".zip") || undefined}
                  size="sm"
                >
                  {project.downloadLabel}
                  <Download size={14} />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
