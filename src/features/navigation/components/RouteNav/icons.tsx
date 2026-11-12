import type { ReactNode } from "react";

const common = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  display: "block",
  "aria-hidden": true,
};

const paths: Record<string, ReactNode> = {
  hero: (
    <>
      <path d="M3.5 10.5 12 3.5l8.5 7" />
      <path d="M5.5 9.5V20h13V9.5" />
      <path d="M9.75 20v-5.5h4.5V20" />
    </>
  ),
  sobre: (
    <>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M4.75 19.5a7.25 7.25 0 0 1 14.5 0" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3.25 3.5 7.5 12 11.75 20.5 7.5 12 3.25Z" />
      <path d="m3.5 12 8.5 4.25L20.5 12" />
      <path d="m3.5 16.5 8.5 4.25 8.5-4.25" />
    </>
  ),
  projetos: (
    <path d="M3.5 8.5V6.75A1.75 1.75 0 0 1 5.25 5h3.3l2 2.5h8.2a1.75 1.75 0 0 1 1.75 1.75v8A1.75 1.75 0 0 1 18.75 19H5.25A1.75 1.75 0 0 1 3.5 17.25V8.5Z" />
  ),
  experiencia: (
    <>
      <rect x="3.25" y="7.5" width="17.5" height="12" rx="2.25" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3.25 12.25h17.5" />
    </>
  ),
  contato: (
    <>
      <rect x="3.25" y="5.5" width="17.5" height="13" rx="2.25" />
      <path d="m4 7.25 8 5.25 8-5.25" />
    </>
  ),
};

export function SectionIcon({ id }: { id: string }) {
  return <svg {...common}>{paths[id]}</svg>;
}
