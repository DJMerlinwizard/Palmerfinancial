import Container from "@/components/Container";
import SiteHeader from "@/components/SiteHeader";
import { BUSINESS } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <SiteHeader />
      <Container className="py-14 md:py-20">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-relaxed text-slate-600">
          This is a basic privacy policy template. Replace with your official policy.
        </p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-extrabold text-slate-900">Information we collect</h2>
            <p className="mt-2">If you submit a form, we may collect your name, contact details, and the message you provide.</p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-900">How we use information</h2>
            <p className="mt-2">We use the information to respond to your inquiry and provide requested services.</p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-900">Contact</h2>
            <p className="mt-2">
              For privacy questions, contact{" "}
              <a className="underline" href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-extrabold text-slate-900">Disclaimer</h2>
            <p className="mt-2">This website is for informational purposes only and does not constitute legal or tax advice.</p>
          </section>
        </div>
      </Container>
    </main>
  );
}
