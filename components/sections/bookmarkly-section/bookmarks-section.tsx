import { BookmarkCard } from '@/components'
import { Bookmarkly } from '@/interfaces'

import { EmptyBookmarksSection } from './empty-bookmarks-section'

export const BookmarksSection = ({ bookmarks }: { bookmarks: Bookmarkly[] }) => {
  return (
    <div className="py-4 md:min-h-[504px] xl:p-4">
      {!bookmarks.length && <EmptyBookmarksSection />}
      {bookmarks && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {bookmarks.map((bookmark) => (
            <BookmarkCard key={bookmark.name} bookmark={bookmark} />
          ))}
        </div>
      )}
    </div>
  )
}
