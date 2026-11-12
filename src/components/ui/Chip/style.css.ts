import { styleVariants } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const chip = styleVariants({
  tag: {
    display: "inline-flex",
    alignItems: "center",
    gap: vars.space.xs,
    padding: `${vars.space.xxs} ${vars.space.sm}`,
    borderRadius: vars.size.radiusFull,
    border: `1px solid ${vars.color.border}`,
    background: vars.color.surface,
    color: vars.color.secondary,
    fontFamily: vars.font.mono,
    fontSize: 12,
    whiteSpace: "nowrap",
  },
});
