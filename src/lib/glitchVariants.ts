export const glitchSliceA = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.9, 0.7, 0.85, 0],
    x: [0, -4, 3, -2, 0],
    y: [0, 2, -2, 1, 0],
    clipPath: [
      "inset(0 0 100% 0)",
      "inset(8% 0 58% 0)",
      "inset(44% 0 30% 0)",
      "inset(68% 0 8% 0)",
      "inset(0 0 100% 0)",
    ],
    transition: { duration: 0.5, repeat: Infinity, ease: "linear" as const },
  },
};

export const glitchSliceB = {
  rest: { opacity: 0 },
  hover: {
    opacity: [0, 0.85, 0.7, 0.85, 0],
    x: [0, 4, -3, 2, 0],
    y: [0, -3, 2, -1, 0],
    clipPath: [
      "inset(0 0 100% 0)",
      "inset(12% 0 64% 0)",
      "inset(48% 0 26% 0)",
      "inset(74% 0 4% 0)",
      "inset(0 0 100% 0)",
    ],
    transition: { duration: 0.5, repeat: Infinity, ease: "linear" as const },
  },
};
