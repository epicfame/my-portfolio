import { Container } from '@/components/ui/Container'
import { TextLink } from '@/components/ui/TextLink'
import { profileData } from '@/data/profile'
import { SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-glass-hairline py-8">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-body-sm text-muted-fg">
          &copy; {new Date().getFullYear()} {profileData.name}
        </p>
        <nav aria-label="Social links">
          <ul className="flex flex-wrap gap-x-6 gap-y-3">
            <li>
              <TextLink href={SOCIAL_LINKS.email}>Email</TextLink>
            </li>
            <li>
              <TextLink external href={SOCIAL_LINKS.linkedin}>
                LinkedIn
              </TextLink>
            </li>
            <li>
              <TextLink external href={SOCIAL_LINKS.github}>
                GitHub
              </TextLink>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  )
}
