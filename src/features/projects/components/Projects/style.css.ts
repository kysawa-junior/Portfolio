import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space.xl,
  "@media": {
    [breakpoints.md]: {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
  },
});
