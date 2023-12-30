'use client'

import { Dispatch, SetStateAction } from 'react'
import { CloseIcon, IconButton } from '@/components'

interface BasicDrawerProps {
  isOpen: boolean
  onClose: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode
}

export const BasicDrawer = ({
  children,
  isOpen,
  onClose
}: BasicDrawerProps) => {
  return (
    <>
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-80 p-4 overflow-y-auto transition-transform bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] border border-[var(--neutral-delicate)] dark:border-[var(--accent-v800)] ${isOpen ? 'transform-none' : 'translate-x-full'}`}
        aria-labelledby="drawer-right-label">

        <div className="absolute top-2.5 right-2.5 inline-flex items-center justify-center">
          <IconButton
            icon={<CloseIcon size='sm' />}
            onClick={() => onClose(false)}
            arialLabel='Close menu'
          />
        </div>

        <div className='py-8'>
          {children}
        </div>
      </aside>

      {isOpen && (<div onClick={() => onClose(false)} className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40" />)}
    </>

  )
}
