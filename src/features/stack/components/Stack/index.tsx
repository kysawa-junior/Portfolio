"use client";

import { motion, useReducedMotion } from "motion/react";
import { skillGroups } from "../../model/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TechIcon } from "@/components/ui/TechIcon";
import { glitchSliceA, glitchSliceB } from "@/lib/glitchVariants";
import { section, inner } from "@/styles/section.css";
import {
  groups,
  group,
  groupLabel,
  skillsGrid,
  skill,
  skillGhost,
  skillGhostFill,
  skillGhostGlow,
  skillName,
} from "./style.css";

const skillVariants = {
  rest: { y: 0 },
  hover: {
    y: -4,
    borderColor: "#FF5C9A",
    backgroundColor: "rgba(255, 255, 255, 0.04)",
  },
};

const skillNameVariants = {
  rest: { color: "#E8EAEF", textShadow: "none" },
  hover: {
    color: "#FFFFFF",
    textShadow: "1px 0 rgba(255, 255, 255, 0.7), -1px 0 rgba(255, 255, 255, 0.5)",
    transition: { duration: 0.15 },
  },
};

export function Stack() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="stack" className={`${section}`}>
      <div className={inner}>
        <SectionHeading index="02" title="Stack" />
        <div className={groups}>
          {skillGroups.map((g, gi) => (
            <Reveal key={g.label} delay={gi * 0.05}>
              <motion.div className={group}>
                <h3 className={groupLabel}>{g.label}</h3>
                <div className={skillsGrid}>
                  {g.skills.map((s) => (
                    <motion.div
                      key={s}
                      className={skill}
                      initial="rest"
                      whileHover="hover"
                      variants={skillVariants}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <TechIcon name={s} />
                      <motion.span
                        className={skillName}
                        variants={skillNameVariants}
                      >
                        {s}
                      </motion.span>
                      {!reduceMotion ? (
                        <>
                          <motion.span
                            aria-hidden="true"
                            className={`${skillGhost} ${skillGhostGlow}`}
                            initial="rest"
                            variants={glitchSliceA}
                          />
                          <motion.span
                            aria-hidden="true"
                            className={`${skillGhost} ${skillGhostFill}`}
                            initial="rest"
                            variants={glitchSliceB}
                          />
                        </>
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
