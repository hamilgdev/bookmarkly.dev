'use client'

import { useTheme } from 'next-themes'

import { MoonIcon, SunIcon } from '@/components/icons'
import { useState } from 'react'

export const ThemeDropdown = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  const { setTheme, theme } = useTheme()

  const handleToggleMenu = () => setToggleMenu(!toggleMenu)

  const handleToggleTheme = (theme: string) => {
    setTheme(theme)
    setToggleMenu(false)
  }

  return (
    <>
      <div className="relative">
        <button
          data-dropdown-toggle="dropdown"
          className={`${toggleMenu ? 'bg-[var(--accent-v50)] dark:bg-[var(--accent-v700)]' : 'bg-transparent'} inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)] hover:bg-[var(--accent-v50)] dark:hover:bg-[var(--accent-v700)] h-9 py-2 w-9 px-0`}
          type="button"
          onClick={handleToggleMenu}
        >
          { theme && theme === 'dark' ? <MoonIcon /> : <SunIcon /> }
        </button>

        <ul className={`${toggleMenu ? 'block' : 'hidden'} divide-y divide-[var(--neutral-delicate)] dark:divide-[var(--accent-v700)] absolute z-50 top-full right-0 bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] rounded-lg ring-1 ring-[var(--neutral-delicate)] dark:ring-[var(--accent-v700)] shadow-lg overflow-hidden w-36 py-1 text-sm text-[var(--neutral-default)] dark:text-[var(--neutral-luminous)] font-semibold dark:ring-0 dark:highlight-white/5 mt-4`}>
          <li
            onClick={() => handleToggleTheme('light')}
            className="py-1 px-2 flex items-center cursor-pointer gap-2 hover:bg-[var(--neutral-delicate)] dark:hover:bg-[var(--accent-v700)] dark:hover:text-[var(--neutral-luminous)]">
            <SunIcon size='md' />
            <span className=''>Light</span>
          </li>
          <li
            onClick={() => handleToggleTheme('dark')}
            className="py-1 px-2 flex items-center cursor-pointer gap-2 hover:bg-[var(--neutral-delicate)] dark:hover:bg-[var(--accent-v700)] dark:hover:text-[var(--neutral-luminous)]">
            <MoonIcon size='md' />
            <span className=''>Dark</span>
          </li>
        </ul>
      </div>
      {toggleMenu && (<div onClick={() => setToggleMenu(false)} className="bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30" />)}
    </>
  )
}
