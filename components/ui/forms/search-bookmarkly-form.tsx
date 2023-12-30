'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { CloseIcon, SearchIcon } from '@/components'
import { useEffect, useState } from 'react'
import { useSearch } from '@/hooks'
import { SEARCH_FILTERS } from '@/constants/config'

export const SearchBookmarklyForm = () => {
  const { updateSearchParams } = useSearch()
  const router = useRouter()
  const search = useSearchParams().get(SEARCH_FILTERS.NAME)

  const [formData, setFormData] = useState({
    search: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onReset = () => {
    router.push('/')
    setFormData({ search: '' })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { search } = formData
    if (!search.trim()) return
    updateSearchParams({ name: search })
  }

  useEffect(() => {
    if (!search) return
    setFormData({ search })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <form onSubmit={onSubmit}>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon size='sm' />
        </div>
        <input
          type="search"
          id="default-search"
          name="search"
          value={formData.search}
          onChange={onChange}
          onReset={onReset}
          className="block w-full p-4 ps-10 text-sm focus:outline-none text-[var(--neutral-default)] dark:text-[var(--neutral-luminous)] border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)] rounded-lg bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] shadow-sm"
          placeholder="Search your bookmarkly..."
          required
        />
        {formData.search && (
          <button
            type='button'
            onClick={onReset}
            className="absolute end-2.5 bottom-2.5 bg-[var(--ca-default)] hover:bg-[var(--neutral-delicate)] focus:ring-4 focus:outline-none rounded-lg text-sm px-4 p-2 dark:bg-[var(--accent-v800)] dark:hover:dark:bg-[var(--accent-v700)]">
            <CloseIcon size='sm' />
          </button>
        )}
      </div>
    </form>
  )
}
