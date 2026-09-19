import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[calc(100svh-3.5rem)] max-w-5xl flex-col justify-center gap-6 px-6 py-20">
      <Badge variant="secondary" className="w-fit">
        Available for work
      </Badge>

      <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-6xl">
        Hi, I&apos;m {siteConfig.name}.
        <span className="block text-muted-foreground">{siteConfig.role}.</span>
      </h1>

      <p className="max-w-xl text-xl leading-relaxed text-muted-foreground">
        {siteConfig.intro}
      </p>

      <div className="flex flex-wrap gap-3">
        <Link href="#projects" className={buttonVariants({ size: "lg" })}>
          View projects
        </Link>
        <Link
          href="#contact"
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          Get in touch
        </Link>
      </div>
    </section>
  )
}