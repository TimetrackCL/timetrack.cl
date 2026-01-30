import Link from 'next/link';
import { Event } from '@/types/event';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const categoryColors = {
    running: 'bg-blue-500/10 text-blue-600',
    triatlon: 'bg-purple-500/10 text-purple-600',
    ciclismo: 'bg-green-500/10 text-green-600',
    trail: 'bg-orange-500/10 text-orange-600',
  };

  const categoryNames = {
    running: 'Running',
    triatlon: 'Triatlón',
    ciclismo: 'Ciclismo',
    trail: 'Trail Running',
  };

  const formatDate = (dateStr: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateStr).toLocaleDateString('es-ES', options);
  };

  const externalIcon = event.linkType === 'external' ? <i className="fas fa-external-link-alt ml-1 text-xs"></i> : null;

  let badgeHTML = null;
  let buttonContent = null;
  let eventLink = event.link;
  let targetAttr = '';

  switch (event.status) {
    case 'upcoming':
      badgeHTML = (
        <div className="absolute top-4 right-4">
          <span className="bg-gray-800/80 text-white font-semibold rounded-full text-xs py-1.5 px-3">
            <i className="fas fa-clock mr-1"></i> Próximamente
          </span>
        </div>
      );
      buttonContent = (
        <button
          disabled
          className="inline-flex items-center justify-center w-full bg-gray-300 text-gray-500 font-medium rounded-lg py-2.5 px-4 cursor-not-allowed"
        >
          <i className="fas fa-clock mr-2"></i>
          Resultados Próximamente
        </button>
      );
      break;

    case 'live':
      badgeHTML = (
        <div className="absolute top-4 right-4">
          <span className="bg-red-600 text-white font-semibold rounded-full text-xs py-1.5 px-3 animate-pulse">
            <i className="fas fa-circle mr-1 text-[0.5rem]"></i> EN VIVO
          </span>
        </div>
      );
      if (event.linkType === 'external' && event.liveLink) {
        eventLink = event.liveLink;
        targetAttr = '_blank';
      } else {
        eventLink = event.link + '/live';
      }
      buttonContent = (
        <>
          <i className="fas fa-circle mr-2 text-xs animate-pulse"></i>
          Ver en Vivo {externalIcon}
        </>
      );
      break;

    case 'finished':
      badgeHTML = null;
      targetAttr = event.linkType === 'external' ? '_blank' : '';
      buttonContent = (
        <>
          Ver Resultados {externalIcon}
        </>
      );
      break;
  }

  return (
    <div
      className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/images/hero/hero-1.jpg';
          }}
        />
        <div className="absolute top-4 left-4">
          <span className={`${categoryColors[event.category]} font-semibold rounded-full text-xs py-1.5 px-3`}>
            {categoryNames[event.category]}
          </span>
        </div>
        {badgeHTML}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-start">
          {event.title}
        </h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-calendar-alt w-5 text-primary"></i>
            <span>{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-map-marker-alt w-5 text-primary"></i>
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <i className="fas fa-users w-5 text-primary"></i>
            <span>{event.participants.toLocaleString('es-ES')} participantes</span>
          </div>
        </div>
        {event.status === 'upcoming' ? (
          buttonContent
        ) : (
          <Link
            href={eventLink}
            target={targetAttr}
            rel={targetAttr ? 'noopener noreferrer' : ''}
            className={`inline-flex items-center justify-center w-full font-medium rounded-lg py-2.5 px-4 transition-colors ${
              event.status === 'live'
                ? 'bg-red-600 text-white hover:bg-red-700'
                : 'bg-orange-400 text-white hover:bg-orange-500'
            }`}
          >
            {buttonContent}
          </Link>
        )}
      </div>
    </div>
  );
}
