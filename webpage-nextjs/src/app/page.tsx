import HeroSection from '@/components/sections/HeroSection';
import ClientsSection from '@/components/sections/ClientsSection';
import TechnologySection from '@/components/sections/TechnologySection';
import ServicesSection from '@/components/sections/ServicesSection';
import BlogPreviewSection from '@/components/sections/BlogPreviewSection';
import CalendarSection from '@/components/sections/CalendarSection';
import StatsSection from '@/components/sections/StatsSection';
import ContactSection from '@/components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ClientsSection />
      <TechnologySection />
      <ServicesSection />

      {/* Options Section - Blog and Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
              Novedades
            </span>
            <h2 className="md:text-3xl text-xl font-semibold my-5">Nuestros próximos eventos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Mantente informado sobre nuestros próximos eventos y las últimas noticias del mundo
              del cronometraje deportivo.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-8 mt-12">
            <BlogPreviewSection />
            <CalendarSection />
          </div>
        </div>
      </section>

      <StatsSection />
      <ContactSection />
    </>
  );
}
