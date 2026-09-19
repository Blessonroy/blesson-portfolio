export type Project = {
  title: string
  description: string
  tags: string[]
  image?: string // path inside /public, e.g. "/projects/shop.png"
  liveUrl?: string
  repoUrl?: string
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A short, outcome-focused description. What it does, who it's for, and what made it interesting to build.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/your-username/project-one",
  },
  {
    title: "Project Two",
    description:
      "Another project. Keep it to two sentences so the cards stay a consistent height.",
    tags: ["React", "Node.js", "PostgreSQL"],
    repoUrl: "https://github.com/your-username/project-two",
  },
  {
    title: "Project Three",
    description:
      "Mention a real detail here, such as performance gains, users, or a hard problem you solved.",
    tags: ["Next.js", "Prisma", "shadcn/ui"],
    liveUrl: "https://example.com",
  },
  {
    title: "Project Four",
    description:
      "A smaller side project or experiment. These show range and curiosity.",
    tags: ["TypeScript", "API"],
    repoUrl: "https://github.com/your-username/project-four",
  },
]