import Link from 'next/link';
import Image from 'next/image';

export default function TechnologySection() {
  return (
    <section className="xl:py-24 py-16 overflow-x-hidden" id="technology">
      <div className="container">
        <div>
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-sm bg-red-500/10 text-red-600 rounded-full px-3 py-1">
                Tecnología
              </span>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">BibTag System</h1>
              <p className="text-gray-500">
                El sistema de cronometraje BibTag es la solución de <strong>MYLAPS</strong> adecuada
                para eventos masivos con chips pasivos y con la mayor velocidad de lectura de la
                industria.
              </p>
              <ul className="text-gray-500 list-disc pl-4 pt-4">
                <li>
                  Funciona para eventos de <strong>running</strong>, <strong>cycling</strong>,{' '}
                  <strong>triathlon</strong> y <strong>cross-country</strong>
                </li>
                <li>
                  Las velocidades de lectura más altas de la industria (Detection rate: {'>'}99.80%)
                </li>
                <li>
                  BibTag System cumple la norma de la <strong>IAAF</strong>
                </li>
                <li>
                  Sistema de lectura es pasivo a través de <strong>UHF</strong>
                </li>
              </ul>

              <div className="mt-12">
                <Link
                  href="/technology"
                  className="border border-primary text-primary rounded-md hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4 inline-flex items-center"
                >
                  Conoce más <i className="fa-solid fa-arrow-right ms-2"></i>
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
              <img
                src="/assets/images/features/MyLaps-bibtag-decoder.jpg"
                alt="BibTag Decoder"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="xl:py-24 py-16">
          <div className="grid lg:grid-cols-2 grid-cols-1 2xl:gap-24 gap-10 items-center">
            <div>
              <img
                src="/assets/images/features/timetrack-livea-pp.png"
                data-aos="fade-right"
                data-aos-duration="1500"
                alt="Timetrack Live App"
                className="w-full"
              />
            </div>

            <div>
              <h1 className="text-3xl/tight font-medium mt-3 mb-4">Timetrack Live</h1>
              <p className="text-gray-500">
                Vive la emoción de las carreras con la app de <strong>Timetrack</strong>. Accede a
                resultados en tiempo real, repeticiones en video, comparte tu experiencia y sigue a
                tus atletas favoritos. Descárgala ya.
              </p>

              <div className="flex justify-center space-x-4 mt-12">
                <a
                  href="https://apps.apple.com/cl/app/timetrack-live/id6445912533?l=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center mt-3 text-white bg-black w-60 h-14 rounded-xl hover:bg-gray-900 transition-all"
                >
                  <div className="mr-3">
                    <svg viewBox="0 0 384 512" width="30">
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">Download on the</div>
                    <div className="-mt-1 font-sans text-sm md:text-xl font-semibold">
                      Mac App Store
                    </div>
                  </div>
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sportmaniac_live_app_android.timetrack_live&pli=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-48 mt-3 text-white bg-black rounded-lg h-14 hover:bg-gray-900 transition-all"
                >
                  <div className="mr-3">
                    <svg viewBox="30 336.7 120.9 129.2" width="30">
                      <path
                        fill="#FFD400"
                        d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                      ></path>
                      <path
                        fill="#FF3333"
                        d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#48FF48"
                        d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                      ></path>
                      <path
                        fill="#3BCCFF"
                        d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs">GET IT ON</div>
                    <div className="-mt-1 font-sans text-sm md:text-xl font-semibold">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
