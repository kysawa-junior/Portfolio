import type Lenis from "lenis";

export function smoothScrollTo(
  target: string | HTMLElement,
  lenis?: Lenis | null,
  offset = 0,
) {
  const el =
    typeof target === "string" ? document.getElementById(target) : target;
  if (!el) return;

  if (lenis) {
    lenis.scrollTo(el, { offset, duration: 1.2 });
    return;
  }

  el.scrollIntoView({ behavior: "smooth" });
}