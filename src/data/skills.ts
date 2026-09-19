import { Monitor, Server, Wrench, type LucideIcon } from "lucide-react"

export type SkillCategory = {
  title: string
  icon: LucideIcon
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "REST APIs", "PostgreSQL", "Prisma", "Auth"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: ["Git", "GitHub", "Vercel", "Docker", "Figma", "VS Code"],
  },
]