"use client";

import { motion, useReducedMotion } from "motion/react";
import { profile } from "@/lib/content/profile";
import { typewriterRoles } from "../../model/content";
import { useHeroViewModel } from "./viewmodel";
import { Button } from "@/components/ui/Button";
import { HeroArt } from "../HeroArt";
import {
  hero,
  inner,
  status,
  statusDot,
  whoami,
  promptChar,
  name,
  nameChar,
  nameCaret,
  typeRow,
  prompt,
  caret,
  bio,
  actions,
  left,
  srOnly,
} from "./style.css";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const {
    typewriterText,
    staticRole,
    nameDisplay,
    nameScrambling,
    nameResolved,
    scrambleName,
    scrollTo,
  } = useHeroViewModel({
    name: profile.name,
    roles: typewriterRoles,
    startDelayMs: 900,
    scrambleDurationMs: 2400,
  });

  return (
    <section id="hero" className={hero}>
      <div className={inner}>
        <motion.div
          data-reveal
          className={left}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={status} variants={item}>
            <span className={statusDot} />
            {profile.tagline}
          </motion.div>

          <motion.span className={whoami} variants={item}>
            <span className={promptChar}>$</span> whoami
          </motion.span>

          <motion.h1
            className={name}
            variants={item}
            onMouseEnter={scrambleName}
          >
            <span className={srOnly}>{profile.name}</span>
            <span aria-hidden="true">
              {nameDisplay.split("").map((c, i) => {
                const scrambling = nameScrambling && i >= nameResolved;
                const jitter = 2 + (i % 4);
                const delay = ((i * 53) % 12) * 0.023;

                return (
                  <motion.span
                    key={i}
                    className={nameChar}
                    animate={
                      scrambling && !reduceMotion
                        ? {
                            color: ["#E8EAEF", "#FFFFFF", "#E8EAEF"],
                            x: [0, jitter, -jitter, jitter * 0.5, -jitter * 1.2, 0],
                            y: [0, 1, -2, 2, -1, 0],
                            clipPath: [
                              "inset(0 0 0 0)",
                              "inset(6% 0 68% 0)",
                              "inset(0 0 0 0)",
                              "inset(52% 0 18% 0)",
                              "inset(0 0 0 0)",
                            ],
                            textShadow: [
                              "2px 0 rgba(255,92,154,0.75), -2px 0 rgba(76,201,240,0.7), 0 0 12px rgba(255,92,154,0.25)",
                              "-3px 0 rgba(76,201,240,0.7), 3px 0 rgba(255,92,154,0.75), 0 0 14px rgba(255,92,154,0.25)",
                              "2px 0 rgba(76,201,240,0.7), -2px 0 rgba(255,92,154,0.75), 0 1px 16px rgba(255,92,154,0.3)",
                              "-2px 0 rgba(255,92,154,0.75), 2px 0 rgba(76,201,240,0.7), 0 0 10px rgba(255,92,154,0.2)",
                            ],
                          }
                        : {
                            color: "#FFFFFF",
                            x: 0,
                            y: 0,
                            clipPath: "inset(0 0 0 0)",
                            textShadow:
                              "2px 0 rgba(255,92,154,0), -2px 0 rgba(76,201,240,0), 0 0 12px rgba(255,92,154,0)",
                          }
                    }
                    transition={
                      scrambling && !reduceMotion
                        ? {
                            duration: 0.42,
                            repeat: Infinity,
                            delay,
                            ease: "linear",
                          }
                        : { duration: 0.12 }
                    }
                  >
                    {c === " " ? "\u00A0" : c}
                  </motion.span>
                );
              })}
            </span>
            {nameScrambling ? (
              <motion.span
                className={nameCaret}
                aria-hidden="true"
                animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : null}
          </motion.h1>

          <motion.div className={typeRow} variants={item}>
            <span className={prompt} aria-hidden="true">
              {">"}
            </span>
            <span className={srOnly}>{staticRole}</span>
            <span aria-hidden="true">{typewriterText}</span>
            <motion.span
              className={caret}
              aria-hidden="true"
              animate={reduceMotion ? { opacity: 1 } : { opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.p className={bio} variants={item}>
            Construo soluções fullstack de ponta a ponta — web, mobile e desktop —
            com React, Flutter, Compose, Spring, Ktor e PostgreSQL. Do banco ao
            pixel, com foco em performance e detalhes que fazem diferença.
          </motion.p>

          <motion.div className={actions} variants={item}>
            <Button variant="primary" onClick={() => scrollTo("projetos")}>
              Ver projetos
            </Button>
            <Button variant="ghost" onClick={() => scrollTo("contato")}>
              Fale comigo
            </Button>
          </motion.div>
        </motion.div>

        <HeroArt />
      </div>
    </section>
  );
}
