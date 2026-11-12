import { profile } from "@/lib/content/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { section, inner } from "@/styles/section.css";
import {
  grid,
  avatar,
  avatarText,
  text,
  paragraph,
  facts,
} from "./style.css";

const factChips = [
  `📍 ${profile.location}`,
  ...profile.education.map((course) => `🎓 ${course}`),
  `☕ ${profile.experienceYears}`,
];

export function About() {
  return (
    <section id="sobre" className={`${section}`}>
      <div className={inner}>
        <SectionHeading index="01" title="Sobre" />
        <div className={grid}>
          <Reveal>
            <div className={avatar}>
              <span className={avatarText}>{profile.avatar}</span>
            </div>
          </Reveal>
          <div className={text}>
            {profile.bio.map((p, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <p className={paragraph}>{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <div className={facts}>
                {factChips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
