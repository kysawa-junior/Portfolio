export interface Profile {
  name: string;
  tagline: string;
  avatar: string;
  location: string;
  education: string[];
  experienceYears: string;
  bio: string[];
  email: string;
}

export const profile: Profile = {
  name: "Kysawa Junior",
  tagline: "Disponível para novos projetos",
  avatar: "KJ",
  location: "Garça-SP",
  education: ["Análise e Desenvolvimento de Sistemas", "Administração"],
  experienceYears: "6+ anos de código",
  bio: [
    "Desenvolvedor com 6+ anos criando produtos digitais de ponta a ponta. Comecei no front-end, mergulhei no back-end e hoje desenho sistemas completos — sempre com obsessão por código limpo e experiências rápidas.",
    "Fora do editor, estudo de forma autodidata novas tecnologias, o idioma japonês e temas de história e geopolítica.",
  ],
  email: "oi@kysawa.dev",
};
