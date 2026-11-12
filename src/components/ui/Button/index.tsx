"use client";

import { motion } from "motion/react";
import type { ComponentProps, ReactNode } from "react";
import { palette } from "@/styles/theme.css";
import { focusRing } from "@/lib/motionStates";
import { button } from "./style.css";

export interface ButtonProps extends ComponentProps<typeof motion.button> {
  variant?: "primary" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
}

const hoverVariants = {
  primary: {
    backgroundColor: palette.pink,
    color: palette.ink,
    boxShadow: "0 0 28px rgba(255, 92, 154, 0.32)",
  },
  ghost: {
    borderColor: palette.pink,
    color: palette.white,
    boxShadow: "0 0 20px rgba(255, 92, 154, 0.16)",
  },
  link: {
    color: palette.pink,
  },
} as const;

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      className={`${button({ variant, size })} ${className ?? ""}`}
      whileHover={hoverVariants[variant]}
      whileTap={{ scale: 0.98, y: 1 }}
      whileFocus={focusRing}
      transition={{ type: "spring", stiffness: 400, damping: 24 }}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
