import { Bookmark, Bookmarkly } from '@/interfaces'

export const bookmarksAdapter = (result: Bookmark): Bookmarkly => {
  const { properties } = result as Bookmark
  const { name, url, summary, tags, category } = properties as any
  return {
    name: name.title[0].plain_text,
    url: url.url,
    summary: summary.rich_text[0].plain_text,
    category: category.select.name,
    tags: tags.multi_select.map((tag: any) => tag.name)
  }
}
