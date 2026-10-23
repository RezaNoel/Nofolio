import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="rail flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="mark text-faint">
          © {new Date().getFullYear()} {profile.name} · Yerevan
        </p>
        <div className="flex flex-wrap gap-4">
          <a className="mark text-ink-strong hover:text-accent-ink" href={profile.youtube}>
            YouTube
          </a>
          <a className="mark text-muted hover:text-ink-strong" href={profile.github}>
            GitHub
          </a>
          <a className="mark text-muted hover:text-ink-strong" href={profile.linkedin}>
            LinkedIn
          </a>
          <a className="mark text-muted hover:text-ink-strong" href={profile.garden}>
            Digital garden
          </a>
          <a className="mark text-muted hover:text-ink-strong" href="#top">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
