export default function StatsSection() {
  const stats = [
    {
      number: '+60',
      title: 'Carreras cronometradas',
      description: 'A lo largo de todo Chile',
    },
    {
      number: '+50K',
      title: 'Participantes',
      description: 'Cronometrados con nuestra tecnología',
    },
    {
      number: '+100K',
      title: 'Lecturas de chips',
      description: 'En diferentes disciplinas',
    },
    {
      number: '+200M',
      title: 'Inscripciones procesadas',
      description: 'En nuestras plataformas de inscripciones',
    },
  ];

  return (
    <section className="py-24 bg-slate-500/10 relative" data-aos="fade-up">
      <div className="absolute top-0 inset-x-0 hidden sm:block">
        <img
          src="/assets/images/shapes/white-wave.svg"
          alt="svg"
          className="w-full -scale-x-100"
        />
      </div>
      <div className="container relative">
        <div className="text-center">
          <span className="text-sm font-medium py-1 px-3 rounded-full text-primary bg-primary/10">
            Estadísticas
          </span>
          <h1 className="text-3xl font-medium my-3">Timetrack en Números</h1>
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 mt-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-3xl">{stat.number}</span>
              <p className="font-semibold mt-3">{stat.title}</p>
              <p className="text-slate-800 mt-1">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
