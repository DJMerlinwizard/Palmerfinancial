import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { BUSINESS } from "@/lib/constants";
import { localBusinessJsonLd, metaDescription, pageTitle } from "@/lib/seo";

const SITE_URL = "https://www.palmerfinancialgroup.com"; // easy to change

export const metadata: Metadata = {
  title: pageTitle(),
  description: metaDescription(),
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: pageTitle(),
    description: metaDescription(),
    url: SITE_URL,
    siteName: BUSINESS.name,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: BUSINESS.name }],
    locale: "en_US",
    type: "website"
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = localBusinessJsonLd(SITE_URL);

  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Script
          id="localbusiness-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
