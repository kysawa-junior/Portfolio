import { palette } from "@/styles/theme.css";

// Estado de foco compartilhado. Motion precisa de literais para interpolar,
// por isso o anel usa a paleta (e não a CSS var do tema).
export const focusRing = {
  outlineColor: palette.accent,
  outlineStyle: "solid",
  outlineWidth: 1,
  outlineOffset: 2,
} as const;

// hover padrão dos itens com borda: borda rosa + texto branco
export const hoverAccent = {
  borderColor: palette.pink,
  color: palette.white,
} as const;
