'use client'

import { useRouter } from 'next/navigation'
import { Dispatch, SetStateAction, useState } from 'react'
import { BasicBadge, BasicDrawer, MinimalButton } from '@/components'
import { tagsSortingHandler } from '@/handlers'
import { useSearch } from '@/hooks'

interface TagsDrawerNavigationProps {
  tags: string[];
  isOpen: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}

export const TagsDrawerNavigation = ({ onClose, isOpen, tags }: TagsDrawerNavigationProps) => {
  const router = useRouter()
  const { orderedGroupedTags } = tagsSortingHandler(tags)
  const { updateSearchParams } = useSearch()

  const [tagsSelected, setTagsSelected] = useState<string[]>([])

  const handleTagsFilter = (tag: string) => {
    let newTagsSelected

    if (tagsSelected.includes(tag)) newTagsSelected = tagsSelected.filter((tagSelected) => tagSelected !== tag)
    else newTagsSelected = [...tagsSelected, tag]

    setTagsSelected(newTagsSelected)
    updateSearchParams({ tags: newTagsSelected })
  }

  const handleClearTags = () => {
    router.push('/')
    setTagsSelected([])
  }

  return (
    <BasicDrawer isOpen={isOpen} onClose={onClose} >
      <div className="sticky top-[-16px] pb-8 z-10 bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)]">
        <div className="py-4">
          <h2 className="text-2xl">Filter by tags</h2>
          <p className="">Select tags to filter</p>
        </div>

        <div className="p-4 rounded bg-[var(--neutral-delicate)] dark:bg-[var(--accent-v800)]">
          <div className="flex gap-2 items-center justify-between">
            <span>{tagsSelected.length} tags selected</span>
            <MinimalButton text='Clear'
              onClick={handleClearTags}
              disabled={tagsSelected.length === 0}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {Object.entries(orderedGroupedTags).map(([letter, tags]) => (
          <div key={letter} className="mb-4">
            <h3 className="text-lg mb-2 border-b border-[var(--neutral-delicate)] dark:border-[var(--accent-v800)]">{letter}</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <BasicBadge
                  key={tag}
                  text={tag}
                  isActivated={tagsSelected.includes(tag)}
                  onClick={() => handleTagsFilter(tag)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </BasicDrawer>
  )
}
