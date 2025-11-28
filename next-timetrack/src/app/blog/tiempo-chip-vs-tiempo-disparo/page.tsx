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
                            Tiempo Chip vs. Tiempo Gunshot: ¿Cuál es la Diferencia?
                        </span>
                    </div>

                    <div className="max-w-4xl">
                        <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                            Tecnología
                        </span>
                        <h1 className="lg:text-4xl/snug text-3xl/snug mt-4 font-bold text-gray-900">
                            Tiempo Chip vs. Tiempo Gunshot: ¿Cuál es la Diferencia y Cuál se Usa en Competencias Oficiales?
                        </h1>

                        <div className="flex items-center gap-3 mt-6">
                            <div className="h-10 w-10 relative rounded-full overflow-hidden">
                                <div className="bg-gray-300 w-full h-full"></div>
                            </div>
                            <div>
                                <h6 className="text-sm font-medium text-gray-900">Miguel Cantillana</h6>
                                <p className="text-sm text-gray-500">06 Mar, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container max-w-4xl">
                    <div className="prose prose-lg prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 max-w-none">
                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            ⏳ ¿Cómo se mide el tiempo en las carreras?
                        </h2>

                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Si alguna vez has participado en una carrera o has visto los
                            resultados de un maratón, probablemente te hayas preguntado:
                        </p>

                        <ul className="list-none pl-6 text-gray-600 space-y-2 text-base mb-5">
                            <li>✅ ¿Por qué hay dos tiempos en mi resultado?</li>
                            <li>✅ ¿Cuál es el tiempo que se considera oficial?</li>
                            <li>✅ ¿Cuál es más justo para los corredores?</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            🏁 ¿Qué es el Tiempo Gunshot?
                        </h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            El tiempo gunshot es la forma tradicional de medir el tiempo en
                            carreras y maratones.
                        </p>

                        <ul className="list-none space-y-3 mb-5">
                            <li>
                                <strong>🔹 Definición:</strong> Es el tiempo que transcurre desde
                                que se da el disparo de salida hasta que el corredor cruza la
                                línea de meta.
                            </li>
                            <li>
                                <strong>🔹 Cómo se mide:</strong> Un reloj oficial comienza a
                                correr cuando suena la pistola de salida.
                            </li>
                            <li>
                                <strong>🔹 Desventaja:</strong> No considera el tiempo que tarda
                                cada corredor en cruzar la línea de salida, lo que puede generar
                                una desventaja para quienes comienzan desde atrás.
                            </li>
                        </ul>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            <strong>📌 Ejemplo:</strong> Si un corredor tarda 30 segundos en
                            cruzar la línea de salida después del disparo, su tiempo gunshot
                            incluirá esos 30 segundos adicionales.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            🎯 ¿Qué es el Tiempo Chip?
                        </h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            El tiempo chip mide el tiempo real que tarda un corredor en
                            completar la carrera, eliminando la ventaja o desventaja de la
                            posición de salida.
                        </p>

                        <ul className="list-none space-y-3 mb-5">
                            <li>
                                <strong>🔹 Definición:</strong> Es el tiempo registrado desde que
                                el corredor cruza la línea de salida hasta que cruza la meta.
                            </li>
                            <li>
                                <strong>🔹 Cómo se mide:</strong> Se usa un chip RFID que registra
                                los tiempos de paso en distintos puntos de la carrera.
                            </li>
                            <li>
                                <strong>🔹 Ventaja:</strong> Es un método más justo, ya que mide
                                el tiempo real que cada corredor tarda en recorrer la distancia.
                            </li>
                        </ul>

                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            <strong>📌 Ejemplo:</strong> Si un corredor tarda 30 segundos en
                            cruzar la línea de salida, su tiempo chip empezará a contar solo
                            desde ese momento, no desde el disparo de salida.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            ⚖️ Diferencias clave entre Tiempo Gunshot y Tiempo Chip
                        </h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Veamos las principales diferencias entre estos dos métodos de
                            cronometraje y cómo afectan a los resultados de una carrera:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-300 text-base mb-6">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-3 border border-gray-300">
                                            <strong>Característica</strong>
                                        </th>
                                        <th className="p-3 border border-gray-300">Tiempo Gunshot</th>
                                        <th className="p-3 border border-gray-300">Tiempo Chip</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Inicio de la medición</strong>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Desde el disparo de salida
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Desde que el corredor cruza la línea de salida
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Precisión</strong>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Menos preciso, afecta a los corredores más alejados
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Mide el tiempo real de cada corredor
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Uso en resultados oficiales</strong>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Competencias élite y premiaciones
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Resultados individuales y rankings de edad
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            <strong>Justicia</strong>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Puede favorecer a los primeros en salir
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            Equitativo para todos los corredores
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            🏆 ¿Cuál se usa en competencias oficiales?
                        </h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    📍 En carreras populares y amateurs:
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    Las organizaciones suelen usar el tiempo chip para proporcionar
                                    una medición precisa y justa para cada corredor. Es el tiempo
                                    más utilizado en clasificaciones por edad y tiempos personales.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    📍 En competencias élite y premiaciones:
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    Para determinar los ganadores absolutos, la mayoría de las
                                    carreras reconocen el tiempo gunshot como el tiempo oficial.
                                    Esto se debe a que en las competencias élite, los atletas
                                    inician desde la primera fila y no hay diferencias
                                    significativas de tiempo de salida.
                                </p>
                            </div>
                        </div>

                        <p className="text-base/relaxed tracking-wider text-gray-600 mt-5 mb-8">
                            <strong>📌 Ejemplo:</strong> En los Juegos Olímpicos y maratones de
                            nivel profesional, el tiempo gunshot define al ganador.
                        </p>

                        <h2 className="text-2xl font-semibold mt-10 mb-4">
                            ❓ Preguntas Frecuentes sobre Tiempo Chip y Tiempo Gunshot
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    ⏱ ¿Cuál tiempo debo tomar en cuenta para mi marca personal?
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    El tiempo chip es el más preciso para medir tu rendimiento real,
                                    ya que refleja el tiempo que tardaste en completar la carrera.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    🏅 ¿Si gano con tiempo chip, puedo reclamar un premio?
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    No necesariamente. En la mayoría de las competencias oficiales,
                                    los premios se otorgan según el tiempo gunshot.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    🏃‍♂️ ¿Todos los corredores tienen tiempo chip?
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    Sí, siempre que la carrera utilice un sistema de cronometraje
                                    con chip. Si no, solo se registrará el tiempo gunshot.
                                </p>
                            </div>
                        </div>
                        <h2 className="text-2xl font-semibold mb-4 mt-10">🚀 Conclusión</h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            El tiempo chip y el tiempo gunshot cumplen funciones diferentes en
                            el cronometraje de carreras. Mientras que el tiempo gunshot se usa
                            para definir ganadores en competencias oficiales, el tiempo chip es
                            el más justo y utilizado para medir el rendimiento personal.
                        </p>

                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Si buscas la mejor tecnología en cronometraje de carreras en Chile,
                            en Timetrack ofrecemos sistemas de cronometraje con chip RFID,
                            garantizando precisión y confiabilidad en cada evento.
                        </p>

                        <div className="bg-gray-100 p-5 rounded-lg mt-8">
                            <h3 className="text-xl font-semibold mb-3">
                                🌟 ¿Tienes una carrera próximamente?
                            </h3>
                            <p className="text-lg/relaxed tracking-wider text-gray-600">
                                Contáctanos para optimizar el cronometraje de tu carrera y brindar
                                la mejor experiencia a los corredores. Contamos con{" "}
                                <Link
                                    href="/#services"
                                    className="text-primary font-semibold hover:underline"
                                >
                                    tecnología MYLAPS BibTag de última generación
                                </Link>
                                . También puedes revisar la calidad de nuestro servicio en los{" "}
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
