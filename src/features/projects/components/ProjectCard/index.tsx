"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Project } from "../../model/types";
import { glitchSliceA, glitchSliceB } from "@/lib/glitchVariants";
import {
  card,
  cardAccent,
  accentCyan,
  accentPink,
  accentGray,
  cardHead,
  cardName,
  cardArrow,
  cardCategory,
  cardDesc,
  cardStack,
  cardTag,
  cardGhost,
  cardGhostFill,
  cardGhostGlow,
} from "./style.css";

export interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project: p }: ProjectCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      className={card}
      initial="rest"
      whileHover="hover"
      variants={{
        rest: { y: 0 },
        hover: {
          y: reduceMotion ? 0 : -6,
          backgroundColor: "#12151A",
          boxShadow:
            "0 16px 40px rgba(0, 0, 0, 0.45), 0 0 36px rgba(255, 92, 154, 0.18)",
        },
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <span className={cardAccent} aria-hidden="true">
        <span className={accentCyan} />
        <span className={accentPink} />
        <span className={accentGray} />
      </span>
      <div className={cardHead}>
        <h3 className={cardName}>{p.name}</h3>
        <motion.span
          className={cardArrow}
          variants={{ hover: { x: 4, y: -4 } }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7" />
            <path d="M7 7h10v10" />
          </svg>
        </motion.span>
      </div>
      <span className={cardCategory}>{p.category}</span>
      <p className={cardDesc}>{p.description}</p>
      <div className={cardStack}>
        {p.stack.map((t) => (
          <span key={t} className={cardTag}>
            {t}
          </span>
        ))}
      </div>
      {!reduceMotion ? (
        <>
          <motion.span
            aria-hidden="true"
            className={`${cardGhost} ${cardGhostGlow}`}
            initial="rest"
            variants={glitchSliceA}
          />
          <motion.span
            aria-hidden="true"
            className={`${cardGhost} ${cardGhostFill}`}
            initial="rest"
            variants={glitchSliceB}
          />
        </>
      ) : null}
    </motion.article>
  );
}
