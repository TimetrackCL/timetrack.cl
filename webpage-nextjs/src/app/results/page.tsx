'use client';

import { useState, useEffect } from 'react';
import EventCard from '@/components/results/EventCard';
import EventFilter from '@/components/results/EventFilter';
import { Event } from '@/types/event';
import { eventsService } from '@/services/events.service';

export default function ResultsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);
  const [currentFilter, setCurrentFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadEvents = async () => {
      const data = await eventsService.getAllEvents();
      // Sort by date descending
      const sorted = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setEvents(sorted);
      setFilteredEvents(sorted);
      setLoading(false);
    };

    loadEvents();
  }, []);

  const handleFilterChange = (filter: string) => {
    setCurrentFilter(filter);
    if (filter === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.category === filter));
    }
  };

  return (
    <>
      <section className="pt-36 pb-20">
        <div className="container">
          <div className="absolute inset-0 h-[300px] bg-cover bg-no-repeat bg-center bg-[url('/assets/images/blog/hero-2.png')]">
            <div className="relative w-full h-full z-30 bg-black/10"></div>
          </div>

          <div className="relative lg:w-3/5 mx-auto z-30">
            <div className="text-center text-white">
              <h2 className="text-5xl font-semibold mb-8">Resultados</h2>
              <p className="text-base/relaxed tracking-wide">
                Resultados de los eventos deportivos que han utilizado nuestros sistemas de cronometraje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section className="py-24">
        <div className="container">
          {/* Filtros */}
          <EventFilter currentFilter={currentFilter} onFilterChange={handleFilterChange} />

          {/* Grid de Eventos */}
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Cargando eventos...</p>
            </div>
          ) : filteredEvents.length > 0 ? (
            <div id="events-container" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div id="no-events" className="text-center py-12">
              <p className="text-gray-500 text-lg">No se encontraron eventos para esta categoría</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
