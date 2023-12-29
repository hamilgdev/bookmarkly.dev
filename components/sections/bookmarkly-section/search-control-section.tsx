import { SearchBookmarklyForm, TagLoading } from '@/components'

interface SearchControlSectionProps {
  isWorking: boolean
  totalBookmarks: number
  totalCategories: number
  totalTags: number
}

export const SearchControlSection = ({
  totalBookmarks,
  totalCategories,
  totalTags,
  isWorking
}:SearchControlSectionProps) => {
  return (
    <div className="md:max-w-xl mx-auto">
      <SearchBookmarklyForm />

      <div className="flex justify-center min-h-[26px] lg:justify-start gap-4 mt-2">
        {isWorking && <TagLoading />}
        {!isWorking && (
          <>
            <div className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
              <small>{totalBookmarks} bookmarks</small>
            </div>
            <div className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
              <small>{totalCategories} Categories</small>
            </div>
            <div className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
              <small>{totalTags} Tags</small>
            </div>
          </>
        )}

      </div>
    </div>
  )
}
