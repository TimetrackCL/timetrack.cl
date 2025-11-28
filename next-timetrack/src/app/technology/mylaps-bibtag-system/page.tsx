import Image from "next/image";
import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";

export default function MylapsBibtagSystem() {
    return (
        <main>
            <section className="pt-36 pb-24 relative">
                <div className="container">
                    <div className="text-center">
                        <h1 className="text-3xl/tight sm:text-4xl/tight lg:text-5xl/tight font-semibold mb-5">
                            Cronometraje Deportivo
                            <span className="relative z-0 after:bg-primary/30 after:-z-10 after:absolute md:after:h-6 sm:after:h-5 after:h-4 after:w-full after:bottom-0 after:end-0 ml-2">
                                Bibtag
                            </span>
                        </h1>
                        <p className="sm:text-lg text-gray-500 max-w-4xl mx-auto">
                            Como empresa líder en cronometraje deportivo en Chile, utilizamos el
                            sistema BibTag de MYLAPS, la solución más avanzada para el
                            cronometraje de carreras masivas, ofreciendo la mayor velocidad de
                            lectura de la industria.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <div
                    className="flex items-center md:py-80 py-44 bg-fixed bg-center bg-no-repeat bg-cover"
                    style={{
                        backgroundImage: "url('/assets/images/hero/bib-tag-machine.jpg')",
                    }}
                ></div>
            </section>

            <section className="lg:py-24 py-16">
                <div className="container" data-aos="fade-up">
                    <div className="grid lg:grid-cols-2 gap-14 mb-20">
                        <div className="order-2 lg:order-1">
                            <h1 className="text-3xl mb-7">
                                BibTag Portable Decoder: Sistema de Cronometraje para Carreras
                            </h1>
                            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                                Como parte fundamental de nuestro sistema de cronometraje
                                deportivo, el decodificador se conecta a las alfombras y
                                decodifica las señales de los BibTag, extrayendo los
                                identificadores de los atletas y sus tiempos con precisión
                                profesional. Los decodificadores portátiles cuentan con batería
                                integrada y pueden procesar hasta 50 lecturas de chips BibTag por
                                segundo.
                            </p>
                            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                                Diseñado específicamente para empresas de cronometraje deportivo
                                que gestionan eventos masivos, nuestro sistema puede manejar una
                                alta densidad de participantes con máxima precisión.
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

                        <div className="order-1 lg:order-2 flex justify-center items-center">
                            <Image
                                src="/assets/images/features/Bibtag-decoder-300x300_-_transparente.png"
                                alt="BibTag Decoder"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-14">
                        <div className="order-2 lg:order-1 flex justify-center items-center">
                            <Image
                                src="/assets/images/features/MYLAPS_Mat-tran.png"
                                alt="Antenas modulares para BibTag Decoder"
                                width={400}
                                height={300}
                            />
                        </div>

                        <div className="order-1 lg:order-2">
                            <h1 className="text-3xl mb-7">Antenas modulares (Mats)</h1>
                            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5 ">
                                Las alfombras de detección se colocan en la salida, en la meta y
                                en los puntos de control de tiempo intermedios.
                            </p>
                            <p className="text-sm/relaxed tracking-wider text-gray-600 mb-5">
                                Las alfombras hacen la función de antenas del sistema y detectan
                                las señales que envían los distintivos BibTag. Ofrecemos alfombras
                                modulares que le permitirán crear puntos de cronometraje de entre
                                1 y 8 metros de anchura por sistema.
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

            <section className="bg-gradient-to-r from-gray-200/50 to-gray-100/50 relative lg:py-24 py-16">
                <div className="absolute top-0 inset-x-0 hidden sm:block">
                    <Image
                        src="/assets/images/shapes/white-wave.svg"
                        alt="white-wave-svg"
                        className="w-full -scale-x-100"
                        width={1920}
                        height={100}
                    />
                </div>

                <div className="py-10">
                    <div className="container" data-aos="fade-up">
                        <div className="text-center">
                            <span className="text-sm bg-primary/10 text-primary rounded-full px-3 py-1">
                                Tags UHF
                            </span>
                            <h2 className="text-3xl/tight font-medium mt-1">Chips MyLaps</h2>
                            <p>Una solucion adaptada a tu deporte</p>
                        </div>

                        <div className="mt-14">
                            <div className="grid xl:grid-cols-2 sm:grid-cols-2 text-left gap-10 lg:gap-6">
                                <div>
                                    <Image
                                        src="/assets/images/features/tags-thintag-trans-v2.png"
                                        alt="Tags ThinTag"
                                        className="w-full -scale-x-100"
                                        width={400}
                                        height={300}
                                    />
                                    <h2 className="mt-3 mb-1 text-xl font-semibold">ThinTag</h2>
                                    <p className="text-gray-500 mb-3">
                                        El ThinTag de MYLAPS es una solución de cronometraje en UHF
                                        fiable que reduce los costes de manipulación y envío gracias a
                                        su finísimo diseño (2 mm).
                                    </p>
                                    <p className="text-gray-500">
                                        El ThinTag utiliza un separador hecho de un material esponjoso
                                        que solo se expande cuando absorbe fluidos. Esta tecnología es
                                        única en el mercado y está patentada por MYLAPS.
                                    </p>
                                </div>
                                <div>
                                    <Image
                                        src="/assets/images/features/tags-multisport-V2.png"
                                        alt="Tags MultiSport"
                                        className="w-full -scale-x-100"
                                        width={400}
                                        height={300}
                                    />
                                    <h2 className="mt-3 mb-1 text-xl font-semibold">
                                        MultiSport Tag{" "}
                                    </h2>
                                    <p className="text-gray-500 mb-3">
                                        El MultiSports Tag se ha diseñado y optimizado para triatlones
                                        y carreras en el barro y funciona con el sistema de
                                        cronometraje BibTag de MYLAPS.
                                    </p>
                                    <p className="text-gray-500">
                                        Los distintivos se pueden llevar puestos debajo de un traje de
                                        neopreno: los resultados están garantizados, ya que tienen 3
                                        distintivos de cronometraje integrados.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Clients />
            <ContactSection />
        </main>
    );
}
