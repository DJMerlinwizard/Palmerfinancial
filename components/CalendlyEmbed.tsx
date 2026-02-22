"use client";

import Script from "next/script";
import { BUSINESS } from "@/lib/constants";
import { Button } from "./Button";
import { Card, CardContent } from "./ui/Card";

export default function CalendlyEmbed() {
  return (
    <Card>
      <CardContent>
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h3 className="text-lg font-extrabold tracking-tight text-slate-900">Schedule in Calendly</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Choose a time that works. You’ll get a confirmation instantly.
            </p>
          </div>

          <Button href={BUSINESS.calendlyUrl} variant="secondary">
            Open Calendly in New Tab
          </Button>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
          <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="afterInteractive" />
          <div className="calendly-inline-widget" data-url={BUSINESS.calendlyUrl} style={{ minWidth: "320px", height: "720px" }} />
        </div>

        <p className="mt-3 text-xs text-slate-500">
          Tip: Update <span className="font-semibold">CALENDLY_URL</span> in <span className="font-semibold">lib/constants.ts</span>.
        </p>
      </CardContent>
    </Card>
  );
}
