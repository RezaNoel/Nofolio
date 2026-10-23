import { about, languages } from "@/data/site";

export function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="rail grid gap-0 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <aside className="border-b border-line py-12 lg:border-b-0 lg:border-r lg:pr-10">
          <p className="mark text-accent-ink">02 / {about.kicker}</p>
          <h2 className="mt-4 font-display text-4xl tracking-[-0.03em] text-ink-strong sm:text-5xl">
            Built on networks.
            <span className="mt-2 block font-serif text-[0.72em] italic">
              Focused on workflows.
            </span>
          </h2>
        </aside>

        <div className="py-12 lg:pl-12">
          <p className="max-w-xl text-xl leading-relaxed text-ink-strong">{about.lead}</p>
          {about.body.map((paragraph) => (
            <p key={paragraph} className="mt-5 max-w-xl text-base leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}

          <ul className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
            {about.facts.map((fact) => (
              <li key={fact.label} className="bg-bg-raised px-4 py-4">
                <p className="mark text-faint">{fact.label}</p>
                <p className="mt-2 text-ink-strong">{fact.value}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <p className="mark text-accent-ink">Languages</p>
            <ul className="mt-5 space-y-5">
              {languages.map((language) => (
                <li key={language.name}>
                  <div className="mb-2 flex items-baseline justify-between gap-4">
                    <span className="text-ink-strong">{language.name}</span>
                    <span className="mark text-faint">{language.level}</span>
                  </div>
                  <div
                    className="h-2 border border-line bg-bg-sunken"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={language.percent}
                    aria-label={`${language.name}, ${language.level}`}
                  >
                    <div
                      className="h-full bg-accent"
                      style={{ width: `${language.percent}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
