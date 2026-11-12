import { experiences } from "../../model/experiences";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { section, inner } from "@/styles/section.css";
import { ExperienceItem } from "../ExperienceItem";
import { timeline } from "./style.css";

export function Experience() {
  return (
    <section id="experiencia" className={`${section}`}>
      <div className={inner}>
        <SectionHeading index="04" title="Experiência" />
        <div className={timeline}>
          {experiences.map((e, i) => (
            <Reveal key={`${e.company}-${e.period}`} delay={i * 0.08}>
              <ExperienceItem
                experience={e}
                isLast={i === experiences.length - 1}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
