interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const ExternalLink = ({
  href,
  children,
  className = "",
}: ExternalLinkProps) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <svg
        className="w-4 h-4"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M7 17L17 7M17 7H7M17 7V17"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
};

export default ExternalLink;
