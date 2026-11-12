import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "@/styles/theme.css";

// card da arte — mesmo padrão de fundo/radius das seções 02 e 03
export const art = style({
  position: "relative",
  width: "100%",
  maxWidth: 520,
  justifySelf: "center",
  padding: vars.space.lg,
  background: "#0B0D10",
  borderRadius: 24,
  overflow: "hidden",
  "@media": {
    [breakpoints.lg]: {
      justifySelf: "end",
    },
  },
});

// barra de acento segmentada no topo do card (ciano / rosa / cinza) — sem gap
export const accent = style({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: 2,
  display: "flex",
  gap: 0,
  opacity: 0.9,
});

export const accentCyan = style({ background: vars.color.accent, flex: 3 });
export const accentPink = style({ background: vars.color.pink, flex: 1 });
export const accentGray = style({ background: vars.color.faint, flex: 1 });

export const editorBar = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: vars.space.sm,
  paddingBottom: vars.space.md,
  borderBottom: `1px solid ${vars.color.borderSubtle}`,
});

export const dots = style({
  display: "flex",
  alignItems: "center",
  gap: 6,
});

export const dot = style({
  width: 8,
  height: 8,
  borderRadius: "50%",
});

export const dotPink = style([dot, { background: vars.color.pink }]);
export const dotCyan = style([dot, { background: vars.color.accent }]);
export const dotGray = style([dot, { background: vars.color.borderStrong }]);

export const filename = style({
  fontFamily: vars.font.mono,
  fontSize: 11,
  letterSpacing: "0.08em",
  color: vars.color.faint,
});

export const code = style({
  display: "flex",
  flexDirection: "column",
  gap: 2,
  marginTop: vars.space.lg,
  fontFamily: vars.font.mono,
  fontSize: 14,
  lineHeight: 1.7,
  color: vars.color.secondary,
});

export const codeLine = style({
  display: "flex",
  alignItems: "center",
  whiteSpace: "pre",
  minHeight: "1.7em",
});

export const kw = style({ color: vars.color.secondary });
export const plain = style({ color: vars.color.muted });
export const str = style({ color: vars.color.accent });
export const fn = style({ color: vars.color.pink });

export const cursor = style({
  display: "inline-block",
  width: 7,
  height: "0.95em",
  marginLeft: 2,
  background: vars.color.accent,
});
