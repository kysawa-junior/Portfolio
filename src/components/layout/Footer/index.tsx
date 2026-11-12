"use client";

import { motion } from "motion/react";
import { useLenis } from "lenis/react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { palette } from "@/styles/theme.css";
import { focusRing } from "@/lib/motionStates";
import { footer, inner, text, toTop } from "./style.css";

export function Footer() {
  const lenis = useLenis();

  return (
    <footer className={footer}>
      <div className={inner}>
        <span className={text}>© 2026 KYSAWA — Feito à mão, sem templates</span>
        <motion.button
          type="button"
          className={toTop}
          onClick={() => smoothScrollTo("hero", lenis)}
          whileHover={{ color: palette.pink }}
          whileFocus={focusRing}
          transition={{ duration: 0.15 }}
        >
          Ir ao topo ↑
        </motion.button>
      </div>
    </footer>
  );
}
