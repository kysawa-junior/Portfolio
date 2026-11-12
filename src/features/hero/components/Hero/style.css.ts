import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

export const hero = style({
  minHeight: "100svh",
  display: "flex",
  alignItems: "center",
  overflow: "hidden",
  position: "relative",
  padding: `${vars.size.navHeight} 0 ${vars.space.xxxl}`,
});

export const inner = style({
  width: "min(1200px, 92%)",
  margin: "0 auto",
  padding: `${vars.space.xxl} 0`,
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: vars.space.xxl,
  alignItems: "center",
  position: "relative",
  zIndex: 1,
  "@media": {
    [breakpoints.lg]: {
      // 2 colunas no desktop: texto à esquerda, arte à direita
      gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
      gap: vars.space.xl,
      // espaço reservado para a navbar lateral direita (track ~52px + 24px de offset)
      paddingRight: 56,
    },
    // a partir de 1280px há folga extra à direita: IDE anda mais 40px
    "(min-width: 1280px)": {
      paddingRight: 16,
    },
  },
});

export const status = style({
  display: "inline-flex",
  alignItems: "center",
  gap: vars.space.xs,
  padding: `${vars.space.xxs} ${vars.space.sm}`,
  width: "fit-content",
  border: `1px solid ${vars.color.borderStrong}`,
  background: vars.color.surface,
  fontFamily: vars.font.mono,
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.04em",
  color: vars.color.muted,
});

export const statusDot = style({
  width: 7,
  height: 7,
  borderRadius: "50%",
  background: vars.color.success,
});

export const whoami = style({
  fontFamily: vars.font.mono,
  fontSize: 13,
  letterSpacing: "0.08em",
  color: vars.color.faint,
});

// decoração de terminal: "$" em rosa
export const promptChar = style({
  color: vars.color.pink,
});

// name — same mono face as the typewriter, bold; typewriter-scramble glitch handled in JS
export const name = style({
  fontFamily: vars.font.mono,
  fontSize: "clamp(38px, 6.4vw, 84px)",
  fontWeight: 700,
  letterSpacing: "-0.045em",
  lineHeight: 1.06,
  color: vars.color.primary,
  whiteSpace: "nowrap",
  cursor: "default",
  "@media": {
    [breakpoints.lg]: {
      // com a arte na direita, o nome precisa caber na coluna do texto
      fontSize: "clamp(30px, 4.2vw, 58px)",
    },
  },
});

export const nameChar = style({
  display: "inline-block",
  clipPath: "inset(0 0 0 0)",
  textShadow:
    "2px 0 rgba(255,92,154,0), -2px 0 rgba(76,201,240,0), 0 0 12px rgba(255,92,154,0)",
});

export const nameCaret = style({
  display: "inline-block",
  width: "0.45em",
  height: "0.95em",
  marginLeft: "0.12em",
  background: vars.color.pink,
});

export const typeRow = style({
  display: "flex",
  alignItems: "center",
  fontFamily: vars.font.mono,
  fontSize: "clamp(16px, 2.6vw, 24px)",
  fontWeight: 500,
  color: vars.color.secondary,
  minHeight: "1.4em",
});

export const prompt = style({
  color: vars.color.pink,
  marginRight: vars.space.xs,
});

export const caret = style({
  display: "inline-block",
  width: "0.55em",
  height: "1.05em",
  marginLeft: vars.space.xxs,
  background: vars.color.accent,
});

export const bio = style({
  fontSize: 17,
  lineHeight: 1.7,
  color: vars.color.secondary,
  maxWidth: 520,
});

export const actions = style({
  display: "flex",
  flexWrap: "wrap",
  gap: vars.space.md,
});

export const left = style({
  display: "flex",
  flexDirection: "column",
  gap: vars.space.lg,
  position: "relative",
  zIndex: 1,
});

// texto para leitores de tela quando a animação assume a tela
export const srOnly = style({
  position: "absolute",
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  borderWidth: 0,
});
