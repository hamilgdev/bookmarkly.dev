import { BOOKMARKS_CATEGORIES } from '@/constants/config'
import { categoryColorHandler } from '@/handlers'
import { Bookmarkly } from '@/interfaces'

export const BookmarkCard = ({ bookmark }: { bookmark: Bookmarkly }) => {
  const { name, summary, url, category } = bookmark
  const { background, markerTagBackground } = categoryColorHandler(category as BOOKMARKS_CATEGORIES)
  return (
    <a href={url}
      className="border rounded hover:opacity-80 hover:border-[var(--neutral-default)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      <article
        style={{ backgroundColor: background }}
        className='flex flex-col gap-2 p-4 shadow-l min-h-36 max-h-36 rounded'>
        <header className="flex flex-col gap-4">
          <div className="flex items-center">
            <span
              style={{ backgroundColor: markerTagBackground }}
              className='block size-6 rounded' />
            <small
              style={{
                border: `1px solid ${markerTagBackground}`,
                color: markerTagBackground
              }}
              className='inline-block relative pl-3 pr-2 -left-2 rounded'>{category}</small>
          </div>
          <h3 className="line-clamp-1 text-base text-[var(--neutral-default)] text-pretty">{name}</h3>
        </header>
        <main>
          <p className="line-clamp-2 text-sm text-[var(--neutral-thin)]">{summary}</p>
        </main>
      </article>
    </a>
  )
}
