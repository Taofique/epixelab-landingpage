import { Link } from "react-router";
import Logo from "../../app/assets/Logo.svg";

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
        <button className="text-lg">Sign In</button>
        <button className="text-lg bg-[#FF6600] px-4 py-2 rounded-lg text-white">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
