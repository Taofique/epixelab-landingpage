// components/shared/Navbar.tsx
import { useState } from "react";
import { Link } from "react-router";
import Logo from "../../app/assets/Logo.svg";
import Button from "../shared/Button";
import Container from "../shared/Container";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/our-app", label: "Our App" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 py-4 backdrop-blur-md">
      <Container>
        <div className="flex items-center justify-between">
          <img src={Logo} alt="Epixelab Logo" className="h-8 w-auto" />

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-slate-700 hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop auth buttons */}
          <div className="hidden items-center gap-4 md:flex">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>

            <Button variant="primary" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {open ? (
                <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-4 border-t border-slate-100 pt-4 md:hidden">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-slate-700"
              >
                {link.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-2">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>

              <Button variant="primary" size="sm" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
