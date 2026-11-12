"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  art,
  accent,
  accentCyan,
  accentPink,
  accentGray,
  editorBar,
  dots,
  dotPink,
  dotCyan,
  dotGray,
  filename,
  code,
  codeLine,
  kw,
  plain,
  str,
  fn,
  cursor,
} from "./style.css";

type Tone = "kw" | "plain" | "str" | "fn";

const toneClass: Record<Tone, string> = { kw, plain, str, fn };

interface CodeLine {
  parts: { text: string; tone: Tone }[];
}

const codeLines: CodeLine[] = [
  {
    parts: [
      { text: "fun", tone: "kw" },
      { text: " main() ", tone: "plain" },
      { text: "{", tone: "plain" },
    ],
  },
  {
    parts: [
      { text: "  val", tone: "kw" },
      { text: " stack ", tone: "plain" },
      { text: "= ", tone: "plain" },
      { text: '"Kotlin"', tone: "str" },
    ],
  },
  {
    parts: [
      { text: "  val", tone: "kw" },
      { text: " backend ", tone: "plain" },
      { text: "= ", tone: "plain" },
      { text: '"Ktor"', tone: "str" },
    ],
  },
  {
    parts: [
      { text: "  val", tone: "kw" },
      { text: " db ", tone: "plain" },
      { text: "= ", tone: "plain" },
      { text: '"PostgreSQL"', tone: "str" },
    ],
  },
  {
    parts: [
      { text: "  val", tone: "kw" },
      { text: " deploy ", tone: "plain" },
      { text: "= ", tone: "plain" },
      { text: '"Docker"', tone: "str" },
    ],
  },
  {
    parts: [{ text: " ", tone: "plain" }],
  },
  {
    parts: [
      { text: "  val", tone: "kw" },
      { text: " app ", tone: "plain" },
      { text: "= ", tone: "plain" },
      { text: "createApp", tone: "fn" },
      { text: "(stack, backend, db)", tone: "plain" },
    ],
  },
  {
    parts: [
      { text: "  app.", tone: "plain" },
      { text: "start", tone: "fn" },
      { text: "()", tone: "plain" },
    ],
  },
  {
    parts: [
      { text: "  ", tone: "plain" },
      { text: "println", tone: "fn" },
      { text: "(", tone: "plain" },
      { text: '"Hello, JVM!"', tone: "str" },
      { text: ")", tone: "plain" },
    ],
  },
  {
    parts: [{ text: "}", tone: "plain" }],
  },
];

const codeContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.35 },
  },
};

const codeLineVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
};

export function HeroArt() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={art}
      aria-hidden="true"
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              boxShadow:
                "0 18px 44px rgba(0, 0, 0, 0.45), 0 0 32px rgba(255, 92, 154, 0.16)",
            }
      }
    >
      <span className={accent} aria-hidden="true">
        <span className={accentCyan} />
        <span className={accentPink} />
        <span className={accentGray} />
      </span>

      <div className={editorBar}>
        <span className={dots}>
          <span className={dotPink} />
          <span className={dotCyan} />
          <span className={dotGray} />
        </span>
        <span className={filename}>Main.kt</span>
      </div>

      <motion.div
        className={code}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={codeContainer}
      >
        {codeLines.map((line, i) => (
          <motion.span
            key={i}
            className={codeLine}
            variants={codeLineVariants}
          >
            {line.parts.map((part, j) => (
              <span key={j} className={toneClass[part.tone]}>
                {part.text}
              </span>
            ))}
            {i === codeLines.length - 1 ? (
              <motion.span
                className={cursor}
                animate={
                  reduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }
                }
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : null}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
