import { ArrowUpRight } from "lucide-react";
import { youtube } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Youtube() {
  return (
    <section id="youtube" className="border-b border-line bg-invert-bg text-invert-fg">
      <div className="rail px-4 py-20 sm:px-6 sm:py-28">
        <p className="mark text-[#ffb06a]">YouTube · {youtube.handle}</p>
        <p className="mt-4 font-display text-[clamp(2.5rem,8vw,6rem)] font-semibold leading-[0.9] tracking-[-0.04em]">
          {youtube.name}
        </p>
        <h2 className="mt-6 max-w-3xl font-serif text-[clamp(1.6rem,4vw,2.75rem)] italic leading-tight">
          {youtube.headline}
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-invert-fg/75">
          {youtube.body}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={youtube.href} size="lg" className="bg-bg text-ink hover:opacity-80">
            Watch on YouTube
            <ArrowUpRight size={16} />
          </Button>
          <Button
            href={youtube.href}
            variant="secondary"
            size="lg"
            className="border-invert-fg/40 bg-transparent text-invert-fg hover:bg-bg hover:text-ink"
          >
            {youtube.handle}
          </Button>
        </div>
      </div>
    </section>
  );
}
