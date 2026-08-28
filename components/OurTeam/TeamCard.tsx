import { FaTwitter, FaFacebookF, FaDribbble } from "react-icons/fa";

export interface TeamCardProps {
  photoSrc: string;
  name: string;
  role: string;
  socials: {
    twitter?: string;
    facebook?: string;
    dribbble?: string;
  };
}

export default function TeamCard({
  photoSrc,
  name,
  role,
  socials,
}: TeamCardProps) {
  return (
    <div
      className="
      w-full max-w-[370px] rounded-[10px] border-2 border-[#ebeaed] 
      transition-all duration-300 ease-in-out
      hover:-translate-y-2 hover:shadow-xl hover:border-indigo-300
    "
    >
      <div className="flex flex-col items-center px-6 pt-8 pb-6">
        {/* 🎨 IMAGE ZOOM ON HOVER */}
        <div className="overflow-hidden rounded-full">
          <img
            src={photoSrc}
            alt={name}
            className="h-[120px] w-[120px] object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <p className="mt-6 text-[22px] font-medium leading-[32px] text-[#1e0e62] transition-colors group-hover:text-indigo-600">
          {name}
        </p>

        <p className="mt-1 text-[14px] font-bold uppercase tracking-[2px] text-[rgba(21,20,57,0.4)]">
          {role}
        </p>
      </div>

      <div className="grid grid-cols-3 border-t-2 border-[#ebeaed] text-[22px] text-[rgba(21,20,57,0.4)]">
        {socials.twitter && (
          <a
            href={socials.twitter}
            className="flex items-center justify-center border-r-2 border-[#ebeaed] py-5 transition-all duration-300 hover:text-[#1e0e62] hover:bg-indigo-50 hover:scale-105"
            aria-label={`${name} on Twitter`}
          >
            <FaTwitter />
          </a>
        )}
        {socials.facebook && (
          <a
            href={socials.facebook}
            className="flex items-center justify-center border-r-2 border-[#ebeaed] py-5 transition-all duration-300 hover:text-[#1e0e62] hover:bg-indigo-50 hover:scale-105"
            aria-label={`${name} on Facebook`}
          >
            <FaFacebookF />
          </a>
        )}
        {socials.dribbble && (
          <a
            href={socials.dribbble}
            className="flex items-center justify-center py-5 transition-all duration-300 hover:text-[#1e0e62] hover:bg-indigo-50 hover:scale-105"
            aria-label={`${name} on Dribbble`}
          >
            <FaDribbble />
          </a>
        )}
      </div>
    </div>
  );
}
