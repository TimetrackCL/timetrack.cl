import Image from "next/image";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";

export default function BlogPost() {
    return (
        <main>
            <section className="pt-40 pb-20 bg-gray-50">
                <div className="container">
                    <div className="flex flex-wrap items-center gap-2 text-sm mb-8">
                        <Link href="/" className="text-gray-500 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/blog" className="text-gray-500 hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-primary">
                            Cronometraje con Chip: ¿Cómo Funciona y Por Qué Es la Mejor Opción?
                        </span>
                    </div>

                    <div className="max-w-4xl">
                        <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                            Tecnología
                        </span>
                        <h1 className="lg:text-4xl/snug text-3xl/snug mt-4 font-bold text-gray-900">
                            Cronometraje de Carreras con Chip: ¿Cómo Funciona y Por Qué Es la Mejor Opción?
                        </h1>

                        <div className="flex items-center gap-3 mt-6">
                            <div className="h-10 w-10 relative rounded-full overflow-hidden">
                                {/* Placeholder for avatar if not available or use generic */}
                                <div className="bg-gray-300 w-full h-full"></div>
                            </div>
                            <div>
                                <h6 className="text-sm font-medium text-gray-900">Miguel Cantillana</h6>
                                <p className="text-sm text-gray-500">01 Mar, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
                        <p className="text-lg/relaxed tracking-wider text-gray-600 mb-5">
                            ✨ El cronometraje con chip es un sistema basado en tecnología RFID
                            (Identificación por Radiofrecuencia) que permite medir el tiempo
                            exacto de cada corredor en una competencia.
                        </p>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            🔄 ¿Cómo funciona?
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                            <li>
                                <strong>📌 Asignación del chip:</strong> Cada corredor recibe un
                                chip RFID, integrado en el dorsal o zapatilla.
                            </li>
                            <li>
                                <strong>🎯 Paso por puntos de control:</strong> Al cruzar una
                                alfombra o antena, el chip transmite una señal con su
                                identificación.
                            </li>
                            <li>
                                <strong>📊 Registro de tiempos:</strong> El sistema captura y
                                almacena los tiempos en una base de datos.
                            </li>
                            <li>
                                <strong>🚀 Resultados en tiempo real:</strong> Los organizadores
                                acceden a clasificaciones automáticas y precisas.
                            </li>
                        </ul>
                        <div className="my-8">
                            <Image
                                src="/assets/images/blog/post-maquina-bibtag-cronometrando-carrera.jpg"
                                alt="Ejemplo de cronometraje en tiempo real"
                                width={800}
                                height={500}
                                className="rounded-md w-full h-auto"
                            />
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Ejemplo de cronometraje en tiempo real
                            </p>
                        </div>
                        <h2 className="text-2xl font-semibold mt-10 mb-4">
                            🔮 Beneficios del cronometraje con chip
                        </h2>
                        <div className="bg-gray-100 p-6 rounded-md mb-6">
                            <p className="text-lg text-gray-600">
                                📊 Los chips RFID garantizan tiempos exactos y minimizan errores.
                                Además, permiten medir tiempos intermedios, automatizar procesos y
                                mejorar la experiencia del corredor.
                            </p>
                        </div>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            🌟 Tipos de chips para carreras
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                            <li>
                                <strong>✅ Chips activos:</strong> Funcionan con batería interna y
                                son utilizados en triatlones y ciclismo.
                            </li>
                            <li>
                                <strong>✅ Chips pasivos (UHF RFID):</strong> Sin batería,
                                activados por antenas UHF, ideales para maratones.
                            </li>
                        </ul>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            📝 Diferencia entre tiempo chip y tiempo gunshot
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                            <li>
                                <strong>🎯 Tiempo gunshot:</strong> Se mide desde el disparo de
                                salida hasta la meta.
                            </li>
                            <li>
                                <strong>🕒 Tiempo chip:</strong> Se mide desde que el corredor
                                cruza la línea de salida.
                            </li>
                        </ul>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            🔎 Preguntas frecuentes
                        </h2>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 text-lg">
                            <li>
                                <strong>🤔 ¿Cuál es el mejor sistema de cronometraje?</strong> Los
                                chips pasivos son los más utilizados por su precisión.
                            </li>
                            <li>
                                <strong>👨‍🎓 ¿Cómo elegir un proveedor?</strong> Busca experiencia,
                                tecnología confiable y procesamiento en tiempo real.
                            </li>
                            <li>
                                <strong>💰 ¿Cuánto cuesta?</strong> Depende del evento y cantidad
                                de corredores.{" "}
                                <Link href="/#contact" className="text-primary font-semibold">
                                    Solicita una cotización.
                                </Link>
                            </li>
                        </ul>

                        <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 my-10">
                            <Image src="/assets/images/blog/posts/1-photo-article.jpg" alt="Article image 1" width={400} height={300} className="rounded w-full h-auto" />
                            <Image src="/assets/images/blog/posts/2-photo-article.jpg" alt="Article image 2" width={400} height={300} className="rounded w-full h-auto" />
                            <Image src="/assets/images/blog/posts/3-photo-article.jpg" alt="Article image 3" width={400} height={300} className="rounded w-full h-auto" />
                            <Image src="/assets/images/blog/posts/4-photo-article.jpg" alt="Article image 4" width={400} height={300} className="rounded w-full h-auto" />
                        </div>

                        <h2 className="text-2xl font-semibold mb-4">
                            Conclusión: El futuro del cronometraje deportivo
                        </h2>

                        <p className="text-lg/relaxed tracking-wider text-gray-600 mb-5">
                            📢 El cronometraje con chip ha revolucionado la medición del tiempo
                            en eventos deportivos, ofreciendo una precisión sin precedentes y
                            una experiencia mejorada tanto para organizadores como para atletas.
                            Esta tecnología no solo garantiza resultados exactos al milisegundo,
                            sino que también permite:
                        </p>

                        <ul className="list-disc list-inside text-lg/relaxed tracking-wider text-gray-600 mb-5 space-y-2">
                            <li>Seguimiento en tiempo real de los participantes</li>
                            <li>Resultados instantáneos y clasificaciones automáticas</li>
                            <li>Análisis detallado del rendimiento por segmentos</li>
                            <li>Mayor seguridad y control de la carrera</li>
                            <li>Experiencia profesional para eventos de cualquier tamaño</li>
                        </ul>

                        <p className="text-lg/relaxed tracking-wider text-gray-600 mb-5">
                            💡 La inversión en un sistema de cronometraje profesional con chip
                            no solo eleva la calidad técnica de tu evento, sino que también
                            aumenta la satisfacción de los participantes y la credibilidad de tu
                            competencia.
                        </p>

                        <p className="text-lg/relaxed tracking-wider text-gray-600 mb-5">
                            🏃‍♂️ Ya sea que estés organizando una maratón urbana, una carrera de
                            trail running o un triatlón, la tecnología de cronometraje con chip
                            es esencial para el éxito de tu evento deportivo.
                        </p>

                        <p className="text-lg/relaxed tracking-wider text-gray-600 mb-5">
                            🚀 Si estás planificando un evento deportivo y buscas la mejor
                            solución en cronometraje de carreras en Chile,{" "}
                            <Link href="/#contact" className="text-primary font-semibold hover:underline">
                                contáctanos en Timetrack
                            </Link>
                            . Nuestro equipo de expertos te ayudará a implementar un sistema de
                            cronometraje profesional que llevará tu competencia al siguiente
                            nivel.
                        </p>

                        <div className="bg-gray-100 p-5 rounded-lg mt-8">
                            <h3 className="text-xl font-semibold mb-3">
                                ¿Necesitas más información?
                            </h3>
                            <p className="text-lg/relaxed tracking-wider text-gray-600">
                                Descubre nuestros{" "}
                                <Link
                                    href="/#services"
                                    className="text-primary font-semibold hover:underline"
                                >
                                    servicios de cronometraje con tecnología MYLAPS BibTag
                                </Link>{" "}
                                o revisa nuestros{" "}
                                <a
                                    href="https://results.sporthive.com/for/timetrack"
                                    target="_blank"
                                    rel="noopener"
                                    className="text-primary font-semibold hover:underline"
                                >
                                    resultados de eventos anteriores
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}
