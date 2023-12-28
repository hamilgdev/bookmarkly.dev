import { SearchIcon } from '@/components'

export const SearchBookmarklyForm = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <SearchIcon size='sm' />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm focus:outline-none text-[var(--neutral-default)] dark:text-[var(--neutral-luminous)] border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)] rounded-lg bg-[var(--neutral-luminous)] dark:bg-[var(--accent-v900)] shadow-sm"
          placeholder="Search your bookmarkly..."
          required
        />
      </div>
    </form>
  )
}
