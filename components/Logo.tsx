export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand-navy text-white shadow-soft">
        <span className="text-sm font900 font-extrabold">PFG</span>
      </div>
      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-tight text-slate-900">Palmer Financial Group</div>
        <div className="text-xs font-medium text-slate-500">Tax Resolution • Accounting • IRS Negotiation</div>
      </div>
    </div>
  );
}
