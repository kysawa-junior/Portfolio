import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

export const track = style({
  position: "fixed",
  right: vars.space.lg,
  top: "50%",
  // `translate` (e não `transform`): o Motion anima `x` via transform e
  // sobrescreveria o transform do CSS, tirando o card do centro vertical.
  translate: "0 -50%",
  zIndex: 40,
  display: "none",
  flexDirection: "column",
  gap: vars.space.xxs,
  padding: vars.space.xs,
  background: "rgba(10, 11, 15, 0.82)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: `1px solid ${vars.color.borderSubtle}`,
  borderRadius: 16,
  "@media": {
    [breakpoints.lg]: {
      display: "flex",
    },
  },
});

// apenas ícone — sem texto no markup
export const item = style({
  position: "relative",
  zIndex: 0,
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  width: 38,
  height: 38,
  borderRadius: 12,
  color: vars.color.muted,
  cursor: "pointer",
  background: "transparent",
});

// wrapper do SVG: centraliza e remove o gap de baseline da linha inline
export const icon = style({
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 0,
});

export const pill = style({
  position: "absolute",
  inset: 0,
  zIndex: -1,
  background: vars.color.accent,
  borderRadius: 12,
});

export const tooltip = style({
  position: "absolute",
  right: "calc(100% + 10px)",
  top: "50%",
  translate: "0 -50%",
  padding: "4px 10px",
  whiteSpace: "nowrap",
  fontFamily: vars.font.mono,
  fontSize: 11,
  letterSpacing: "0.06em",
  color: vars.color.secondary,
  background: "rgba(10, 11, 15, 0.95)",
  border: `1px solid ${vars.color.border}`,
  borderRadius: 8,
  pointerEvents: "none",
});
