export interface MinimalButtonProps {
  text: string
  onClick?: () => void
  icon?: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export const MinimalButton = ({
  text,
  onClick,
  disabled,
  icon,
  type
}: MinimalButtonProps) => {
  return (
    <button
      type={type || 'button'}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`p-2 flex items-center justify-center gap-2 heading-font text-[var(--neutral-default)] bg-[var(--accent)] focus:outline-none hover:opacity-80 font-medium rounded-lg text-sm lg:text-base dark:text-[var(--neutral-default)] ${disabled ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-600' : ''}`}
    >
      {icon && (<span>{icon}</span>)}
      {text}
    </button>
  )
}
