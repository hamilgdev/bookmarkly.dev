/* eslint-disable indent */
import { BOOKMARKS_CATEGORIES } from '@/constants/config'

interface CategoryColorHandlerReturn {
  background: string
  markerTagBackground: string
}

export const categoryColorHandler = (category: BOOKMARKS_CATEGORIES): CategoryColorHandlerReturn => {
  let background = ''
  let markerTagBackground = ''

  switch (category) {
    case BOOKMARKS_CATEGORIES.ICONS:
      background = 'var(--ca-blue-v50)'
      markerTagBackground = 'var(--ca-blue-v700)'
      break
    case BOOKMARKS_CATEGORIES.WEB_TOOLS:
      background = 'var(--ca-emerald-v50)'
      markerTagBackground = 'var(--ca-emerald-v700)'
      break
    case BOOKMARKS_CATEGORIES.NPM_DEPENDENCIES:
      background = 'var(--ca-yellow-v50)'
      markerTagBackground = 'var(--ca-yellow-v700)'
      break
    case BOOKMARKS_CATEGORIES.COLORS:
      background = 'var(--ca-pink-v50)'
      markerTagBackground = 'var(--ca-pink-v700)'
      break
    case BOOKMARKS_CATEGORIES.PLAY_GROUNDS:
      background = 'var(--ca-green-v50)'
      markerTagBackground = 'var(--ca-green-v700)'
      break
    case BOOKMARKS_CATEGORIES.UI_BUILDERS:
      background = 'var(--ca-red-v50)'
      markerTagBackground = 'var(--ca-red-v700)'
      break
    case BOOKMARKS_CATEGORIES.VECTORS:
      background = 'var(--ca-orange-v50)'
      markerTagBackground = 'var(--ca-orange-v700)'
      break
    case BOOKMARKS_CATEGORIES.FONTS:
      background = 'var(--ca-stone-v50)'
      markerTagBackground = 'var(--ca-stone-v700)'
      break
    case BOOKMARKS_CATEGORIES.FREE_STOCK:
      background = 'var(--ca-fuchsia-v50)'
      markerTagBackground = 'var(--ca-fuchsia-v700)'
      break
    default:
      background = 'var(--ca-default)'
      markerTagBackground = 'var(--neutral-thin)'
      break
  }

  return { background, markerTagBackground }
}
