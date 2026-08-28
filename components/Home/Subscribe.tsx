import Button from "../shared/Button";
import Container from "../shared/Container";
import emailLogo from "../../app/assets/subscribe/email-Logo.png";

export default function Subscribe() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center mx-auto max-w-3xl pb-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Subscribe
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            Subscribe Our Newsletter
          </h1>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Left: envelope illustration */}
          <div className="flex justify-center md:justify-start">
            <img
              src={emailLogo}
              alt="Subscribe to our newsletter"
              className="w-full max-w-sm"
            />
          </div>

          {/* Right: copy + form */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Newsletter
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
              Subscribe Our Newsletter
            </h2>

            <p className="mt-6 text-slate-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam
            </p>

            <input
              type="email"
              placeholder="Your E-mail here..."
              className="mt-8 w-full rounded-full border border-slate-200 px-6 py-4 text-slate-700 shadow-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <Button
              variant="primary"
              size="lg"
              className="mt-4 w-full rounded-lg"
            >
              Subscribe Our Newsletter
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
