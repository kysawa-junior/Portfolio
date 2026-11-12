export interface NavigationItem {
  id: string;
  label: string;
}

export const routes: NavigationItem[] = [
  { id: "hero", label: "Home" },
  { id: "sobre", label: "Sobre" },
  { id: "stack", label: "Stack" },
  { id: "projetos", label: "Projetos" },
  { id: "experiencia", label: "Experiência" },
  { id: "contato", label: "Contato" },
];

// ponytail: identidade estável — o scroll spy não re-registra listeners por render
export const routeIds = routes.map((route) => route.id);

export const navOffset = 72;
