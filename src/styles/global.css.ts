import { globalStyle } from "@vanilla-extract/css";
import { vars } from "./theme.css";

globalStyle("*, *::before, *::after", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  scrollBehavior: "auto",
  WebkitTextSizeAdjust: "100%",
});

globalStyle("html, body", {
  height: "auto",
});

globalStyle("body", {
  background: vars.color.bg,
  color: vars.color.secondary,
  fontFamily: vars.font.body,
  fontSize: 16,
  lineHeight: 1.5,
  WebkitFontSmoothing: "antialiased",
  textRendering: "optimizeLegibility",
  overflowX: "hidden",
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("button", {
  font: "inherit",
  border: "none",
  background: "none",
  color: "inherit",
  cursor: "pointer",
});

globalStyle("::selection", {
  background: vars.color.accent,
  color: vars.color.accentInk,
});

globalStyle("::-webkit-scrollbar", {
  width: "10px",
});

globalStyle("::-webkit-scrollbar-track", {
  background: vars.color.bg,
});

globalStyle("::-webkit-scrollbar-thumb", {
  background: vars.color.border,
});

globalStyle("html.lenis, html.lenis body", {
  height: "auto",
});

globalStyle(".lenis.lenis-smooth", {
  scrollBehavior: "auto !important" as "auto",
});

globalStyle(".lenis.lenis-smooth [data-lenis-prevent]", {
  overscrollBehavior: "contain",
});

globalStyle(".lenis.lenis-stopped", {
  overflow: "hidden",
});

globalStyle("section", {
  scrollMarginTop: vars.size.navHeight,
});

globalStyle("h1, h2, h3, h4", {
  color: vars.color.primary,
  fontFamily: vars.font.display,
  fontWeight: 600,
  lineHeight: 1.05,
  letterSpacing: "-0.01em",
});

globalStyle("*", {
  "@media": {
    "(prefers-reduced-motion: reduce)": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important" as "auto",
    },
  },
});

// Sem JavaScript o Motion nunca roda o whileInView: o conteúdo ficaria
// invisível. Com scripting: none, reveal volta ao estado final.
globalStyle("[data-reveal]", {
  "@media": {
    "(scripting: none)": {
      opacity: "1 !important" as "1",
      transform: "none !important" as "none",
    },
  },
});
