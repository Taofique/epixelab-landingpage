import Container from "../shared/Container";
import testimonialsData from "../../data/testimonials.json";
import TestimonialCard from "../Testimonials/TestimonialCard";

import rayhanPhoto from "../../app/assets/testimonials/rayan-curran-photo.png";
import allanPhoto from "../../app/assets/testimonials/Allan-kim-photo.png";
import genePhoto from "../../app/assets/testimonials/gene-whitfield-photo.png";
import kayleyPhoto from "../../app/assets/testimonials/Kayley-frame-photo.png";

const photoMap: Record<string, string> = {
  "rayan-curran-photo.png": rayhanPhoto,
  "Allan-kim-photo.png": allanPhoto,
  "gene-whitfield-photo.png": genePhoto,
  "Kayley-frame-photo.png": kayleyPhoto,
};

export default function Testimonials() {
  return (
    <section className="bg-white py-10">
      <Container>
        <div className="text-center mx-auto max-w-3xl pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Testimonials
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            What Clients say about us
          </h1>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 md:grid-cols-2 pt-10">
          {testimonialsData.map((t) => (
            <TestimonialCard
              key={t.id}
              photoSrc={photoMap[t.photo]}
              quote={t.quote}
              name={t.name}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
