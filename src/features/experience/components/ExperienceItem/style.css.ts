import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const item = style({
  display: "grid",
  gridTemplateColumns: "24px 1fr",
  gap: vars.space.lg,
  padding: vars.space.xl,
  borderRadius: 0,
  borderTop: `1px solid ${vars.color.borderSubtle}`,
});

export const rail = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const dot = style({
  width: 9,
  height: 9,
  borderRadius: "50%",
  background: vars.color.accent,
  flexShrink: 0,
  marginTop: 6,
});

export const line = style({
  flex: 1,
  width: 1,
  background: vars.color.border,
  marginTop: vars.space.xs,
});

export const body = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.xs,
});

export const period = style({
  fontFamily: vars.font.mono,
  fontSize: 11,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: vars.color.faint,
});

export const roleRow = style({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: vars.space.xs,
});

export const role = style({
  fontFamily: vars.font.mono,
  fontSize: 18,
  fontWeight: 700,
  letterSpacing: "-0.02em",
});

export const company = style({
  fontFamily: vars.font.mono,
  fontSize: 13,
  color: vars.color.pink,
});

export const description = style({
  fontSize: 15,
  lineHeight: 1.6,
  color: vars.color.muted,
});
