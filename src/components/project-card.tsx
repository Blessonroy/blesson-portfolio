import Image from "next/image"
import { ArrowUpRight, Code } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/data/projects"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden pt-0 transition-shadow hover:shadow-lg">
      {/* Screenshot, or a placeholder if none is provided */}
      <div className="relative aspect-video w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex size-full items-center justify-center font-heading text-5xl font-bold text-muted-foreground/40">
            {project.title.charAt(0)}
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="font-heading text-lg">{project.title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardContent>

      {(project.liveUrl || project.repoUrl) && (
        <CardFooter className="mt-auto gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm" })}
            >
              Live demo <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ size: "sm", variant: "outline" })}
            >
              <Code className="size-4" /> Source
            </a>
          )}
        </CardFooter>
      )}
    </Card>
  )
}