import Container from "../shared/Container";

export default function Testimonials() {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="text-center mx-auto max-w-3xl pb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
            Testimonials
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            What Clients say about us
          </h1>
        </div>
      </Container>
    </section>
  );
}
