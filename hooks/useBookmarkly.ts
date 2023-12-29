import { getBookmarkly } from '@/services'
import { useCallback, useEffect, useState } from 'react'
import { BookmarksCountHandlerReturn } from '@/handlers'

export const useBookmarkly = () => {
  const [bookmarks, setBookmarks] = useState<BookmarksCountHandlerReturn | null>(null)
  const [isWorking, setIsWorking] = useState(true)

  const handleGetBookmarkly = useCallback(async () => {
    try {
      const response = await getBookmarkly()
      const { bookmarkly } = response
      setBookmarks(bookmarkly)
      setIsWorking(false)
    } catch (error) {
      setIsWorking(false)
      console.error(error)
    }
  }, [])

  useEffect(() => {
    handleGetBookmarkly()
  }, [handleGetBookmarkly])

  return {
    isWorking,
    bookmarks
  }
}
