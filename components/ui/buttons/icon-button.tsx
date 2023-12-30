export interface IconButtonProps {
  onClick?: () => void
  icon: React.ReactNode
  arialLabel: string
}

export const IconButton = ({
  onClick,
  icon,
  arialLabel
}: IconButtonProps) => {
  return (
    <button
      type="button"
      className="
      text-[var(--neutral-default)] bg-transparent hover:opacity-80 lg:text-base dark:text-[var(--neutral-luminous)] border border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)] hover:bg-[var(--neutral-delicate)] dark:hover:bg-[var(--accent-v700)] focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
      onClick={onClick}
    >
      {icon && icon}
      <span className="sr-only">Icon {arialLabel}</span>
    </button>
  )
}
