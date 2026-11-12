import { recipe } from "@vanilla-extract/recipes";
import { vars } from "@/styles/theme.css";

export const button = recipe({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: vars.space.xs,
    fontFamily: vars.font.mono,
    fontSize: 14,
    fontWeight: 600,
    borderRadius: vars.size.radiusSm,
    cursor: "pointer",
  },
  variants: {
    variant: {
      primary: {
        background: vars.color.accent,
        color: vars.color.accentInk,
      },
      ghost: {
        background: "transparent",
        color: vars.color.secondary,
        border: `1px solid ${vars.color.border}`,
      },
      link: {
        background: "transparent",
        color: vars.color.accent,
        padding: 0,
      },
    },
    size: {
      sm: {
        padding: `${vars.space.xs} ${vars.space.sm}`,
      },
      md: {
        padding: `${vars.space.sm} ${vars.space.lg}`,
      },
      lg: {
        padding: `${vars.space.md} ${vars.space.xl}`,
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
