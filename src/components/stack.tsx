import { stack } from "@/data/site";

const groups = [
  {
    title: "Application",
    items: ["Python", "Django", "C#", "PHP"],
  },
  {
    title: "Interface",
    items: ["React", "TypeScript", "Lua / NUI"],
  },
  {
    title: "Automation",
    items: ["n8n", "Docker", "Local AI agents"],
  },
];

export function Stack() {
  return (
    <section id="stack" className="border-b border-line">
      <div className="rail px-4 py-16 sm:px-6 sm:py-20">
        <p className="mark text-accent-ink">04 / Stack</p>
        <h2 className="mt-3 max-w-3xl font-display text-4xl tracking-[-0.03em] text-ink-strong sm:text-5xl">
          The languages I reach for first.
        </h2>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.title} className="bg-bg p-6">
              <p className="mark text-faint">{group.title}</p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg text-ink-strong">
                    <span className="size-1.5 bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 mark text-faint">{stack.join("  ·  ")}</p>
      </div>
    </section>
  );
}
