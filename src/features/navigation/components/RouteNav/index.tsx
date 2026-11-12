"use client";

import { motion, useReducedMotion } from "motion/react";
import { routes } from "../../model/navigation";
import { useRouteNavViewModel } from "./viewmodel";
import { palette } from "@/styles/theme.css";
import { focusRing } from "@/lib/motionStates";
import { SectionIcon } from "./icons";
import { track, pill, item, tooltip, icon } from "./style.css";

const spring = { type: "spring", stiffness: 500, damping: 30 } as const;

// As variantes do botão propagam para os filhos (ícone + tooltip).
// O foco usa o mesmo anel compartilhado do resto do site.
const itemVariants = {
  inactive: { color: palette.muted, backgroundColor: "rgba(0, 0, 0, 0)" },
  active: { color: palette.ink, backgroundColor: "rgba(0, 0, 0, 0)" },
  hover: { color: palette.white, backgroundColor: palette.surfaceAlt },
  activeHover: { color: palette.ink, backgroundColor: "rgba(0, 0, 0, 0)" },
  focus: {
    ...focusRing,
    color: palette.white,
    backgroundColor: palette.surfaceAlt,
  },
  activeFocus: {
    ...focusRing,
    outlineColor: palette.white,
    color: palette.ink,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
};

const iconVariants = {
  inactive: { scale: 1 },
  active: { scale: 1 },
  hover: { scale: 1.15 },
  activeHover: { scale: 1.05 },
  focus: { scale: 1.15 },
  activeFocus: { scale: 1.05 },
};

const tooltipVariants = {
  inactive: { opacity: 0, x: 6 },
  active: { opacity: 0, x: 6 },
  hover: { opacity: 1, x: 0 },
  activeHover: { opacity: 1, x: 0 },
  focus: { opacity: 1, x: 0 },
  activeFocus: { opacity: 1, x: 0 },
};

export function RouteNav() {
  const { activeId, scrollTo } = useRouteNavViewModel();
  const reduceMotion = useReducedMotion();

  return (
    <motion.nav
      className={track}
      aria-label="Navegação da página"
      initial={reduceMotion ? false : { opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={spring}
    >
      {routes.map((route) => {
        const isActive = activeId === route.id;
        return (
          <motion.button
            key={route.id}
            type="button"
            className={item}
            onClick={() => scrollTo(route.id)}
            aria-label={route.label}
            aria-current={isActive ? "true" : undefined}
            animate={isActive ? "active" : "inactive"}
            whileHover={isActive ? "activeHover" : "hover"}
            whileFocus={isActive ? "activeFocus" : "focus"}
            whileTap={{ scale: 0.92 }}
            variants={itemVariants}
            transition={{ duration: 0.15 }}
          >
            {isActive ? (
              <motion.span
                layoutId="nav-active-pill"
                className={pill}
                transition={spring}
              />
            ) : null}
            <motion.span
              className={tooltip}
              aria-hidden="true"
              variants={tooltipVariants}
              transition={{ duration: 0.15 }}
            >
              {route.label}
            </motion.span>
            <motion.span
              className={icon}
              variants={iconVariants}
              transition={spring}
            >
              <SectionIcon id={route.id} />
            </motion.span>
          </motion.button>
        );
      })}
    </motion.nav>
  );
}
