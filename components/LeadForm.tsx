"use client";

import { useMemo, useState } from "react";
import { BUSINESS } from "@/lib/constants";
import { Button } from "./Button";
import { Card, CardContent } from "./ui/Card";

type ServiceNeeded = "IRS Negotiation" | "Accounting & Bookkeeping" | "Tax Resolution" | "Not sure yet";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  serviceNeeded: ServiceNeeded;
  city: string;
  message: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  serviceNeeded: "Not sure yet",
  city: "",
  message: ""
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

function isPhoneLikely(value: string) {
  const digits = value.replace(/[^\d]/g, "");
  return digits.length >= 10;
}

export default function LeadForm() {
  const [data, setData] = useState<FormState>(initial);
  const [touched, setTouched] = useState<Record<keyof FormState, boolean>>({
    fullName: false,
    phone: false,
    email: false,
    serviceNeeded: false,
    city: false,
    message: false
  });
  const [status, setStatus] = useState<"idle" | "success" | "fallback">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!data.fullName.trim()) e.fullName = "Full name is required.";
    if (!data.city.trim()) e.city = "City is required.";
    if (!data.message.trim()) e.message = "Message is required.";
    if (!data.email.trim()) e.email = "Email is required.";
    else if (!isEmail(data.email)) e.email = "Enter a valid email address.";
    if (!data.phone.trim()) e.phone = "Phone is required.";
    else if (!isPhoneLikely(data.phone)) e.phone = "Enter a valid phone number.";
    return e;
  }, [data]);

  const isValid = Object.keys(errors).length === 0;

  function onChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setStatus("idle");
  }

  function markTouched<K extends keyof FormState>(key: K) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    setTouched({
      fullName: true,
      phone: true,
      email: true,
      serviceNeeded: true,
      city: true,
      message: true
    });

    if (!isValid) return;

    setIsSubmitting(true);
    setStatus("idle");

    // No backend in this spec. We “submit” locally, and offer a mailto fallback.
    // If you later add an email service (Resend, Postmark, etc.), replace this with a fetch to /api/lead.
    await new Promise((r) => setTimeout(r, 650));

    const emailConfigured = false; // <-- flip to true if you add an API route + email provider
    setIsSubmitting(false);

    if (emailConfigured) {
      setStatus("success");
      setData(initial);
      setTouched({
        fullName: false,
        phone: false,
        email: false,
        serviceNeeded: false,
        city: false,
        message: false
      });
    } else {
      setStatus("fallback");
    }
  }

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Consultation Request — ${BUSINESS.name}`);
    const body = encodeURIComponent(
      [
        `Full Name: ${data.fullName}`,
        `Phone: ${data.phone}`,
        `Email: ${data.email}`,
        `Service Needed: ${data.serviceNeeded}`,
        `City: ${data.city}`,
        "",
        "Message:",
        data.message
      ].join("\n")
    );
    return `mailto:${BUSINESS.email}?subject=${subject}&body=${body}`;
  }, [data]);

  const fieldError = <K extends keyof FormState>(k: K) => (touched[k] ? errors[k] : undefined);

  return (
    <Card>
      <CardContent>
        <h3 className="text-lg font-extrabold tracking-tight text-slate-900">Request a Free Consultation</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Share a few details and we’ll respond with next steps. Deadlines matter — we keep things moving.
        </p>

        <form className="mt-6 grid gap-4" onSubmit={onSubmit} noValidate>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="fullName">
                Full Name <span className="text-red-600">*</span>
              </label>
              <input
                id="fullName"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-soft"
                value={data.fullName}
                onChange={(e) => onChange("fullName", e.target.value)}
                onBlur={() => markTouched("fullName")}
                autoComplete="name"
                required
              />
              {fieldError("fullName") ? (
                <p className="mt-1 text-xs font-semibold text-red-600">{fieldError("fullName")}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="city">
                City <span className="text-red-600">*</span>
              </label>
              <input
                id="city"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-soft"
                value={data.city}
                onChange={(e) => onChange("city", e.target.value)}
                onBlur={() => markTouched("city")}
                autoComplete="address-level2"
                required
              />
              {fieldError("city") ? <p className="mt-1 text-xs font-semibold text-red-600">{fieldError("city")}</p> : null}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="phone">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                id="phone"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-soft"
                value={data.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                onBlur={() => markTouched("phone")}
                autoComplete="tel"
                inputMode="tel"
                required
              />
              {fieldError("phone") ? <p className="mt-1 text-xs font-semibold text-red-600">{fieldError("phone")}</p> : null}
            </div>

            <div>
              <label className="text-sm font-semibold text-slate-700" htmlFor="email">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-soft"
                value={data.email}
                onChange={(e) => onChange("email", e.target.value)}
                onBlur={() => markTouched("email")}
                autoComplete="email"
                inputMode="email"
                required
              />
              {fieldError("email") ? <p className="mt-1 text-xs font-semibold text-red-600">{fieldError("email")}</p> : null}
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700" htmlFor="serviceNeeded">
              Service Needed
            </label>
            <select
              id="serviceNeeded"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-soft"
              value={data.serviceNeeded}
              onChange={(e) => onChange("serviceNeeded", e.target.value as ServiceNeeded)}
              onBlur={() => markTouched("serviceNeeded")}
            >
              <option>Not sure yet</option>
              <option>IRS Negotiation</option>
              <option>Accounting & Bookkeeping</option>
              <option>Tax Resolution</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-700" htmlFor="message">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              className="mt-2 min-h-[120px] w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-soft"
              value={data.message}
              onChange={(e) => onChange("message", e.target.value)}
              onBlur={() => markTouched("message")}
              required
            />
            {fieldError("message") ? <p className="mt-1 text-xs font-semibold text-red-600">{fieldError("message")}</p> : null}
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-relaxed text-slate-500">
              By submitting, you agree we may contact you about your request. No spam. No pressure.
            </p>

            <div className="flex gap-2">
              <Button type="submit" className="min-w-[180px]" variant="primary">
                {isSubmitting ? "Submitting…" : "Submit"}
              </Button>
              <Button href="#calendly" variant="secondary">
                Prefer Calendly
              </Button>
            </div>
          </div>

          {status === "success" ? (
            <div className="mt-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">
              Thanks — we received your request. We’ll reach out shortly.
            </div>
          ) : null}

          {status === "fallback" ? (
            <div className="mt-2 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              <p className="font-semibold">Submission received locally, but email isn’t configured yet.</p>
              <p className="mt-1">
                Please send your request via email:&nbsp;
                <a className="font-semibold underline" href={mailtoHref}>
                  {BUSINESS.email}
                </a>
              </p>
            </div>
          ) : null}
        </form>
      </CardContent>
    </Card>
  );
}
