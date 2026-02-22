export default function SectionHeader({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-widest text-brand-navy/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base leading-relaxed text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
