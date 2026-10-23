import { asset } from "@/lib/paths";

export const profile = {
  name: "Reza Tavangar",
  shortName: "Reza",
  title: "Full-Stack Software Developer",
  headline: "Reza Tavangar — Full-Stack Software Developer",
  subtitle:
    "Specializing in Python, Django, React, TypeScript, C#, and PHP.",
  location: "Yerevan, Armenia",
  email: "",
  resumeHref: asset("/resume.pdf"),
  github: "https://github.com/RezaNoel",
  linkedin: "https://www.linkedin.com/in/rezanoel",
  garden: "https://rezanoel.ir",
  youtube: "https://www.youtube.com/@chibodeh",
  youtubeHandle: "@chibodeh",
  youtubeName: "ChiBodeh",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#youtube", label: "YouTube" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
] as const;

export const stack = [
  "Python",
  "Django",
  "React",
  "TypeScript",
  "C#",
  "PHP",
  "n8n",
  "Docker",
  "Lua",
  "Obsidian",
] as const;

export const languages = [
  { name: "Persian", level: "Native", percent: 100 },
  { name: "English", level: "B1", percent: 60 },
  { name: "German", level: "B1", percent: 60 },
  { name: "Brazilian Portuguese", level: "A2", percent: 40 },
  { name: "Armenian", level: "A2", percent: 40 },
] as const;

export const about = {
  kicker: "About",
  lead: "Computer Network and Software background, now shipping automation that people actually use.",
  body: [
    "I am based in Yerevan, Armenia. My training is in Computer Network and Software, and I work across the stack — from Django APIs and React interfaces to C# and PHP services.",
    "Right now I am focused on automation workflows with n8n and Docker, plus local AI agent integrations that stay on a machine I control. The goal is the same every time: fewer manual steps, clearer systems, and tools I can hand to someone else.",
    "On YouTube I teach self-directed language learning and productivity — the same systems I use to keep Persian, English, German, Portuguese, and Armenian moving.",
  ],
  facts: [
    { label: "Base", value: "Yerevan, Armenia" },
    { label: "Background", value: "Computer Network & Software" },
    { label: "Focus", value: "Automation + local AI agents" },
    { label: "Toolkit", value: "n8n · Docker · Python · React" },
  ],
};

export type Project = {
  id: string;
  index: string;
  title: string;
  summary: string;
  tags: string[];
  showcaseHref: string;
  showcaseLabel: string;
  downloadHref: string;
  downloadLabel: string;
};

export const projects: Project[] = [
  {
    id: "nojen",
    index: "01",
    title: "Nojen",
    summary:
      "Agile project-management workspace in Django: projects, sprints, kanban, teams, RBAC, announcements, activity log, and i18n.",
    tags: ["Django", "Python", "Kanban", "RBAC"],
    showcaseHref: "https://github.com/RezaNoel/Nojen",
    showcaseLabel: "View repo",
    downloadHref: "https://github.com/RezaNoel/Nojen",
    downloadLabel: "GitHub",
  },
  {
    id: "poker",
    index: "02",
    title: "Bet on Poker",
    summary:
      "A mobile dealer console for Bet on Poker — six boxes, a 20-second announce clock, and a live GitHub Pages demo you can open now.",
    tags: ["React", "TypeScript", "Vite", "GitHub Pages"],
    showcaseHref: "https://rezanoel.github.io/bet-on-poker/",
    showcaseLabel: "Open live site",
    downloadHref: "https://github.com/RezaNoel/bet-on-poker",
    downloadLabel: "GitHub",
  },
  {
    id: "nolingo",
    index: "03",
    title: "Nolingo",
    summary:
      "A custom Obsidian flashcard plugin with spaced repetition, built for language learning inside a vault you already live in.",
    tags: ["Obsidian", "TypeScript", "Spaced repetition"],
    showcaseHref: "#projects",
    showcaseLabel: "Showcase",
    downloadHref: asset("/downloads/nolingo.zip"),
    downloadLabel: "Download plugin",
  },
  {
    id: "garden",
    index: "04",
    title: "Digital Garden & Workflows",
    summary:
      "Automated setups that combine n8n, Telegram bots, and Python web scrapers into one local publishing loop.",
    tags: ["n8n", "Telegram", "Python", "Docker"],
    showcaseHref: "https://rezanoel.ir",
    showcaseLabel: "Open garden",
    downloadHref: asset("/downloads/digital-garden.zip"),
    downloadLabel: "Download workflows",
  },
];

export const youtube = {
  name: "ChiBodeh",
  handle: "@chibodeh",
  href: "https://www.youtube.com/@chibodeh",
  headline: "Self-taught language learning and real productivity.",
  body: "On ChiBodeh I break down how I learn languages on my own and how I raise output without drowning in tools. No fluff systems — just the loops that stay on the desk.",
};
