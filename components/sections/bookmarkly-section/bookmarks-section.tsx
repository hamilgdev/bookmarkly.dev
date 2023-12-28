import { BookmarkCard } from '@/components'

const BOOKMARKS = [
  {
    title: 'Hoppscotch',
    description: 'API platform for building and using APIs',
    category: 'Web Tools',
    url: 'https://hoppscotch.io/',
    tags: ['API', 'Request']
  },
  {
    title: 'react-beautiful-dnd',
    description: 'The react-beautiful-dnd library uses drag-and-drop',
    category: 'NPM Dependencies',
    url: 'https://www.npmjs.com/package/react-beautiful-dnd',
    tags: ['NPM', 'React', 'Drag and Drop']
  },
  {
    title: 'Tabler Icons',
    description: 'Free and open-source icons designed to make your website or app attractive, visually consistent, and simply beautiful',
    category: 'Icons',
    url: 'https://tabler.io/icons',
    tags: ['Design', 'NPM']
  },
  {
    title: 'OKLCH Color Picker & Converter',
    description: 'OKLCH Color Picker & Converter',
    category: 'Colors',
    url: 'https://oklch.com/',
    tags: ['Design', 'Converter', 'Color Picker']
  },
  {
    title: 'Quicktype',
    description: 'Convert JSON into gorgeous, typesafe code in any language',
    category: 'Play Grounds',
    url: 'https://quicktype.io/',
    tags: ['Generator', 'TypeScript', 'Converter']
  },
  {
    title: 'Flowbite',
    description: 'Build websites even faster with components on top of Tailwind CSS',
    category: 'UI Builders',
    url: 'https://flowbite.com/',
    tags: ['Generator', 'TypeScript', 'Converter']
  },
  {
    title: 'Tailwind components',
    description: 'Open source Tailwind UI components and templates tobootstrap your new apps, projects or landing sites!',
    category: 'UI Builders',
    url: 'https://tailwindcomponents.com/',
    tags: ['Design', 'Tailwind']
  },
  {
    title: 'Icons8',
    description: 'Icons, illustrations, photos, music, and design tools',
    category: 'Vectors',
    url: 'https://icons8.com/',
    tags: ['Illustration', 'SVG', 'Design']
  },
  {
    title: 'Google Fonts',
    description: 'Amazing collection of free fonts by Google',
    category: 'Fonts',
    url: 'https://fonts.google.com/',
    tags: ['Collection', 'Typography']
  }
]

export const BookmarksSection = () => {
  return (
    <div className="py-4 xl:p-4">

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {BOOKMARKS.map((bookmark, index) => (
          <BookmarkCard key={index} bookmark={bookmark} />
        ))}
      </div>
    </div>
  )
}
