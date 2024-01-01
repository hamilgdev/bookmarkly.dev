/* eslint-disable no-unused-vars */
export enum BOOKMARKS_CATEGORIES {
  ICONS = 'Icons',
  WEB_TOOLS = 'Web Tools',
  NPM_DEPENDENCIES = 'NPM Dependencies',
  COLORS = 'Colors',
  PLAY_GROUNDS = 'Play Grounds',
  UI_BUILDERS = 'UI Builders',
  VECTORS = 'Vectors',
  FONTS = 'Fonts',
  FREE_STOCK = 'Free Stock',
  UNCATEGORIZED = 'Uncategorized',
}

export enum SEARCH_FILTERS {
  CATEGORY = 'category',
  TAGS = 'tags',
  NAME = 'name',
}

export const SUPPORTED_BOOKMARKS_CATEGORIES = Object.values(BOOKMARKS_CATEGORIES)
