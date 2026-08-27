import type { Route } from "./+types/home";
import Hero from "../../components/Home/Hero";
import Services from "../../components/Home/Services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
