type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

function getStoredTheme(): Theme | null {
  try {
    const theme = window.localStorage.getItem(THEME_STORAGE_KEY)
    return theme === 'light' || theme === 'dark' ? theme : null
  } catch {
    return null
  }
}

function getSystemTheme(): Theme {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme()
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark')
  document.documentElement.style.colorScheme = theme

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')
  const themeColorValue = getComputedStyle(document.documentElement)
    .getPropertyValue('--theme-color')
    .trim()

  if (themeColorValue) {
    themeColor?.setAttribute('content', themeColorValue)
  }
}

export function setTheme(theme: Theme) {
  applyTheme(theme)

  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    return
  }
}
