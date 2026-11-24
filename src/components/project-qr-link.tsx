import Image from "next/image";
import QRCode from "qrcode";
import { ArrowUpRight } from "@/components/portfolio-icons";

export async function ProjectQrLink({
  href,
  label,
  projectTitle,
  qrLabel,
}: {
  href: string;
  label: string;
  projectTitle: string;
  qrLabel: string;
}) {
  // Generate locally on the server, keeping the four-module quiet zone intact.
  const svg = await QRCode.toString(href, {
    type: "svg",
    errorCorrectionLevel: "M",
    margin: 4,
    color: { dark: "#121e28", light: "#ffffff" },
  });

  return (
    <a className="project-qr-link" href={href} aria-label={`${projectTitle}: ${label}`}>
      <Image
        className="project-qr-image"
        src={`data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`}
        width={128}
        height={128}
        alt={`${qrLabel}: ${projectTitle} — ${label}`}
        unoptimized
      />
      <span className="project-qr-title">{label} <ArrowUpRight /></span>
    </a>
  );
}
