export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind",
      "Flutter",
      "Dart",
      "Compose",
      "Motion",
      "Vanilla Extract",
      "TanStack",
      "Zod",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "Kotlin / Ktor",
      "Java",
      "PostgreSQL",
      "Exposed ORM",
      "GraphQL",
      "Koin",
      "Spring",
    ],
  },
  {
    label: "Infra & Tools",
    skills: [
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Terraform",
      "Observabilidade",
    ],
  },
];
