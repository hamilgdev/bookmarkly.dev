import { SearchBookmarklyForm } from '@/components'

export const SearchControlSection = () => {
  return (
    <div className="md:max-w-xl mx-auto">
      <SearchBookmarklyForm />
      <div className="flex justify-center lg:justify-start gap-4 mt-2">
        <div className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
          <small>180 bookmarks</small>
        </div>
        <div className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
          <small>8 Categories</small>
        </div>
        <div className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
          <small>34 Tags</small>
        </div>
      </div>
    </div>
  )
}
