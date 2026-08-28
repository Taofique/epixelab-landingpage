import type { Route } from "./+types/home";
import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";
import Explore from "../../components/Home/Explore";
import Testimonials from "../../components/Home/Testimonials";
import OurTeam from "../../components/Home/OurTeam";
import Subscribe from "../../components/Home/Subscribe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "EpixeLab" },
    { name: "description", content: "Welcome to EpixELab!" },
  ];
}

export default function home() {
  return (
    <>
      <Hero />
      <Services />
      <Explore />
      <Testimonials />
      <OurTeam />
      <Subscribe />
    </>
  );
}
