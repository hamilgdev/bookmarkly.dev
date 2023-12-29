import { BOOKMARKS_CATEGORIES } from '@/constants/config'
import { Bookmarkly } from '@/interfaces'

export interface BookmarksCountHandlerReturn {
  tags: string[]
  categories: BOOKMARKS_CATEGORIES[]
}

export const bookmarksCountHandler = (bookmarks: Bookmarkly[]): BookmarksCountHandlerReturn => {
  const categories: string[] = []
  let tags: string[] = []

  bookmarks.forEach(bookmark => {
    categories.push(bookmark.category)
    tags = [...tags, ...bookmark.tags]
  })

  return {
    tags: [...new Set(tags)],
    categories: [...new Set(categories)] as BOOKMARKS_CATEGORIES[]
  }
}
