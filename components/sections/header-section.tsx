import { Logo, ThemeDropdown } from '@/components'

export const HeaderSection = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center min-h-[54px] bg-[var(--accent)] dark:bg-[var(--accent-v900)] drop-shadow-md border-b border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)]">
      <div className="l-container">
        <div className="flex items-center justify-between">
          <Logo />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  )
}
