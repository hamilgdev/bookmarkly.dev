export const getBookmarkly = async () => {
  const response = await fetch('api/bookmarkly')
  return await response.json()
}
