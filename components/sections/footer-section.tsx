export const FooterSection = () => {
  return (
    <footer className="sticky -bottom-0 bg-[var(--accent)] dark:bg-[var(--accent-v900)] border-t border-[var(--neutral-delicate)] dark:border-[var(--accent-v700)]">
      <div className="l-container">
        <div className="flex items-center justify-between h-8">
          <small>&copy; {new Date().getFullYear()} Bookmarkly</small>
          <small>Created by <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/hamilgdev/" className=" hover:underline">&#64;hamilgdev</a></small>
        </div>
      </div>
    </footer>
  )
}
