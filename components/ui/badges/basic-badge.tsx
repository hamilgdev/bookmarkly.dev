interface BasicBadgeProps {
  text: string
  isActivated?: boolean
  onClick?: () => void
}

export const BasicBadge = ({ text, isActivated, onClick }: BasicBadgeProps) => {
  return (
    <div
      onClick={onClick && onClick}
      className={`${isActivated ? 'bg-[var(--neutral-default)] text-[var(--neutral-luminous)]' : 'bg-[var(--ca-default)] dark:bg-[var(--ca-default)] dark:text-[var(--neutral-thin)]'} hover:opacity-80 hover:border-[var(--neutral-default)] hover:cursor-pointer border dark:hover:border-blue-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded`}>{text}</div>
  )
}
