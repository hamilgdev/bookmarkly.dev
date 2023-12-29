import { getBookmarksAction } from '@/actions'
import { BookmarklySection } from '@/components'

interface HomePageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function HomePage ({ searchParams }: HomePageProps) {
  const bookmarks = await getBookmarksAction({ filterBy: searchParams })
  return <BookmarklySection bookmarklies={bookmarks} />
}
