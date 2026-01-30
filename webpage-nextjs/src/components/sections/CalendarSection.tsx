export default function CalendarSection() {
  const events = [
    {
      day: '26',
      month: 'OCT',
      title: 'Stgo10K by Asics',
      location: 'Ñuñoa',
      time: '07:30 AM',
      link: 'https://stgo10k.cl/',
    },
    {
      day: '09',
      month: 'NOV',
      title: 'Corriendo al Centenario UCV',
      location: 'Valparaíso',
      time: '08:30 AM',
      link: '#',
    },
    {
      day: '30',
      month: 'NOV',
      title: 'Maratón de Molina',
      location: 'Molina',
      time: '07:30 AM',
      link: 'https://maratondemolina.cl/',
    },
    {
      day: '21',
      month: 'DIC',
      title: 'Maratón del Mataquito',
      location: 'Rauco',
      time: '06:30 AM',
      link: 'https://maratondemolina.cl/',
    },
  ];

  return (
    <section className="w-full">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Calendario</h2>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between border-b border-gray-200 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xl text-gray-600">Proximos Eventos</span>
            </div>
          </div>

          <div className="space-y-4 mt-4">
            {events.map((event, index) => (
              <a
                key={index}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary/10 rounded-lg flex-shrink-0">
                    <span className="text-xl font-bold text-primary">{event.day}</span>
                    <span className="text-xs text-gray-600">{event.month}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-gray-600">
                        <i className="fas fa-map-marker-alt mr-1"></i>
                        {event.location}
                      </span>
                      <span className="text-sm text-gray-600">
                        <i className="fas fa-clock mr-1"></i>
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
