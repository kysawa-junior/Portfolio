"use client";

import { useId } from "react";
import { getTechGlyph } from "./techGlyphs";
import { box, svg } from "./style.css";

export interface TechIconProps {
  name: string;
}

export function TechIcon({ name }: TechIconProps) {
  const glyph = getTechGlyph(name);
  const gradientId = useId().replace(/:/g, "");

  return (
    <span className={box} aria-hidden="true">
      <svg
        className={svg}
        viewBox={glyph.viewBox ?? "0 0 24 24"}
        fill={`#${glyph.hex}`}
      >
        <title>{glyph.title}</title>
        {glyph.gradient ? (
          <defs>
            <linearGradient
              id={gradientId}
              x1={glyph.gradient.x1}
              y1={glyph.gradient.y1}
              x2={glyph.gradient.x2}
              y2={glyph.gradient.y2}
              gradientUnits="userSpaceOnUse"
            >
              {glyph.gradient.stops.map((stop) => (
                <stop
                  key={`${stop.offset}-${stop.color}`}
                  offset={stop.offset}
                  stopColor={stop.color}
                />
              ))}
            </linearGradient>
          </defs>
        ) : null}
        {glyph.paths ? (
          glyph.paths.map((path) => (
            <path
              key={path.d}
              d={path.d}
              fill={
                path.gradient
                  ? `url(#${gradientId})`
                  : path.strokeWidth
                    ? "none"
                    : `#${path.hex ?? glyph.hex}`
              }
              stroke={path.strokeWidth ? `#${path.hex ?? glyph.hex}` : undefined}
              strokeWidth={path.strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))
        ) : (
          <path d={glyph.path} />
        )}
      </svg>
    </span>
  );
}
