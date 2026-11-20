import { ButtonLink } from '@/components/ui/ButtonLink'
import { GlassCard } from '@/components/ui/GlassCard'
import { Section } from '@/components/ui/Section'
import { TextLink } from '@/components/ui/TextLink'
import { profileData } from '@/data/profile'
import { CV_URL } from '@/lib/constants'
import { ContactForm } from './ContactForm'

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid gap-4 md:grid-cols-2">
        <GlassCard className="flex flex-col gap-6 p-6 sm:p-8">
          <div className="space-y-2">
            <h3 className="text-h3 font-semibold text-fg">Get in touch</h3>
            <p className="text-body leading-relaxed text-muted-fg">
              Submitting the form opens your email app so you can review and
              send your message.
            </p>
          </div>
          <ul aria-label="Contact and profile links" className="space-y-3">
            {profileData.links.map((link) => (
              <li key={link.label}>
                <TextLink
                  external={'external' in link && link.external}
                  href={link.href}
                >
                  {link.label === 'Email' ? profileData.email : link.label}
                </TextLink>
              </li>
            ))}
          </ul>
          <ButtonLink className="w-fit" download href={CV_URL} variant="secondary">
            Download CV
          </ButtonLink>
        </GlassCard>
        <ContactForm />
      </div>
    </Section>
  )
}
