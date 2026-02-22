"use client";

import Container from "./Container";
import Logo from "./Logo";
import { Button } from "./Button";
import { BUSINESS } from "@/lib/constants";

const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" }
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <a href="#top" className="rounded-2xl focus-visible:shadow-ring" aria-label="Back to top">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="secondary" href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "") || BUSINESS.phone}`}>
            Call Now
          </Button>
          <Button href="#lead">Free Consultation</Button>
        </div>
      </Container>
    </header>
  );
}
