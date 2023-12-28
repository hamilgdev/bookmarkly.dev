import { DescriptionSection } from './description-section'
import { SearchControlSection } from './search-control-section'
import { BookmarksSection } from './bookmarks-section'
import { CategoriesSection } from './categories-section'

export const BookmarklySection = () => {
  return (
    <>
      <section className="l-container mt-12 mb-8 lg:my-16">
        <DescriptionSection />
      </section>
      <section className="l-container my-8">
        <SearchControlSection />
      </section>
      <section className="l-container mb-4">
        <CategoriesSection />
      </section>
      <section className="l-container bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] lg:rounded border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)]">
        <BookmarksSection />
      </section>
    </>
  )
}
