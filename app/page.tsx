import Container from "@/components/Container";
import SiteHeader from "@/components/SiteHeader";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/Button";
import { Card, CardContent } from "@/components/ui/Card";
import LeadForm from "@/components/LeadForm";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import Accordion from "@/components/Accordion";
import TestimonialCard from "@/components/TestimonialCard";
import { BUSINESS, FAQS, PROCESS, SERVICES, TESTIMONIALS } from "@/lib/constants";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen">
      <SiteHeader />

      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute inset-0 -z-10">
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" />
          <div className="pointer-events-none absolute right-[-120px] top-[180px] h-[360px] w-[360px] rounded-full bg-slate-100 blur-3xl" />
        </div>

        <Container className="py-14 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Stop IRS stress. Start a real resolution plan.
              </h1>

              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">{BUSINESS.name}</span> helps {BUSINESS.city}, {BUSINESS.state} individuals and business owners respond fast, negotiate smart, and get compliant—without the runaround.
              </p>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 px-5 py-4 shadow-soft">
                <p className="text-sm font-semibold text-brand-navy">IRS notices have deadlines.</p>
                <p className="mt-1 text-sm text-slate-600">Acting sooner keeps more options open.</p>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href="#lead">Get a Free Consultation</Button>
                <Button href="#calendly" variant="secondary">Schedule in Calendly</Button>
              </div>

              <div className="mt-6 flex flex-col gap-2 text-sm text-slate-600">
                <p><span className="font-semibold text-slate-900">Local focus:</span> {BUSINESS.city}, {BUSINESS.state} • {BUSINESS.serviceArea}</p>
                <p>
                  <span className="font-semibold text-slate-900">Call:</span>{" "}
                  <a className="underline" href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "") || BUSINESS.phone}`}>{BUSINESS.phone}</a>{" "}
                  • <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card>
                <CardContent>
                  <p className="text-xs font-semibold tracking-widest text-brand-navy/80">WHAT YOU GET</p>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-navy" />Plain-language explanation of your notice and deadlines</li>
                    <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-navy" />A realistic strategy with clear next steps</li>
                    <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-navy" />A path back to compliance — built for long-term stability</li>
                  </ul>

                  <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                    <Button href="#services" variant="secondary">Explore Services</Button>
                    <Button href="#process" variant="ghost">How It Works →</Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-brand-navy text-white border-brand-navy">
                <CardContent>
                  <p className="text-sm font-semibold">Need to move quickly?</p>
                  <p className="mt-2 text-sm text-white/85">If you’ve received a notice with a response deadline, bring it. We’ll help you prioritize actions.</p>
                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <Button href="#lead" variant="secondary" className="bg-white text-brand-navy hover:bg-slate-50">Start Here</Button>
                    <Button href="#calendly" variant="ghost" className="text-white hover:bg-white/10">Schedule →</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="border-t border-slate-200 bg-white">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="SERVICES" title="Clear support for notices, back taxes, and compliance" subtitle={`Focused help for ${BUSINESS.city}, ${BUSINESS.state} individuals and small business owners who need a plan — not guesswork.`} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SERVICES.map((svc) => (
              <Card key={svc.title} className="h-full">
                <CardContent>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{svc.title}</h3>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex gap-3"><span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-navy" />{b}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="#lead">Get a Free Consultation</Button>
            <Button href="#calendly" variant="secondary">Book in Calendly</Button>
          </div>
        </Container>
      </section>

      <section id="process" className="border-t border-slate-200 bg-slate-50">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="PROCESS" title="A step-by-step path from uncertainty to stability" subtitle="We keep it organized, direct, and focused on outcomes you can actually maintain." />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {PROCESS.map((p) => (
              <Card key={p.step} className="h-full">
                <CardContent>
                  <p className="text-xs font-semibold tracking-widest text-brand-navy/80">STEP {p.step}</p>
                  <h3 className="mt-2 text-lg font-extrabold tracking-tight text-slate-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section id="who-we-help" className="border-t border-slate-200 bg-white">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="WHO WE HELP" title="If any of this sounds familiar, you’re in the right place" subtitle="We work with people who want to get back on track — quickly and correctly." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { title: "Individuals with IRS notices or tax debt", text: "We help you understand what’s being requested and what to do next — with a realistic plan." },
              { title: "Self-employed professionals", text: "Catch-up work, compliance routines, and a clearer system so tax season doesn’t become a crisis." },
              { title: "Small business owners", text: "Accounting support + resolution strategy that helps keep your business stable going forward." }
            ].map((x) => (
              <Card key={x.title} className="h-full">
                <CardContent>
                  <h3 className="text-lg font-extrabold tracking-tight text-slate-900">{x.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{x.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-10 text-center text-base font-semibold text-slate-700">No judgment. No pressure. Just clear guidance.</p>
        </Container>
      </section>

      <section id="why" className="border-t border-slate-200 bg-slate-50">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="WHY PALMER" title="Professional guidance that respects your time" subtitle="Premium support means clarity, structure, and honest expectations." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <Card className="h-full">
              <CardContent>
                <ul className="space-y-4 text-sm text-slate-700">
                  {["Plain-language explanations","Organized, step-by-step guidance","Realistic timelines","Focus on long-term stability"].map((b) => (
                    <li key={b} className="flex gap-3"><span className="mt-1.5 inline-block h-2 w-2 shrink-0 rounded-full bg-brand-navy" /><span className="font-semibold">{b}</span></li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full bg-brand-navy text-white border-brand-navy">
              <CardContent>
                <p className="text-xl font-extrabold tracking-tight">Built for stability, not quick fixes.</p>
                <p className="mt-4 text-sm leading-relaxed text-white/85">We don’t just solve today’s problem—we help prevent the next one.</p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                  <Button href="#lead" variant="secondary" className="bg-white text-brand-navy hover:bg-slate-50">Start With a Consultation</Button>
                  <Button href="#calendly" variant="ghost" className="text-white hover:bg-white/10">Schedule →</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section id="testimonials" className="border-t border-slate-200 bg-white">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="TESTIMONIALS" title="What clients say (placeholders)" subtitle="Swap these with real reviews anytime. City names are included as placeholders." />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} name={t.name} location={t.location} text={t.text} />
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="border-t border-slate-200 bg-slate-50">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="FAQ" title="Answers to common questions" subtitle="Straightforward guidance to help you decide your next step." />
          <div className="mt-10"><Accordion items={FAQS} /></div>
        </Container>
      </section>

      <section id="lead" className="border-t border-slate-200 bg-white">
        <Container className="py-14 md:py-20">
          <div className="grid gap-8 md:grid-cols-2 md:items-start">
            <div>
              <SectionHeader eyebrow="FREE CONSULTATION" title={`Talk to a professional in ${BUSINESS.city}, ${BUSINESS.state}`} subtitle="Tell us what you’re facing. We’ll respond with clear next steps and what to gather." />
              <div className="mt-8"><LeadForm /></div>
            </div>

            <div id="calendly" className="scroll-mt-24">
              <SectionHeader eyebrow="SCHEDULE" title="Prefer to pick a time now?" subtitle="Use Calendly to book instantly — or submit the form and we’ll follow up." />
              <div className="mt-8"><CalendlyEmbed /></div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="border-t border-slate-200 bg-slate-50">
        <Container className="py-14 md:py-20">
          <SectionHeader eyebrow="CONTACT" title="Get in touch" subtitle={`Serving ${BUSINESS.city}, ${BUSINESS.state} and ${BUSINESS.serviceArea}.`} />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <Card><CardContent>
              <p className="text-sm font-semibold text-slate-500">Phone</p>
              <p className="mt-2 text-lg font-extrabold text-slate-900">{BUSINESS.phone}</p>
              <div className="mt-4"><Button href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "") || BUSINESS.phone}`} variant="secondary">Call Now</Button></div>
            </CardContent></Card>

            <Card><CardContent>
              <p className="text-sm font-semibold text-slate-500">Email</p>
              <p className="mt-2 text-lg font-extrabold text-slate-900">{BUSINESS.email}</p>
              <div className="mt-4"><Button href={`mailto:${BUSINESS.email}`} variant="secondary">Email Us</Button></div>
            </CardContent></Card>

            <Card><CardContent>
              <p className="text-sm font-semibold text-slate-500">Location</p>
              <p className="mt-2 text-lg font-extrabold text-slate-900">{BUSINESS.city}, {BUSINESS.state}</p>
              <p className="mt-2 text-sm text-slate-600">{BUSINESS.address}</p>
              <div className="mt-4 flex gap-2"><Button href="#lead">Contact Us</Button><Button href="#services" variant="secondary">Services</Button></div>
            </CardContent></Card>
          </div>
        </Container>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <Container className="py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-extrabold text-slate-900">{BUSINESS.name}</p>
              <p className="mt-2 text-sm text-slate-600">{BUSINESS.address}</p>
              <p className="mt-1 text-sm text-slate-600">{BUSINESS.city}, {BUSINESS.state}</p>
              <p className="mt-3 text-sm text-slate-600">
                <a className="underline" href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "") || BUSINESS.phone}`}>{BUSINESS.phone}</a>{" "}
                • <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <a className="text-sm font-semibold text-slate-700 underline" href="/privacy">Privacy Policy</a>
              <p className="max-w-md text-xs leading-relaxed text-slate-500">
                Disclaimer: This website is for informational purposes only and does not constitute legal or tax advice.
              </p>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-400">© {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.</p>
        </Container>
      </footer>
    </main>
  );
}
