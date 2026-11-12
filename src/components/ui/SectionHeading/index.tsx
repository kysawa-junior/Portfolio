"use client";

import { motion } from "motion/react";
import {
  heading,
  index,
  marker,
  title,
  rule,
  segmentCyan,
  segmentPink,
  segmentGray,
  segmentCyanShort,
} from "./style.css";

// régua decorativa em blocos soltos: ciano, rosa, cinza, ciano
const ruleSegments = [
  { className: segmentCyan, delay: 0 },
  { className: segmentPink, delay: 0.08 },
  { className: segmentGray, delay: 0.16 },
  { className: segmentCyanShort, delay: 0.24 },
] as const;

export interface SectionHeadingProps {
  index: string;
  title: string;
}

export function SectionHeading({
  index: idx,
  title: headingTitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      data-reveal
      className={heading}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5 }}
    >
      <span className={index}>
        {idx} <span className={marker} aria-hidden="true">{"//"}</span>
      </span>
      <h2 className={title}>{headingTitle}</h2>
      <motion.span
        data-reveal
        className={rule}
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
      >
        {ruleSegments.map((segment) => (
          <motion.span
            key={segment.className}
            className={segment.className}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: segment.delay,
            }}
          />
        ))}
      </motion.span>
    </motion.div>
  );
}
