import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

// 3 colunas (Frontend / Backend / Infra) em desktop, 1 empilhada no mobile
export const groups = style({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space.md,
  "@media": {
    [breakpoints.md]: {
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: vars.space.lg,
    },
  },
});

export const group = style({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  padding: vars.space.lg,
  background: "#0B0D10",
  borderRadius: 24,
});

export const groupLabel = style({
  fontFamily: vars.font.mono,
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: vars.color.accent,
  marginBottom: vars.space.md,
});

// cada coluna é um grid próprio de skills: 4 colunas no desktop
export const skillsGrid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(88px, 1fr))",
  gap: vars.space.xs,
  alignContent: "start",
  "@media": {
    [breakpoints.md]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(76px, 1fr))",
    },
    [breakpoints.lg]: {
      gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    },
  },
});

// sem card: só o ícone e o nome
export const skill = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: vars.space.xs,
  padding: `${vars.space.xs} 0`,
});

export const skillGhost = style({
  position: "absolute",
  inset: -1,
  borderRadius: 2,
  border: "1px solid #FFFFFF",
  opacity: 0,
  pointerEvents: "none",
});

export const skillGhostGlow = style({
  boxShadow: "0 0 24px rgba(255, 255, 255, 0.45)",
});

export const skillGhostFill = style({
  background: "rgba(255, 255, 255, 0.07)",
});

export const skillName = style({
  fontFamily: vars.font.mono,
  fontSize: 11,
  color: vars.color.secondary,
  textAlign: "center",
  hyphens: "auto",
  overflowWrap: "break-word",
});
