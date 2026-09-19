export const siteConfig = {
  name: "Blesson Roy",
  role: "Full-Stack Developer",
  title: "Blesson Roy | Full-Stack Developer",
  description: "Portfolio of Blesson Roy, a developer building fast, accessible web apps.",
  intro:
    "I build clean, performant web applications with Next.js and TypeScript, with a focus on thoughtful design and solid engineering.",
  nav: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
  email: "you@example.com",
socials: [
  { label: "GitHub", href: "https://github.com/your-username" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-username" },
  
],
url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
keywords: ["Full-Stack Developer", "Next.js", "React", "TypeScript", "Portfolio"],
}