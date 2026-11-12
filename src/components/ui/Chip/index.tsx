"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { hoverAccent } from "@/lib/motionStates";
import { chip } from "./style.css";

export interface ChipProps {
  children: ReactNode;
}

export function Chip({ children }: ChipProps) {
  return (
    <motion.span
      className={chip.tag}
      whileHover={hoverAccent}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.span>
  );
}
