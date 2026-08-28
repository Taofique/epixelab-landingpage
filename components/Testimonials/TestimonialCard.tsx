export interface TestimonialCardProps {
  photoSrc: string;
  quote: string;
  name: string;
}

export default function TestimonialCard({
  photoSrc,
  quote,
  name,
}: TestimonialCardProps) {
  return (
    <div className="relative flex gap-6 rounded-[10px] border-2 border-white/15 p-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <img
        src={photoSrc}
        alt={name}
        className="h-16 w-16 shrink-0 rounded-[10px] object-cover"
      />

      <div className="[word-break:break-word]">
        <p className="text-[18px] font-medium leading-[28px] text-[#0b1b35]">
          {quote}
        </p>
        <p className="mt-4 whitespace-nowrap text-[14px] font-bold uppercase tracking-[2px] text-[#0b1b35] opacity-30">
          {name}
        </p>
      </div>
    </div>
  );
}
