import { GlassCard } from '@/components/ui/GlassCard'
import { Section } from '@/components/ui/Section'
import { educationData } from '@/data/education'

export function Education() {
  return (
    <Section id="education" title="Education & Certifications">
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard className="glass-panel-static space-y-6 p-6 sm:p-8">
          <h3 className="text-h3 font-semibold text-fg">Education</h3>
          <ol className="space-y-6">
            {educationData.entries.map((entry) => (
              <li key={entry.institution}>
                <article className="space-y-2">
                  <h4 className="font-semibold text-fg">
                    {entry.institution}
                  </h4>
                  <p className="text-body text-fg">{entry.program}</p>
                  <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
                    {entry.period}
                  </p>
                  {'detail' in entry && entry.detail && (
                    <p className="text-body-sm leading-relaxed text-muted-fg">
                      {entry.detail}
                    </p>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </GlassCard>
        <GlassCard className="glass-panel-static space-y-6 p-6 sm:p-8">
          <h3 className="text-h3 font-semibold text-fg">Certifications</h3>
          <ul className="space-y-6">
            {educationData.certifications.map((certification) => (
              <li key={certification.name}>
                <article className="space-y-2">
                  <h4 className="font-semibold text-fg">
                    {certification.name}
                  </h4>
                  <p className="text-body text-muted-fg">
                    {certification.issuer}
                  </p>
                  <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
                    {certification.year}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="glass-panel-static space-y-6 p-6 sm:p-8 md:col-span-2">
          <h3 className="text-h3 font-semibold text-fg">Languages</h3>
          <dl className="grid gap-4 sm:grid-cols-2">
            {educationData.languages.map((language) => (
              <div className="space-y-2" key={language.name}>
                <dt className="font-semibold text-fg">{language.name}</dt>
                <dd className="text-body text-muted-fg">
                  {language.proficiency}
                </dd>
              </div>
            ))}
          </dl>
        </GlassCard>
      </div>
    </Section>
  )
}
