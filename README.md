# Palmer Financial Group — One Page Website

## Tech
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Static marketing site, Vercel-ready

## Local SEO placeholders
Edit:
- `lib/constants.ts` (CITY, STATE, PHONE, EMAIL, ADDRESS, SERVICE_AREA, CALENDLY_URL)
- `app/layout.tsx` (SITE_URL)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm start
```

## Deploy to Vercel
Push to GitHub and import in Vercel, or run:
```bash
vercel
```

## Lead Form note
The form uses client-side validation and shows a fallback mailto link because no email backend is configured.
To enable real delivery, add an API route and an email provider (e.g., Resend/Postmark), then flip `emailConfigured` in `components/LeadForm.tsx`.
