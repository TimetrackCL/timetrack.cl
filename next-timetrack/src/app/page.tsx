import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Technology from "@/components/Technology";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import ContactSection from "@/components/ContactSection";
import Events from "@/components/Events";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <main>
      <Hero />
      <Clients />
      <Technology />
      <Services />

      {/* Options Section (Events & Blog) */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Novedades
            </span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">
              Nuestros próximos eventos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantente informado sobre nuestros próximos eventos y las últimas
              noticias del mundo del cronometraje deportivo.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            <Blog />
            <Events />
          </div>
        </div>
      </section>

      <Stats />
      <ContactSection />
    </main>
  );
}
