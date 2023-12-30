'use client'

import { Bookmarkly } from '@/interfaces'

import { useBookmarkly } from '@/hooks'

import { DescriptionSection } from './description-section'
import { SearchControlSection } from './search-control-section'
import { BookmarksSection } from './bookmarks-section'
import { CategoriesSection } from './categories-section'

export const BookmarklySection = ({ bookmarklies = [] }: { bookmarklies: Bookmarkly[] }) => {
  const { bookmarks, isWorking } = useBookmarkly()
  const { categories = [], tags = [] } = bookmarks || {}

  return (
    <>
      <section className="l-container mt-12 mb-8 lg:my-16">
        <DescriptionSection />
      </section>
      <section className="l-container my-8">
        <SearchControlSection
          isWorking={isWorking}
          totalBookmarks={bookmarklies.length}
          totalCategories={categories.length}
          totalTags={tags.length}
        />
      </section>
      <section className="l-container mb-4">
        <CategoriesSection
          tags={tags}
          categories={categories}
          isWorking={isWorking}
        />
      </section>
      <section className="l-container bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] lg:rounded border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)]">
        <BookmarksSection bookmarks={bookmarklies} />
      </section>
    </>
  )
}
