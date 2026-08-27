import { Link } from "react-router";
import Logo from "../../app/assets/Logo.svg";

export default function Navbar() {
  return (
    <nav className="container mx-auto">
      <img src={Logo} alt="EpixELab Logo" />
    </nav>
  );
}
