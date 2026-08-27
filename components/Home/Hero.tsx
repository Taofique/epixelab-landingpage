// components/home/Hero.tsx
import { useState } from "react";
import heroGuyImage from "../../app/assets/hero/hero-guyImage.png";
import lightbulbFrame from "../../app/assets/hero/hero-lightbulb-frame.png";
import messengerIcon from "../../app/assets/hero/hero-black-messenger-icon.svg";
import starIcon from "../../app/assets/hero/hero-star-icon.png";
import learnMoreIcon from "../../app/assets/hero/learn-more-icon.png";
import Button from "../shared/Button";

export default function Hero() {
  const [learnMoreActive, setLearnMoreActive] = useState(false);

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        {/* Left column */}
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            We boost growth for your startup business
          </h1>

          <p className="mt-6 text-slate-600">
            Our goal is to be at the heart of the creativity services industry
            as a digital creator.
          </p>

          <div className="mt-8 flex items-center gap-6">
            <Button variant="primary" size="md" className="rounded-full">
              Get Started
            </Button>

            <button
              onClick={() => setLearnMoreActive((v) => !v)}
              className="group flex items-center gap-2 font-medium text-slate-900"
              aria-pressed={learnMoreActive}
            >
              <span className="relative inline-block h-10 w-10 transition-transform duration-150 ease-out group-hover:scale-110 group-active:scale-95">
                <img
                  src={learnMoreIcon}
                  alt=""
                  className="absolute inset-0 h-10 w-10"
                />
              </span>
              <span className="transition-colors duration-150 group-hover:text-orange-500">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative flex flex-col items-center gap-4 md:block">
            {/* soft shadow blob behind the portrait — desktop only */}
            <div className="absolute inset-0 z-0 hidden rounded-full bg-slate-200/60 blur-2xl md:block" />

            <img
              src={heroGuyImage}
              alt="Happy client using our services"
              className="relative z-10 h-auto w-full max-w-md rounded-full"
            />

            {/* Lightbulb doodle — always floats over the image, all breakpoints */}
            <img
              src={lightbulbFrame}
              alt=""
              className="absolute left-2 top-[28%] z-20 w-32 md:left-[-6%] md:w-48"
            />

            {/* Top-left floating card — stacked on mobile, floats on desktop */}
            <div className="relative z-20 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-[0_20px_25px_-8px_rgba(0,0,0,0.25)] md:absolute md:left-[-15%] md:top-6">
              <img src={messengerIcon} alt="" className="h-9 w-9" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  100% Business Growth
                </p>
                <div className="flex items-center gap-1">
                  <img src={starIcon} alt="" className="h-3 w-3" />
                  <span className="text-xs text-slate-500">
                    4.9 (1,520 Reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom floating card — stacked on mobile, floats on desktop */}
            <div className="relative z-20 rounded-xl bg-white px-4 py-3 shadow-[0_20px_25px_-8px_rgba(0,0,0,0.25)] md:absolute md:bottom-6 md:left-[-10%]">
              <p className="text-sm font-semibold text-slate-900">
                1,000,000 Happy Clients
              </p>
              <div className="flex items-center gap-1">
                <img src={starIcon} alt="" className="h-3 w-3" />
                <span className="text-xs text-slate-500">
                  4.9 (1.5k Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
