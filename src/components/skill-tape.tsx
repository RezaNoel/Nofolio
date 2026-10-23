import { stack } from "@/data/site";

function Track() {
  return (
    <div className="tape-track">
      {stack.map((item) => (
        <span key={item} className="flex items-center gap-4 px-4 py-3">
          <span className="mark text-ink">{item}</span>
          <span className="text-accent" aria-hidden>
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export function SkillTape() {
  return (
    <div className="border-b border-line bg-bg-sunken">
      <div className="tape" aria-hidden>
        <Track />
        <Track />
      </div>
      <p className="sr-only">Stack: {stack.join(", ")}</p>
    </div>
  );
}
