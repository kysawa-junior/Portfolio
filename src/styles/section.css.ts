import { style } from "@vanilla-extract/css";
import { vars, breakpoints } from "./theme.css";

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
});
