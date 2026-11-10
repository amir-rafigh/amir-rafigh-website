import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/portfolio";
import "./globals.css";

const montserrat = localFont({
  src: "./fonts/montserrat.woff2",
  weight: "400 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: [profile.name, profile.role].join(" | "),
  description: "Explore the work, services, and projects of " + profile.name + ".",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
