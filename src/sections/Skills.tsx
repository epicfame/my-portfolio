import { Chip } from '@/components/ui/Chip'
import { GlassCard } from '@/components/ui/GlassCard'
import { Section } from '@/components/ui/Section'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => {
          const headingId = `${group.category.toLowerCase()}-skills-heading`

          return (
            <GlassCard
              className="glass-panel-static flex h-full min-h-48 flex-col gap-4 p-6"
              key={group.category}
            >
              <h3
                className="text-h3 font-semibold text-fg"
                id={headingId}
              >
                {group.category}
              </h3>
              <ul
                aria-labelledby={headingId}
                className="flex flex-wrap gap-2"
              >
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <Chip>{skill}</Chip>
                  </li>
                ))}
              </ul>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
