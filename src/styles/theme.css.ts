import { createGlobalTheme } from "@vanilla-extract/css";

// ponytail: Motion interpola valores literais — CSS var não serve para whileHover.
// Fonte única: estas cores alimentam o tema e os estados de interação do Motion.
export const palette = {
  accent: "#4CC9F0", // ciano puxado para o azul
  pink: "#FF5C9A", // rosa
  white: "#FFFFFF", // branco
  ink: "#03070B", // quase preto — texto sobre cor viva
  muted: "#A5AAB4", // cinza
  surfaceAlt: "#101319", // cinza-azulado quase preto
} as const;

// Fundo preto absoluto. Accents em ciano→azul e rosa, texto em branco e cinza.
export const vars = createGlobalTheme(":root", {
  color: {
    bg: "#000000",
    surface: "#0A0B0F",
    surfaceAlt: palette.surfaceAlt,
    card: "#0A0B0F",
    border: "#22252D",
    borderStrong: "#353A46",
    borderSubtle: "#15171C",
    accent: palette.accent,
    accentDim: "#6FB3CC",
    accentInk: palette.ink,
    pink: palette.pink,
    pinkDim: "#B03D6C",
    primary: palette.white,
    secondary: "#E8EAEF",
    muted: palette.muted,
    faint: "#7A808C",
    success: palette.accent,
    white: palette.white,
  },
  font: {
    display: "var(--font-fraunces), Georgia, 'Times New Roman', serif",
    body: "var(--font-space-grotesk), system-ui, -apple-system, sans-serif",
    mono: "var(--font-mono), ui-monospace, SFMono-Regular, monospace",
  },
  size: {
    navHeight: "76px",
    radiusSm: "2px",
    radiusMd: "2px",
    radiusFull: "999px",
  },
  space: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
    xxxl: "72px",
    section: "128px",
    sectionMobile: "80px",
  },
});

export const breakpoints = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
};
