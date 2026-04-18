import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
};

export default function AnimatedLink({
  href,
  children,
  className = "",
  external,
}: Props) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`lnk text-ink ${className}`}
    >
      <span>{children}</span>
      <span aria-hidden className="arrow font-mono text-[0.9em]">
        {external ? "↗" : "→"}
      </span>
    </a>
  );
}
