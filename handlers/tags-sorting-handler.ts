type GroupedTags<T> = {
  [key: string]: T[];
};

export const tagsSortingHandler = (tags: string[]) => {
  const groupedTags: GroupedTags<string> = {}

  tags.forEach(tag => {
    const initialLetter = tag[0].toUpperCase()
    if (!groupedTags[initialLetter]) {
      groupedTags[initialLetter] = []
    }
    groupedTags[initialLetter].push(tag)
  })

  // Obtener las claves (letras iniciales) y ordenarlas alfabéticamente
  const sortedKeys = Object.keys(groupedTags).sort()

  // Crear un nuevo objeto ordenado
  const orderedGroupedTags: GroupedTags<string> = {}
  sortedKeys.forEach(key => {
    orderedGroupedTags[key] = groupedTags[key]
  })

  return { orderedGroupedTags }
}
