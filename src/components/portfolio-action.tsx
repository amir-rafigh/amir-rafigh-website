"use client";

import { useId, useRef, type ReactNode } from "react";

type PortfolioActionProps = {
  href: string;
  className: string;
  label: ReactNode;
  accessibleLabel?: string;
  title: string;
  children: ReactNode;
};

export function PortfolioAction({
  href,
  className,
  label,
  accessibleLabel,
  title,
  children,
}: PortfolioActionProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  if (href) {
    return (
      <a className={className} href={href} aria-label={accessibleLabel}>
        {label}
      </a>
    );
  }

  return (
    <>
      <button
        type="button"
        className={className}
        aria-label={accessibleLabel}
        aria-haspopup="dialog"
        onClick={() => dialog.current?.showModal()}
      >
        {label}
      </button>
      <dialog className="portfolio-dialog" ref={dialog} aria-labelledby={titleId}>
        <div className="dialog-heading">
          <h2 id={titleId}>{title}</h2>
          <form method="dialog">
            <button type="submit" className="dialog-close" aria-label="Close dialog">
              <span aria-hidden="true">×</span>
            </button>
          </form>
        </div>
        <div className="dialog-body">{children}</div>
      </dialog>
    </>
  );
}
