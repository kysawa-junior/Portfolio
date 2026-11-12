import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const heading = style({
  position: "relative",
  display: "flex",
  alignItems: "center",
  gap: vars.space.md,
  marginBottom: vars.space.xxl,
});

export const index = style({
  fontFamily: vars.font.mono,
  fontSize: 12,
  letterSpacing: "0.2em",
  color: vars.color.accent,
  flexShrink: 0,
});

export const marker = style({
  color: vars.color.pink,
});

export const title = style({
  fontFamily: vars.font.mono,
  fontWeight: 700,
  fontSize: "clamp(28px, 4.5vw, 44px)",
  letterSpacing: "-0.02em",
  whiteSpace: "nowrap",
});

// régua segmentada: ciano / rosa / cinza / ciano — sem gradiente e sem gap
export const rule = style({
  display: "flex",
  alignItems: "center",
  gap: 0,
  flex: 1,
  minWidth: 0,
});

export const segment = style({
  height: 2,
  transformOrigin: "left",
});

export const segmentCyan = style([
  segment,
  { background: vars.color.accent, flex: 3 },
]);

export const segmentPink = style([
  segment,
  { background: vars.color.pink, flex: 1 },
]);

export const segmentGray = style([
  segment,
  { background: vars.color.faint, flex: 1, height: 1 },
]);

export const segmentCyanShort = style([
  segment,
  { background: vars.color.accent, flex: 0.5, minWidth: 12 },
]);
