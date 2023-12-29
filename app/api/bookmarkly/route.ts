
import { Client } from '@notionhq/client'
import { NextResponse } from 'next/server'

import { bookmarksAdapter } from '@/adapters'
import { bookmarksCountHandler } from '@/handlers'
import { Bookmark } from '@/interfaces'

const notion = new Client({
  auth: process.env.NOTION_TOKEN
})

export async function GET() {
  try {
    const query = { database_id: process.env.BOOKMARKLY_NOTION_DATABASE_ID as string }
    const { results } = await notion.databases.query(query as any)
    const bookmarks = results.map((result) => bookmarksAdapter(result as Bookmark))
    return NextResponse.json({ bookmarkly: bookmarksCountHandler(bookmarks) })
  } catch (error) {
    return NextResponse.json({ message: (error as any).message }, { status: 400 })
  }
}
