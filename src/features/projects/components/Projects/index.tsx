import { projects } from "../../model/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { section, inner } from "@/styles/section.css";
import { ProjectCard } from "../ProjectCard";
import { grid } from "./style.css";

export function Projects() {
  return (
    <section id="projetos" className={`${section}`}>
      <div className={inner}>
        <SectionHeading index="03" title="Projetos" />
        <div className={grid}>
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
