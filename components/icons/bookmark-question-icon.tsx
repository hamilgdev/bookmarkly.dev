import { IconsProps } from '@/interfaces'

export const BookmarkQuestionIcon = ({ size = 'md' }: IconsProps) => {
  const sm = size === 'sm' && 'size-4'
  const md = size === 'md' && 'size-6'
  const lg = size === 'lg' && 'size-8'
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`${sm || md || lg}`} width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 19l-3 -2l-6 4v-14a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v4" /><path d="M19 22v.01" /><path d="M19 19a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483" /></svg>
  )
}
