'use server'

import { Client, APIErrorCode } from '@notionhq/client'

import { Bookmark, Bookmarkly } from '@/interfaces'
import { bookmarksAdapter } from '@/adapters'

type FilterByProperty = 'category' | 'tags'

export interface FilterByProps {
  query: string;
  property: FilterByProperty;
}

interface QueryFilter {
  property: FilterByProperty;
  select?: {
    equals: string;
  };
  multi_select?: {
    contains: string;
  };
}

interface Query {
  database_id: string;
  filter?: {
    or?: QueryFilter[];
    and?: QueryFilter[];
  };
}

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export const getBookmarksAction = async ({ filterBy }: { filterBy?: any } = {}): Promise<Bookmarkly[]> => {
  try {
    const query: Query = { database_id: process.env.BOOKMARKLY_NOTION_DATABASE_ID as string }

    if (Object.keys(filterBy).length) {
      let filter: any = {}

      if (filterBy.category) {
        filter = {
          property: Object.keys(filterBy)[0] as FilterByProperty,
          select: {
            equals: filterBy.category
          }
        }
      }

      if (filterBy.tags) {
        filter = {
          property: Object.keys(filterBy)[0] as FilterByProperty,
          multi_select: {
            contains: filterBy.tags
          }
        }
      }

      query.filter = {
        or: [filter]
      }
    }

    const { results } = await notion.databases.query(query as any)
    return results.map((result) => bookmarksAdapter(result as Bookmark))
  } catch (error: any) {
    if (error.code === APIErrorCode.ObjectNotFound) {
      console.error('The database was not found.')
      return []
    } else {
      console.error(error)
      return []
    }
  }
}
