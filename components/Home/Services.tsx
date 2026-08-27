import servicesData from "../../data/services.json";
import ServiceCard, { type ServiceCardProps } from "../Service/ServiceCard";

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-3xl px-6 text-center pb-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Service
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
          Our Vision &amp; Our Goal
        </h2>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-3">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon as ServiceCardProps["icon"]}
            title={service.title}
            description={service.description}
            ctaLabel={service.ctaLabel}
          />
        ))}
      </div>
    </section>
  );
}
