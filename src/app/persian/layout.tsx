import type { Metadata } from "next";
import localFont from "next/font/local";
import { persianProfile } from "@/data/portfolio-locales";
import "../globals.css";
import "./persian.css";

const vazirmatn = localFont({
  src: "../fonts/vazirmatn.woff2",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${persianProfile.name} | ${persianProfile.role}`,
  description: persianProfile.bio,
  alternates: { languages: { en: "/", fa: "/persian" } },
};

export default function PersianLayout({ children }: LayoutProps<"/persian">) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.className}>
      <body>{children}</body>
    </html>
  );
}
