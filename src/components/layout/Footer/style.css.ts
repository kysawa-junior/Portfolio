import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

export const footer = style({
  padding: `${vars.space.lg} 0`,
});

export const inner = style({
  width: "70%",
  margin: "0 auto",
  padding: `0 ${vars.space.lg}`,
  display: "flex",
  flexDirection: "column",
  gap: vars.space.sm,
  alignItems: "center",
  justifyContent: "space-between",
  "@media": {
    [breakpoints.md]: {
      flexDirection: "row",
    },
  },
});

export const text = style({
  fontFamily: vars.font.mono,
  fontSize: 12,
  color: vars.color.faint,
});

export const toTop = style({
  fontFamily: vars.font.mono,
  fontSize: 12,
  color: vars.color.faint,
  background: "none",
  border: "none",
  cursor: "pointer",
});
