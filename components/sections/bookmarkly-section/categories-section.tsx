'use client'

import { useRouter } from 'next/navigation'

import { FilterIcon, MinimalButton, TagLoading, TagsIcon } from '@/components'
import { BOOKMARKS_CATEGORIES } from '@/constants/config'
import { categoryColorHandler } from '@/handlers'

interface CategoriesSectionProps {
  categories: BOOKMARKS_CATEGORIES[]
  isWorking: boolean
}

export const CategoriesSection = ({ categories, isWorking }: CategoriesSectionProps) => {
  const router = useRouter()

  const handleFilterBy = async (category: string) => {
    if (!category.trim()) return
    if (category === 'All Categories') return router.push('/')
    router.push(`/?category=${category}`)
  }

  return (
    <>
      <div className="flex justify-between">
        <div className="flex w-fit items-center p-2 gap-2 bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)] rounded-t">
          <FilterIcon />
          <h3 className="text-base text-[var(--neutral-default)] dark:text-[var(--neutral-luminous)]">Categories</h3>
        </div>
        <div className="">
          <MinimalButton text='Filter by Tags' icon={<TagsIcon />} />
        </div>
      </div>
      <div
        role="group"
        className="flex gap-2 min-h-14 rounded-r rounded-bl shadow-sm p-2 overflow-x-auto bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)]"
      >
        {isWorking && <TagLoading />}
        {!isWorking && (
          <>
            <button
              onClick={() => handleFilterBy('All Categories')}
              type="button"
              className="px-2 py-2 min-w-fit text-sm font-medium rounded border text-[var(--neutral-default)] bg-[var(--ca-default)] dark:bg-[var(--ca-default)] hover:opacity-80 hover:border-[var(--neutral-default)] focus:ring-2 focus:ring-[var(--neutral-default)] focus:text-[var(--neutral-default)] dark:hover:border-blue-500 dark:focus:ring-blue-500">
           All Categories
            </button>

            {categories.map((category) => {
              const { background, markerTagBackground } = categoryColorHandler(category)
              return (
                <button
                  key={category}
                  style={{ backgroundColor: background, color: markerTagBackground }}
                  onClick={() => handleFilterBy(category)}
                  type="button"
                  className="px-2 py-2 min-w-fit text-sm font-medium rounded border text-[var(--neutral-default)] hover:opacity-80 hover:border-[var(--neutral-default)] focus:ring-2 focus:ring-[var(--neutral-default)] focus:text-[var(--neutral-default)] dark:hover:border-blue-500 dark:focus:ring-blue-500">
                  {category}
                </button>
              )
            })}
          </>
        )}
      </div>
    </>
  )
}
