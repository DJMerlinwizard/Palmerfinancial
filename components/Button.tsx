import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary: "bg-brand-navy text-white hover:bg-slate-950 border-transparent shadow-soft",
  secondary: "bg-white text-brand-navy border-slate-200 hover:border-slate-300 hover:bg-slate-50",
  ghost: "bg-transparent text-brand-navy hover:bg-slate-50 border-transparent"
};

export function Button({
  variant = "primary",
  className,
  href,
  onClick,
  type = "button",
  target,
  rel,
  children
}: {
  variant?: Variant;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  children: React.ReactNode;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold " +
    "transition-colors duration-200 focus-visible:shadow-ring";

  if (href) {
    const isExternal = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cn(base, styles[variant], className)}
        target={target ?? (isExternal ? "_blank" : undefined)}
        rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, styles[variant], className)}>
      {children}
    </button>
  );
}
