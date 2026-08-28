import { Link } from "react-router";
import FooterLogo from "../../app/assets/footer-logo.png";
import Container from "../shared/Container";

export default function Footer() {
  return (
    <footer className="w-full">
      <Container className="flex flex-col items-center gap-6 py-6 md:flex-row md:justify-between md:gap-4">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-16">
          <img src={FooterLogo} alt="Epixelab Logo" className="h-6 w-auto" />

          <p className="text-sm text-slate-500">
            &copy; 2026 Epixelab. All rights reserved.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm md:gap-6">
          <Link to="#" className="transition-colors hover:text-orange-500">
            Portfolio
          </Link>

          <Link to="#" className="transition-colors hover:text-orange-500">
            How it Works
          </Link>

          <Link to="#" className="transition-colors hover:text-orange-500">
            Pricing
          </Link>

          <Link to="#" className="transition-colors hover:text-orange-500">
            About
          </Link>

          <Link to="#" className="transition-colors hover:text-orange-500">
            Login
          </Link>
        </div>
      </Container>
    </footer>
  );
}
