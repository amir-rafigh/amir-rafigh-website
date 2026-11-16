"use client";

import { useEffect, useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
  errorMessage: string;
};

export function CopyEmailButton({ email, label, copiedLabel, errorMessage }: CopyEmailButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (status !== "copied") return;
    const timer = setTimeout(() => setStatus("idle"), 3000);
    return () => clearTimeout(timer);
  }, [status]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="copy-email">
      <button type="button" className="copy-email-button" onClick={copyEmail}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
          {status === "copied" ? <path d="m5 12 4 4L19 6" /> : <>
            <rect x="8" y="8" width="12" height="13" rx="2" />
            <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
          </>}
        </svg>
        {status === "copied" ? copiedLabel : label}
      </button>
      <p className={status === "error" ? "copy-status" : "sr-only"} role="status">
        {status === "copied" ? copiedLabel : status === "error" ? errorMessage : ""}
      </p>
    </div>
  );
}
