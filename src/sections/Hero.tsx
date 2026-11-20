import profilePicture from '@/assets/images/profile-picture.webp'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Container } from '@/components/ui/Container'
import { GlassCard } from '@/components/ui/GlassCard'
import { TextLink } from '@/components/ui/TextLink'
import { CV_URL } from '@/lib/constants'
import { profileData } from '@/data/profile'

export function Hero() {
  return (
    <section
      aria-labelledby="home-heading"
      className="scroll-mt-24 py-16 sm:py-20"
      id="home"
      tabIndex={-1}
    >
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-6">
            <p className="font-mono text-label uppercase tracking-wider text-muted-fg">
              {profileData.role}
            </p>
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold text-fg sm:text-h1"
                id="home-heading"
              >
                {profileData.name}
              </h1>
              <p className="max-w-prose text-h3 font-semibold text-fg">
                {profileData.tagline}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#projects">View Projects</ButtonLink>
              <ButtonLink download href={CV_URL} variant="secondary">
                Download CV
              </ButtonLink>
              <ButtonLink href="#contact" variant="ghost">
                Contact
              </ButtonLink>
            </div>
            <ul aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-3">
              {profileData.links.map((link) => (
                <li key={link.label}>
                  <TextLink
                    external={'external' in link && link.external}
                    href={link.href}
                  >
                    {link.label}
                  </TextLink>
                </li>
              ))}
            </ul>
          </div>
          <GlassCard className="mx-auto w-full max-w-sm p-2 md:ml-auto">
            <img
              alt={`Portrait of ${profileData.name}`}
              className="aspect-square w-full rounded-md object-cover"
              decoding="async"
              fetchPriority="high"
              height={800}
              src={profilePicture}
              width={800}
            />
          </GlassCard>
        </div>
      </Container>
    </section>
  )
}
