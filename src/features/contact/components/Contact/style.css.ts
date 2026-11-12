import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

export const section = style({
  padding: `${vars.space.sectionMobile} 0`,
  position: "relative",
  "@media": {
    [breakpoints.md]: {
      padding: `${vars.space.section} 0`,
    },
  },
});

export const inner = style({
  width: "min(1200px, 92%)",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.lg,
  textAlign: "center",
});

export const eyebrow = style({
  fontFamily: vars.font.mono,
  fontSize: 11,
  letterSpacing: "0.2em",
  color: vars.color.pink,
  textTransform: "uppercase",
});

export const title = style({
  fontFamily: vars.font.mono,
  fontWeight: 700,
  fontSize: "clamp(34px, 6vw, 72px)",
  letterSpacing: "-0.04em",
  lineHeight: 1.06,
});

export const subtitle = style({
  fontSize: 17,
  lineHeight: 1.6,
  color: vars.color.muted,
  maxWidth: 560,
});

export const email = style({
  fontFamily: vars.font.mono,
  fontSize: 15,
  fontWeight: 600,
  color: vars.color.accentInk,
  background: vars.color.accent,
  padding: `${vars.space.md} ${vars.space.xxl}`,
  borderRadius: 2,
  cursor: "pointer",
  letterSpacing: "0.02em",
});

export const socials = style({
  display: "flex",
  gap: vars.space.md,
  flexWrap: "wrap",
  justifyContent: "center",
});

export const social = style({
  display: "flex",
  alignItems: "center",
  gap: vars.space.xs,
  padding: `${vars.space.sm} ${vars.space.md}`,
  border: `1px solid ${vars.color.borderStrong}`,
  borderRadius: 2,
  background: vars.color.surface,
  color: vars.color.muted,
  fontFamily: vars.font.mono,
  fontSize: 12,
});
