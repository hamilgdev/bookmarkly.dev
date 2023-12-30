'use server'

import { Client, APIErrorCode } from '@notionhq/client'
import { revalidatePath } from 'next/cache'
import { Bookmark, Bookmarkly } from '@/interfaces'
import { bookmarksAdapter } from '@/adapters'
import { BOOKMARKS_CATEGORIES, SEARCH_FILTERS } from '@/constants/config'

type FilterByProperty = 'category' | 'tags | name'

export interface FilterByProps {
  filterBy?: {
    category?: BOOKMARKS_CATEGORIES
    tags?: string[]
    name?: string
  }
}

interface QueryFilterByRichText {
  property: FilterByProperty;
  rich_text: {
    contains: string;
  };
}

interface QueryFilterBySelect {
  property: FilterByProperty;
  select: {
    equals: string;
  };
}

interface QueryFilterByMultiSelect {
  property: FilterByProperty;
  multi_select: {
    contains: string;
  };
}

interface Query {
  database_id: string;
  filter?: {
    or?: Array<QueryFilterByRichText | QueryFilterBySelect | QueryFilterByMultiSelect>;
    and?: Array<QueryFilterByRichText | QueryFilterBySelect | QueryFilterByMultiSelect>;
  };
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getBookmarksAction = async ({ filterBy = {} }: FilterByProps): Promise<Bookmarkly[]> => {
  try {
    const query: Query = { database_id: process.env.BOOKMARKLY_NOTION_DATABASE_ID as string }
    if (Object.keys(filterBy).length) {
      const filters = Object.keys(filterBy).map((key) => {
        if (key === SEARCH_FILTERS.CATEGORY) {
          return {
            property: key as FilterByProperty,
            select: {
              equals: filterBy[key]
            }
          }
        }
        if (key === SEARCH_FILTERS.NAME) {
          return {
            property: key as FilterByProperty,
            rich_text: {
              contains: filterBy[key]
            }
          }
        }
        if (key === SEARCH_FILTERS.TAGS) {
          const tags = Array.isArray(filterBy.tags) ? filterBy.tags : [filterBy.tags]
          return tags.map((tag) => ({
            property: key as FilterByProperty,
            multi_select: {
              contains: tag
            }
          }))
        }
        return null
      }).filter(Boolean) as Array<QueryFilterByRichText | QueryFilterBySelect | QueryFilterByMultiSelect>

      query.filter = {
        or: filters.flat()
      }
    }

    const { results } = await notion.databases.query(query as any)
    revalidatePath('/')
    return results.map((result) => bookmarksAdapter(result as Bookmark))
  } catch (error: any) {
    revalidatePath('/')
    if (error.code === APIErrorCode.ObjectNotFound) {
      console.error('The database was not found.')
      return []
    } else {
      console.error(error)
      return []
    }
  }
}
