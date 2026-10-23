import { profile, youtube } from "@/data/site";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="border-b border-line">
      <div className="rail px-4 py-16 sm:px-6 sm:py-24">
        <p className="mark text-accent-ink">05 / Contact</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-[-0.03em] text-ink-strong sm:text-5xl">
          If you want the next workflow
          <span className="font-serif italic"> built, not described.</span>
        </h2>
        <p className="mt-5 max-w-xl text-muted">
          I am in Yerevan and available for full-stack work, automation, and local agent
          setups. Start with YouTube, a repo, or the resume.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={profile.youtube} size="lg">
            YouTube {profile.youtubeHandle}
          </Button>
          <Button href={profile.github} variant="secondary" size="lg">
            GitHub
          </Button>
          <Button href={profile.linkedin} variant="secondary" size="lg">
            LinkedIn
          </Button>
          <Button
            href={profile.resumeHref}
            download="Reza-Tavangar-Resume.pdf"
            variant="secondary"
            size="lg"
          >
            Download Resume
          </Button>
        </div>

        <a
          href={youtube.href}
          className="hover-invert mt-14 block border border-line bg-bg-raised p-6 sm:p-8"
          target="_blank"
          rel="noreferrer"
        >
          <p className="mark text-faint">YouTube</p>
          <p className="mt-3 font-display text-3xl text-ink-strong">{youtube.name}</p>
          <p className="mt-1 mark text-accent-ink">{youtube.handle}</p>
          <p className="mt-3 max-w-xl text-muted">{youtube.body}</p>
        </a>
      </div>
    </section>
  );
}
