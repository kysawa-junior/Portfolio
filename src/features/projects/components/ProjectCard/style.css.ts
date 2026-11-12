import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const card = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: vars.space.md,
  padding: vars.space.xl,
  overflow: "hidden",
  background: "#0B0D10",
  borderRadius: 24,
  cursor: "pointer",
});

// barra de acento segmentada: ciano / rosa / cinza — sem gradiente e sem gap
export const cardAccent = style({
  position: "absolute",
  top: -1,
  left: -1,
  right: -1,
  height: 2,
  display: "flex",
  gap: 0,
  opacity: 0.9,
});

export const accentCyan = style({
  background: vars.color.accent,
  flex: 3,
});

export const accentPink = style({
  background: vars.color.pink,
  flex: 1,
});

export const accentGray = style({
  background: vars.color.faint,
  flex: 1,
});

export const cardHead = style({
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: vars.space.sm,
});

// same mono face as the section title
export const cardName = style({
  fontFamily: vars.font.mono,
  fontWeight: 700,
  fontSize: 20,
  letterSpacing: "-0.02em",
  color: vars.color.primary,
  lineHeight: 1.2,
});

export const cardArrow = style({
  color: vars.color.pink,
  flexShrink: 0,
});

export const cardCategory = style({
  fontFamily: vars.font.mono,
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: vars.color.accent,
});

export const cardDesc = style({
  fontSize: 14,
  lineHeight: 1.7,
  color: vars.color.muted,
  flex: 1,
});

export const cardStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.xs,
});

export const cardTag = style({
  fontFamily: vars.font.mono,
  fontSize: 10,
  letterSpacing: "0.06em",
  color: vars.color.accentDim,
  padding: "3px 8px",
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: 2,
  background: vars.color.bg,
});

export const cardGhost = style({
  position: "absolute",
  inset: 0,
  borderRadius: 24,
  border: "1px solid #FFFFFF",
  opacity: 0,
  pointerEvents: "none",
});

export const cardGhostGlow = style({
  boxShadow: "0 0 32px rgba(255, 255, 255, 0.4)",
});

export const cardGhostFill = style({
  background: "rgba(255, 255, 255, 0.06)",
});
