export function SectionHeading({
  title,
  subtitle,
}: {
  title: string
  subtitle?: string
}) {
  return (
    <div className="mb-10 flex flex-col gap-2">
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-lg text-muted-foreground">{subtitle}</p>
      )}
    </div>
  )
}