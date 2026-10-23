import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="rail px-4 py-28 sm:px-6">
      <p className="mark text-accent-ink">404</p>
      <h1 className="mt-4 font-display text-5xl text-ink-strong">This page is not in the vault.</h1>
      <p className="mt-4 max-w-md text-muted">
        The static export only ships the homepage. Head back and use the section links.
      </p>
      <Button href="/" className="mt-8">
        Return home
      </Button>
    </section>
  );
}
