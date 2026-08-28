// components/home/Subscribe.tsx
import Button from "../shared/Button";
import Container from "../shared/Container";
import emailLogo from "../../app/assets/subscribe/email-Logo.png";

export default function Subscribe() {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl px-4 pb-12 text-center sm:px-6 md:pb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Subscribe
          </p>

          <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
            Subscribe Our Newsletter
          </h1>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 px-4 sm:px-6 md:grid-cols-2 md:gap-12 md:px-0">
          {/* Left: envelope illustration */}
          <div className="flex justify-center md:justify-start">
            <img
              src={emailLogo}
              alt="Subscribe to our newsletter"
              className="w-full max-w-[240px] sm:max-w-xs md:max-w-sm"
            />
          </div>

          {/* Right: copy + form */}
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Newsletter
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              Subscribe Our Newsletter
            </h2>

            <p className="mt-4 text-sm text-slate-600 sm:mt-6 sm:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <input
              type="email"
              placeholder="Your E-mail here..."
              className="mt-6 w-full rounded-full border border-slate-200 px-5 py-3 text-sm text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:mt-8 sm:px-6 sm:py-4 sm:text-base"
            />

            <Button
              variant="primary"
              size="lg"
              className="mt-4 w-full rounded-lg text-sm sm:text-base"
            >
              Subscribe Our Newsletter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
