import { BOOKMARKS_CATEGORIES, SEARCH_FILTERS } from '@/constants/config'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'

interface SearchParams {
  tags?: string[];
  [key: string]: string | string[] | BOOKMARKS_CATEGORIES | undefined;
}

export const useSearch = () => {
  const router = useRouter()

  const updateSearchParams = useCallback((params: SearchParams) => {
    let queryParams = ''

    if (params.tags) queryParams = params.tags.map((tag: string) => `${SEARCH_FILTERS.TAGS}=${tag}`).join('&')
    else queryParams = Object.keys(params).map((key) => `${key}=${params[key]}`).join('&')

    router.push(`/?${queryParams}`)
  }, [router])

  return { updateSearchParams }
}
