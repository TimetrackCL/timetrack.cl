import Image from 'next/image';

export default function ClientsSection() {
  const clients = [
    { name: 'Santiago 21K', image: '/assets/images/brands/carrera-stgo-21k.jpg' },
    { name: 'Corrida Hogar de Cristo', image: '/assets/images/brands/carrera-hdc.jpg' },
    { name: 'Corrida PDI 2024', image: '/assets/images/brands/carrera-pdi-2024.jpg' },
    { name: 'Corrida Mountain Trail Fest 2024', image: '/assets/images/brands/corrida-mountain-trail-fest.jpg' },
    { name: 'Futangue challenge', image: '/assets/images/brands/carrera-futangue-challenge.jpg' },
    { name: 'Corrida Carabineros', image: '/assets/images/brands/carrera-corrida-carabineros.jpg' },
    { name: 'Challenge Puerto Varas', image: '/assets/images/brands/carrera-challenge-puerto-varas.jpg' },
  ];

  return (
    <section className="xl:py-16 py-16">
      <div className="container" data-aos="fade-up" data-aos-duration="1000">
        <div className="text-center">
          <div>
            <p className="font-semibold text-[1.3rem]">
              Cronometrando Éxitos: <br />
              Quienes han Confiado en Nosotros.
            </p>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4 mt-7">
              {clients.map((client, index) => (
                <div key={index}>
                  <img
                    src={client.image}
                    className="w-42 grayscale hover:grayscale-0 transition-all duration-300"
                    alt={client.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
