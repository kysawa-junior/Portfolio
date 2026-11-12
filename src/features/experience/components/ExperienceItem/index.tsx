"use client";

import { motion } from "motion/react";
import type { Experience } from "../../model/types";
import {
  item,
  rail,
  dot,
  line,
  body,
  period,
  roleRow,
  role,
  company,
  description,
} from "./style.css";

export interface ExperienceItemProps {
  experience: Experience;
  isLast: boolean;
}

export function ExperienceItem({ experience: e, isLast }: ExperienceItemProps) {
  return (
    <motion.article
      className={item}
      whileHover={{
        backgroundColor: "rgba(16, 19, 25, 0.55)",
        borderTopColor: "#2A2E38",
      }}
      transition={{ duration: 0.2 }}
    >
      <div className={rail}>
        <span className={dot} />
        {isLast ? null : <span className={line} />}
      </div>
      <div className={body}>
        <span className={period}>{e.period}</span>
        <div className={roleRow}>
          <h3 className={role}>{e.role}</h3>
          <span className={company}>· {e.company}</span>
        </div>
        <p className={description}>{e.description}</p>
      </div>
    </motion.article>
  );
}
