export const BUSINESS = {
  name: "Palmer Financial Group",
  city: "YOUR_CITY",
  state: "YOUR_STATE",
  phone: "(000) 000-0000",
  email: "info@palmerfinancialgroup.com",
  address: "YOUR_ADDRESS",
  serviceArea: "YOUR_AREA",
  calendlyUrl: "https://calendly.com/YOUR_HANDLE/consultation"
} as const;

export const SERVICES = [
  {
    title: "IRS Negotiation",
    bullets: [
      "IRS notice review and response strategy",
      "Installment agreements (payment plans)",
      "Penalty relief support (when applicable)"
    ]
  },
  {
    title: "Accounting & Bookkeeping",
    bullets: ["Catch-up bookkeeping", "Monthly accounting support", "Compliance-ready financial organization"]
  },
  {
    title: "Tax Resolution",
    bullets: ["Back tax strategy and prioritization", "Unfiled return guidance", "Resolution roadmap"]
  }
] as const;

export const PROCESS = [
  { step: "1", title: "Discovery", text: "Review notices, deadlines, and facts." },
  { step: "2", title: "Strategy", text: "Outline realistic options and timeline." },
  { step: "3", title: "Action", text: "Prepare filings and guide IRS communications." },
  { step: "4", title: "Stability", text: "Ongoing compliance and accounting support." }
] as const;

export const FAQS = [
  {
    q: "I received an IRS notice — what should I do first?",
    a: "Don’t ignore it. Bring the notice and any related letters. We’ll review deadlines, confirm what the IRS is requesting, and map the fastest compliant response."
  },
  {
    q: "Can you help if I have unfiled returns?",
    a: "Yes. We can help you get organized, prioritize what to file first, and create a plan to become compliant while addressing any balance due."
  },
  {
    q: "How long does tax resolution take?",
    a: "Timelines vary based on what’s needed (filings, records, IRS processing times, and resolution type). We’ll give you a realistic timeline after discovery and keep you updated at each step."
  },
  {
    q: "What documents will you need from me?",
    a: "Typically: IRS notices/letters, prior returns (if available), income docs (W-2/1099), business financials, and access to IRS transcripts when appropriate."
  },
  {
    q: "Do you offer payment plan guidance?",
    a: "Yes. If a payment plan is a fit, we’ll help you understand options and the steps required to apply and stay compliant."
  },
  {
    q: "Can you help prevent future IRS issues?",
    a: "That’s the goal. Once today’s issue is stabilized, we can support ongoing bookkeeping, tax planning, and compliance routines."
  }
] as const;

export const TESTIMONIALS = [
  {
    name: "“Fast, clear, and professional.”",
    location: "YOUR_CITY, YOUR_STATE",
    text: "Placeholder testimonial: Palmer Financial Group helped me understand my notice and take action quickly. The process felt organized and calm from day one."
  },
  {
    name: "“A real plan — not a sales pitch.”",
    location: "Springfield, YOUR_STATE",
    text: "Placeholder testimonial: They laid out options in plain English and guided every step. I finally felt like I had control again."
  },
  {
    name: "“Saved me time and stress.”",
    location: "Riverside, YOUR_STATE",
    text: "Placeholder testimonial: Catch-up bookkeeping plus a resolution roadmap made everything feel manageable. Solid communication throughout."
  }
] as const;
