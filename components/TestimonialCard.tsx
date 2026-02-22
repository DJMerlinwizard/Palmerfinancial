import { Card, CardContent } from "./ui/Card";

export default function TestimonialCard({
  name,
  location,
  text
}: {
  name: string;
  location: string;
  text: string;
}) {
  return (
    <Card className="h-full">
      <CardContent>
        <p className="text-sm font-semibold text-brand-navy">{name}</p>
        <p className="mt-1 text-xs font-medium text-slate-500">{location}</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-700">{text}</p>
        <p className="mt-4 text-xs font-semibold text-slate-400">— Placeholder</p>
      </CardContent>
    </Card>
  );
}
