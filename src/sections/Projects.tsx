import { Chip } from '@/components/ui/Chip'
import { GlassCard } from '@/components/ui/GlassCard'
import { Section } from '@/components/ui/Section'
import { TextLink } from '@/components/ui/TextLink'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li className="h-full" key={project.name}>
            <GlassCard className="glass-panel-static h-full p-6 sm:p-8">
              <article className="flex h-full flex-col gap-6">
                <div className="space-y-4">
                  <header className="space-y-2">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="text-h3 font-semibold text-fg">
                        {project.name}
                      </h3>
                      <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
                        {project.period}
                      </p>
                    </div>
                    <p className="font-medium text-fg">{project.role}</p>
                  </header>
                  <p className="text-body leading-relaxed text-muted-fg">
                    {project.description}
                  </p>
                </div>
                {'highlights' in project && project.highlights.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-fg">Highlights</h4>
                    <ul className="list-disc space-y-2 ps-6 text-body leading-relaxed text-fg marker:text-primary">
                      {project.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <ul
                  aria-label={`${project.name} technology stack`}
                  className="flex flex-wrap gap-2"
                >
                  {project.stack.map((technology) => (
                    <li key={technology}>
                      <Chip>{technology}</Chip>
                    </li>
                  ))}
                </ul>
                <TextLink
                  aria-label={`Visit ${project.name} (opens in a new tab)`}
                  className="mt-auto w-fit"
                  external
                  href={project.href}
                >
                  Visit {project.name}
                </TextLink>
              </article>
            </GlassCard>
          </li>
        ))}
      </ul>
    </Section>
  )
}
