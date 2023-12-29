import { IconsProps } from '@/interfaces'

export const BookmarksIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'size-4'
  const md = size === 'md' && 'size-6'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${sm || md}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 6a4 4 0 0 1 4 4v11a1 1 0 0 1 -1.514 .857l-4.486 -2.691l-4.486 2.691a1 1 0 0 1 -1.508 -.743l-.006 -.114v-11a4 4 0 0 1 4 -4h4z" strokeWidth="0" fill="currentColor" /><path d="M16 2a4 4 0 0 1 4 4v11a1 1 0 0 1 -2 0v-11a2 2 0 0 0 -2 -2h-5a1 1 0 0 1 0 -2h5z" strokeWidth="0" fill="currentColor" /></svg>
  )
}
