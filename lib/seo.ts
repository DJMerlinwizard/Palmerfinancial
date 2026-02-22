import { BUSINESS } from "./constants";

export function pageTitle() {
  return `IRS Negotiation & Tax Resolution in ${BUSINESS.city}, ${BUSINESS.state} | ${BUSINESS.name}`;
}

export function metaDescription() {
  return `${BUSINESS.name} helps ${BUSINESS.city}, ${BUSINESS.state} individuals and small business owners respond to IRS notices, address back taxes, and get compliant with a clear resolution plan. Free consultation available.`;
}

export function localBusinessJsonLd(siteUrl: string) {
  const phoneDigits = BUSINESS.phone.replace(/[^\d+]/g, "");
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS.name,
    url: siteUrl,
    telephone: phoneDigits || BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address,
      addressLocality: BUSINESS.city,
      addressRegion: BUSINESS.state,
      addressCountry: "US"
    },
    areaServed: BUSINESS.serviceArea,
    image: `${siteUrl}/og.png`,
    description: metaDescription(),
    sameAs: []
  };
}
