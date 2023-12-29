import { BookmarkQuestionIcon } from '@/components'

export const EmptyBookmarksSection = () => {
  return (
    <div className='flex flex-col gap-2 items-center justify-center min-h-80'>
      <div className="flex justify-center">
        <BookmarkQuestionIcon size='lg' />
      </div>
      <div className="flex justify-center">
        <h2 className="text-[var(--neutral-thin)] dark:text-[var(--neutral-delicate)]">
          No bookmarkly found
        </h2>
      </div>

    </div>
  )
}
