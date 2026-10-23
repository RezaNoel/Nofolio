import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { SkillTape } from "@/components/skill-tape";
import { Stack } from "@/components/stack";
import { Youtube } from "@/components/youtube";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillTape />
      <Youtube />
      <About />
      <Projects />
      <Stack />
      <Contact />
    </>
  );
}
