import { GlassCard } from '@/components/ui/GlassCard'
import { Section } from '@/components/ui/Section'
import { profileData } from '@/data/profile'

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid gap-4 md:grid-cols-2 lg:auto-rows-fr lg:grid-cols-4">
        <GlassCard className="flex items-center p-6 md:col-span-2 lg:row-span-2 lg:p-8">
          <p className="max-w-prose text-body leading-relaxed text-fg">
            {profileData.summary}
          </p>
        </GlassCard>
        {profileData.metrics.map((metric) => (
          <GlassCard className="p-6" key={metric.label}>
            <dl className="flex h-full flex-col gap-3">
              <dt className="text-body-sm leading-relaxed text-muted-fg">
                {metric.label}
              </dt>
              <dd className="font-mono text-h2 font-bold text-fg">
                {metric.value}
              </dd>
            </dl>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
