import type { services } from "@/data/portfolio";

type ServiceName = (typeof services)[number]["icon"];

const serviceArtwork = {
  website: (
    <>
      <path d="M32 22H4V7h30v6M17 22v4m-6 1h15M4 18h22" />
      <path d="m14 10-3.5 3 3.5 3m7-6 3.5 3-3.5 3m-2-6.5-2 7" />
      <Gear />
    </>
  ),
  app: (
    <>
      <path d="M25 13V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v25a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4M9 8h16M9 28h16m-10 2.5h4" />
      <path d="m15 11-3 2.5 3 2.5m5-5 3 2.5m-4-3-2 6" />
      <Gear transform="translate(-6 2)" />
    </>
  ),
  hosting: (
    <>
      <path d="M12 24h-1a6 6 0 0 1-1-11.9 8.5 8.5 0 0 1 16.5-1.6A6.8 6.8 0 0 1 29 24" />
      <rect x="12" y="16" width="16" height="15" rx="1.5" />
      <path d="M12 21h16m-16 5h16m-12-7.5h1m-1 5h1m-1 5h1m4-10h3m-3 5h3m-3 5h3" />
    </>
  ),
};

function Gear({ transform }: { transform?: string }) {
  return (
    <g transform={transform}>
      <path d="M31 14h3l.5 2 1.6.9 2-.6 1.5 2.6-1.5 1.4v1.8l1.5 1.4-1.5 2.6-2-.6-1.6.9-.5 2h-3l-.5-2-1.6-.9-2 .6-1.5-2.6 1.5-1.4v-1.8l-1.5-1.4 1.5-2.6 2 .6 1.6-.9z" />
      <circle cx="32.5" cy="21.2" r="2.5" />
    </g>
  );
}

export function ServiceIcon({ name }: { name: ServiceName }) {
  return (
    <svg
      className="service-icon"
      viewBox="0 0 44 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {serviceArtwork[name]}
    </svg>
  );
}

export function ArrowUpRight() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M3 5h18a2 2 0 0 1 2 2v1l-11 6L1 8V7a2 2 0 0 1 2-2Zm-2 5 10.5 5.7a1 1 0 0 0 1 0L23 10v7a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2Z" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.24c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.23 1.84 1.23 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.47-1.34-5.47-5.94 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1.01-.32 3.3 1.23A11.5 11.5 0 0 1 12 5.78c1.02 0 2.04.14 3 .4 2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.49 5.93.43.38.82 1.11.82 2.24v3.3c0 .32.22.69.83.57A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0Z" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.4 8.6H1V23h3.4zM2.7 1a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM22.9 14.7c0-4.2-1.9-6.4-5.3-6.4-1.8 0-3.1.9-3.7 1.9h-.1V8.6h-3.4V23h3.5v-7.1c0-2.1.9-3.5 2.8-3.5s2.6 1.4 2.6 3.5V23h3.6z" />
    </svg>
  );
}
