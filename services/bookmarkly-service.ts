export const getBookmarkly = async () => {
  const response = await fetch('api/bookmarkly', { cache: 'no-store' })
  return await response.json()
}
