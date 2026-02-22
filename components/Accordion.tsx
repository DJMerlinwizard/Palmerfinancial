"use client";

import { useId, useState } from "react";
import { cn } from "@/lib/utils";

export type AccordionItem = { q: string; a: string };

export default function Accordion({ items }: { items: AccordionItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div key={idx} className="p-0">
            <button
              id={buttonId}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-6 py-5 text-left",
                "rounded-2xl focus-visible:shadow-ring"
              )}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="text-sm font-bold text-slate-900 md:text-base">{item.q}</span>
              <span className={cn("text-xl font-bold text-brand-navy transition-transform", isOpen && "rotate-45")}>
                +
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn("grid overflow-hidden transition-all", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
            >
              <div className="min-h-0 px-6 pb-6">
                <p className="text-sm leading-relaxed text-slate-600 md:text-base">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
