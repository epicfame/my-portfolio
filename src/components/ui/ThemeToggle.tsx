import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { getInitialTheme, setTheme as persistTheme } from '@/lib/theme'

export function ThemeToggle() {
  const [theme, setCurrentTheme] = useState(getInitialTheme)
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  function toggleTheme() {
    persistTheme(nextTheme)
    setCurrentTheme(nextTheme)
  }

  return (
    <Button
      aria-label={`Switch to ${nextTheme} theme`}
      aria-pressed={theme === 'dark'}
      className="size-11 px-0"
      onClick={toggleTheme}
      variant="ghost"
    >
      {theme === 'dark' ? (
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.75"
          />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M20.2 15.3A8.5 8.5 0 0 1 8.7 3.8 8.5 8.5 0 1 0 20.2 15.3Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.75"
          />
        </svg>
      )}
    </Button>
  )
}
