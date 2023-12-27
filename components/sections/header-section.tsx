import { ThemeDropdown } from '@/components'

export const HeaderSection = () => {
  return (
    <header className="flex items-center min-h-[54px] bg-[var(--accent)] dark:bg-[var(--accent-v900)]">

      <div className="l-container">
        <div className="flex items-center justify-between">
          <h1 className="text-">Bookmarkly</h1>

          <div className="">
            <ThemeDropdown />
          </div>
        </div>

      </div>

    </header>
  )
}