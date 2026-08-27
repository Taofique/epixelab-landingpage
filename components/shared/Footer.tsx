import { Link } from "react-router";
import FooterLogo from "../../app/assets/footer-logo.png";

export default function Footer() {
  return (
    <div className="container mx-auto flex items-center justify-between">
      <div className="flex items-center justify-between gap-23 py-4">
        <img src={FooterLogo} alt="EpixELab Logo" />
        <p> &copy; 2026 Epixelab. All rights reserved.</p>
      </div>

      <div className="space-x-6">
        <Link to="#">Portfolio</Link>
        <Link to="#">How it Works</Link>
        <Link to="#">Pricing</Link>
        <Link to="#">About</Link>
        <Link to="#">Login</Link>
      </div>
    </div>
  );
}
