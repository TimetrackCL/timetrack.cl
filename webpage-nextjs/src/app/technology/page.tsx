import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sistema de Cronometraje BibTag MyLaps | Tecnología Deportiva | Timetrack',
  description:
    'Descubre el sistema de cronometraje BibTag de MyLaps: decodificadores portátiles y antenas modulares que garantizan la máxima precisión en eventos deportivos masivos.',
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-36 pb-24 relative">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5">
              Cronometraje Deportivo{' '}
              <span className="relative z-0 after:bg-primary/30 after:-z-10 after:absolute md:after:h-6 sm:after:h-5 after:h-4 after:w-full after:bottom-0 after:end-0">
                Bibtag
              </span>
            </h1>
            <p className="sm:text-lg text-gray-500">
              Como empresa líder en cronometraje deportivo en Chile, utilizamos el sistema BibTag de
              MYLAPS, la solución más avanzada para el cronometraje de carreras masivas, ofreciendo
              la mayor velocidad de lectura de la industria.
            </p>
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section>
        <div
          className="flex items-center md:py-80 py-44 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/hero/bib-tag-machine.jpg')" }}
        ></div>
      </section>

      {/* Features Section */}
      <section className="lg:py-24 py-16">
        <div className="container" data-aos="fade-up">
          <div className="grid lg:grid-cols-2 gap-14 mb-16">
            <div className="order-2 lg:order-1">
              <h1 className="text-3xl mb-7">BibTag Portable Decoder: Sistema de Cronometraje para Carreras</h1>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                Como parte fundamental de nuestro sistema de cronometraje deportivo, el decodificador
                se conecta a las alfombras y decodifica las señales de los BibTag, extrayendo los
                identificadores de los atletas y sus tiempos con precisión profesional. Los
                decodificadores portátiles cuentan con batería integrada y pueden procesar hasta 50
                lecturas de chips BibTag por segundo.
              </p>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                Diseñado específicamente para empresas de cronometraje deportivo que gestionan eventos
                masivos, nuestro sistema puede manejar una alta densidad de participantes con máxima
                precisión.
              </p>
              <p className="text-sm/relaxed tracking-wider text-gray-600 font-bold mb-7">
                Especificaciones técnicas
              </p>
              <ul className="text-sm/relaxed tracking-wider text-gray-600 mb-7 list-disc pl-4">
                <li>Dimensions: 46.5 x 36.5 x 18 cm / 18.3 x 14.4 x 7.1in</li>
                <li>Internal Battery voltage/capacity: 12.0V / 0Ah</li>
                <li>Operating time 4-meter decoder 10 hours</li>
                <li>Maximum chip passing speed 40 km/h (2 mph)</li>
                <li>Max. unique chip detection 50/sec</li>
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="/assets/images/features/Bibtag-decoder-300x300_-_transparente.png"
                alt="BibTag Decoder"
                className="w-full"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-14">
            <div className="order-2 lg:order-1">
              <img
                src="/assets/images/features/MYLAPS_Mat-tran.png"
                alt="Antenas modulares para BibTag Decoder"
                className="w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-3xl mb-7">Antenas modulares (Mats)</h1>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5 ">
                Las alfombras de detección se colocan en la salida, en la meta y en los puntos de
                control de tiempo intermedios.
              </p>
              <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                Las alfombras hacen la función de antenas del sistema y detectan las señales que
                envían los distintivos BibTag. Ofrecemos alfombras modulares que le permitirán crear
                puntos de cronometraje de entre 1 y 8 metros de anchura por sistema.
              </p>
              <p className="text-sm/relaxed tracking-wider text-gray-600 font-bold mb-7">
                Especificaciones técnicas
              </p>
              <ul className="text-sm/relaxed tracking-wider text-gray-600 mb-7 list-disc pl-4">
                <li>Specifications (of a single mat):</li>
                <li>Dimensions: 105 x 75 x 3 cm / 41.3 x 29.5 x 1.2 in</li>
                <li>Weight: 10 kg / 22.05 lb</li>
                <li>Anti slip</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">¿Listo para cronometrar tu próximo evento?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Contáctanos para obtener más información sobre nuestros sistemas de cronometraje
              profesional con tecnología BibTag de MyLaps.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium"
            >
              Contactar ahora
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
