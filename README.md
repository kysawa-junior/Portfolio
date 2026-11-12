# Portfolio — Kysawa Junior

Portfólio pessoal em Next.js 16 (App Router), React 19 e TypeScript, estilizado
com Vanilla Extract e animado com Motion + Lenis.

## Stack

- **Next.js 16** (App Router, Turbopack) — rotas, layout e metadata em `src/app`
- **React 19 + TypeScript** (strict)
- **Vanilla Extract** — estilos type-safe (`*.css.ts`), tema em `src/styles/theme.css.ts`
- **Motion** — animações de entrada, hover e reveals
- **Lenis** — smooth scroll
- **simple-icons** — glifos de tecnologias

## Arquitetura

Feature-Based + MVVM. Componentes seguem a convenção
`index.tsx` + `style.css.ts` + `viewmodel.ts` + `model.ts`:

```
src/
├── app/          # rotas, layout, providers (integração)
├── features/     # hero, about, stack, projects, experience, contact, navigation
│   ├── components/   # View + ViewModel + estilos da feature
│   ├── model/        # entidades, tipos e dados
│   └── index.ts      # API pública da feature
├── components/   # ui (Button, Chip, Reveal, SectionHeading, TechIcon) e layout (Footer)
├── lib/          # smooth-scroll, paleta compartilhada e conteúdo
└── styles/       # tema, estilos globais e section
```

Regras que valem para todo o código:

- **Server por padrão.** Só marque `"use client"` quando o componente usar
  estado, event handlers, effects ou APIs de browser.
- **Hover/focus sempre via Motion** (`whileHover`, `whileFocus`, `whileTap`).
  Vanilla Extract cuida de layout e cor estática, não de interação animada.
- **Estados de interação compartilhados** em `src/lib/motionStates.ts` e paleta
  literal em `src/styles/theme.css.ts` (Motion interpola valores literais).
- **ViewModels** ficam no próprio componente (`viewmodel.ts`) e são nomeados
  `use[Component]ViewModel`.

## Scripts

```bash
npm run dev        # servidor de desenvolvimento (Turbopack)
npm run build      # build de produção (Turbopack)
npm run start      # servidor de produção
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```
