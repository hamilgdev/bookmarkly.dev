import { determineCategoryColorHandler } from '@/handlers'

export const BookmarkCard = ({ bookmark }: {bookmark: any}) => {
  const { title, description, url, category } = bookmark

  const { background, markerTagBackground } = determineCategoryColorHandler(category)

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
          <div
            style={{ backgroundColor: markerTagBackground }}
            className='size-6 rounded' />
          <h3 className="line-clamp-1 text-base text-[var(--neutral-default)] text-pretty">{title}</h3>
        </header>
        <main>
          <p className="line-clamp-2 text-sm text-[var(--neutral-thin)]">{description}</p>
        </main>
      </article>
    </a>
  )
}
