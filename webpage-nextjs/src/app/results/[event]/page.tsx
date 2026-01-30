import { eventsService } from '@/services/events.service';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ event: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { event: slug } = await params;

  const event = await eventsService.getEventBySlug(slug);

  if (!event) {
    return {
      title: 'Evento no encontrado | Timetrack',
    };
  }

  return {
    title: `${event.title} - Resultados | Timetrack`,
    description: `Resultados de ${event.title} - ${event.location}`,
  };
}

export async function generateStaticParams() {
  const events = await eventsService.getAllEvents();
  return events.map((event) => ({
    event: event.slug,
  }));
}

export default async function EventPage({ params }: Props) {
  const { event: slug } = await params;

  const event = await eventsService.getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long' 
    };
    return new Date(dateStr).toLocaleDateString('es-ES', options);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/results" className="text-gray-600 hover:text-primary transition-colors">
                Resultados
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{event.title}</span>
            </div>
          </div>

          {/* Event Header */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={event.image}
                alt={event.title}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900">{event.title}</h1>
              <div className="space-y-4 text-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-calendar-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="font-semibold text-gray-900">{formatDate(event.date)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="font-semibold text-gray-900">{event.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-primary text-xl"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Participantes</p>
                    <p className="font-semibold text-gray-900">
                      {event.participants.toLocaleString('es-ES')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Resultados por Distancia</h2>

          {event.results && event.results.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.results.map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <i className="fas fa-trophy text-3xl text-primary group-hover:text-white"></i>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {result.displayName || result.distance}
                    </h3>
                    <p className="text-gray-500 mb-6">Ver clasificación completa</p>
                    <Link
                      href={`${event.link}/${result.distance}`}
                      className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium"
                    >
                      Ver Resultados
                      <i className="fas fa-arrow-right ml-2"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-xl">
              <i className="fas fa-info-circle text-4xl text-gray-400 mb-4"></i>
              <p className="text-gray-600 text-lg">
                Los resultados de este evento estarán disponibles próximamente.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Back Button */}
      <section className="py-8 border-t">
        <div className="container">
          <div className="text-center">
            <Link
              href="/results"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Volver a Resultados
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
