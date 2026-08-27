import { TrendingUp, Video, BarChart3 } from "lucide-react";
import Button from "../shared/Button";

const iconMap = {
  "trending-up": TrendingUp,
  video: Video,
  "bar-chart": BarChart3,
} as const;

export interface ServiceCardProps {
  icon: keyof typeof iconMap;
  title: string;
  description: string;
  ctaLabel: string;
  onCtaClick?: () => void;
}

export default function ServiceCard({
  icon,
  title,
  description,
  ctaLabel,
  onCtaClick,
}: ServiceCardProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className="flex flex-col items-center rounded-2xl bg-white px-8 pb-8 pt-10 text-center
        shadow-[-8px_0_24px_-12px_rgba(0,0,0,0.15),8px_0_24px_-12px_rgba(0,0,0,0.15),0_20px_28px_-12px_rgba(0,0,0,0.18)]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900">
        <Icon className="h-7 w-7 text-white" strokeWidth={2} />
      </span>

      <h3 className="mt-6 text-xl font-bold text-slate-900">{title}</h3>

      <p className="mt-4 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <Button variant="primary" size="sm" className="mt-6" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}
