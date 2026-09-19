import { SectionHeading } from "@/components/section-heading"
import { about } from "@/data/about"

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <SectionHeading title="About me" />

      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div className="flex flex-col gap-4 text-lg leading-relaxed text-muted-foreground">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="flex flex-col gap-5 border-l pl-6">
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-1 text-lg">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}