import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space.xl,
  alignItems: "center",
  "@media": {
    [breakpoints.lg]: {
      gridTemplateColumns: "300px 1fr",
      gap: vars.space.xxxl,
    },
  },
});

export const avatar = style({
  width: "100%",
  maxWidth: 300,
  aspectRatio: "1",
  borderRadius: 20,
  background: vars.color.surface,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  "@media": {
    [breakpoints.lg]: {
      margin: 0,
    },
  },
});

export const avatarText = style({
  fontFamily: vars.font.display,
  fontSize: 88,
  fontWeight: 700,
  letterSpacing: "-0.04em",
  color: vars.color.accent,
});

export const text = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
});

export const paragraph = style({
  fontSize: 17,
  lineHeight: 1.7,
  color: vars.color.muted,
});

export const facts = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.sm,
});
