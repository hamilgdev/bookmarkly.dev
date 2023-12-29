import { BookmarksIcon } from '@/components'

export const Logo = () => {
  return (
    <div className="flex gap-1 items-center">
      <BookmarksIcon />
      <h1 className="font-medium text-lg lg:text-xl">Bookmarkly</h1>
    </div>
  )
}
