import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const box = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: vars.size.radiusMd,
  background: vars.color.surfaceAlt,
  border: `1px solid ${vars.color.border}`,
  flexShrink: 0,
});

export const svg = style({
  width: 28,
  height: 28,
});
