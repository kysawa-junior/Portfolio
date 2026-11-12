import type { Project } from "./types";

export const projects: Project[] = [
  {
    name: "Lienne",
    category: "AI Workspace",
    description:
      "Workspace de IA multiplataforma com terminal integrado e harness próprio. Construído com Kotlin e Compose, utilizando AI SDK interno 100% Kotlin.",
    stack: ["Kotlin", "Compose", "AI SDK"],
  },
  {
    name: "AI SDK",
    category: "AI Infrastructure",
    description:
      "SDK completo para integração de modelos de IA, com interoperabilidade total entre linguagens. Inspirado no Vercel AI SDK e OpenAI Java SDK, escrito inteiramente em Kotlin.",
    stack: ["Kotlin", "Multi-language", "AI"],
  },
  {
    name: "Dorava",
    category: "E-Commerce Platform",
    description:
      "Plataforma de e-commerce multiplataforma. Frontend em React, mobile com Flutter e backend em Spring, unificando TypeScript, Kotlin e Dart.",
    stack: ["TypeScript", "Kotlin", "Dart", "React", "Flutter", "Spring"],
  },
];