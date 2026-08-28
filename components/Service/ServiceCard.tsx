import Button from "../shared/Button";
import graphicDesignIcon from "../../app/assets/service/graphic-design-icon.png";
import videoIcon from "../../app/assets/service/video-icon.png";
import marketingIcon from "../../app/assets/service/marketing-icon.png";

const iconMap = {
  "graphic-design": graphicDesignIcon,
  video: videoIcon,
  marketing: marketingIcon,
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
  return (
    <div
      className="flex flex-col items-center rounded-2xl bg-white px-8 pb-8 pt-10 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl
        shadow-[-8px_12px_24px_-12px_rgba(0,0,0,0.15),8px_12px_24px_-12px_rgba(0,0,0,0.15),0_20px_28px_-12px_rgba(0,0,0,0.18)]"
    >
      <img
        src={iconMap[icon]}
        alt=""
        className={`h-16 ${icon === "video" ? "w-20" : "w-16"}`}
      />

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
