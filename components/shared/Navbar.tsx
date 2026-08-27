import { Link } from "react-router";
import Logo from "../../app/assets/Logo.svg";
import Button from "../shared/Button";

export default function Navbar() {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center justify-between gap-60 ">
        <img src={Logo} alt="EpixELab Logo" />
        <div className="space-x-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/our-app">Our App</Link>
          <Link to="/contact">Home</Link>
        </div>
      </div>

      <div className="space-x-10">
        <Button variant="ghost" size="md">
          Sign In
        </Button>

        <Button variant="primary" size="md">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
