import { Logo, ThemeDropdown } from '@/components'

export const HeaderSection = () => {
  return (
    <header className="flex items-center min-h-[54px]">
      <div className="l-container">
        <div className="flex items-center justify-between">
          <Logo />
          <ThemeDropdown />
        </div>
      </div>
    </header>
  )
}
