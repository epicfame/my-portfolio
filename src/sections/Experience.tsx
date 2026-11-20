import { GlassCard } from '@/components/ui/GlassCard'
import { Section } from '@/components/ui/Section'
import { experienceData } from '@/data/experience'

export function Experience() {
  return (
    <Section
      eyebrow={experienceData.company}
      id="experience"
      title="Experience"
    >
      <ol className="space-y-6 border-s-2 border-glass-border ps-6">
        {experienceData.positions.map((position) => (
          <li className="relative" key={position.id}>
            <span
              aria-hidden="true"
              className="absolute -start-8 top-8 size-3 rounded-sm border border-glass-border bg-primary"
            />
            <GlassCard className="p-6 sm:p-8">
              <header className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-h3 font-semibold text-fg">
                  {position.title}
                </h3>
                <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
                  {position.period}
                </p>
              </header>
              <ul className="list-disc space-y-2 ps-6 text-body leading-relaxed text-fg marker:text-primary">
                {position.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </GlassCard>
          </li>
        ))}
      </ol>
    </Section>
  )
}
