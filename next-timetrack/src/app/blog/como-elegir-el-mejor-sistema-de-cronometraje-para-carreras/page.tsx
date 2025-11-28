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
                            ¿Cómo Elegir el Mejor Sistema de Cronometraje para Carreras?
                        </span>
                    </div>

                    <div className="max-w-4xl">
                        <span className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2">
                            Tecnología
                        </span>
                        <h1 className="lg:text-4xl/snug text-3xl/snug mt-4 font-bold text-gray-900">
                            ¿Cómo Elegir el Mejor Sistema de Cronometraje para Carreras?
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
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Para productoras de eventos deportivos, elegir el sistema de
                            cronometraje adecuado es una decisión estratégica que puede marcar
                            la diferencia entre una carrera bien organizada y un evento con
                            problemas de medición de tiempos. Un sistema inexacto puede generar
                            confusión, reclamos y afectar la credibilidad de una competencia.
                        </p>

                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Un buen partner de cronometraje debe garantizar:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2 text-base mb-5">
                            <li>Precisión y fiabilidad en la medición de tiempos.</li>
                            <li>Equipos y tecnologías probadas en eventos masivos.</li>
                            <li>
                                Soporte técnico especializado antes, durante y después del evento.
                            </li>
                            <li>
                                Resultados en tiempo real y fácil acceso para los participantes.
                            </li>
                        </ul>

                        <div className="my-8">
                            <Image
                                src="/assets/images/blog/como-elegir-el-mejor-sistema-de-cronometraje-para-carreras.jpg"
                                alt="como elegir el mejor sistema de cronometraje para carreras"
                                width={800}
                                height={500}
                                className="w-full rounded-lg h-auto"
                            />
                        </div>

                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            ⏳ Tipos de sistemas de cronometraje para carreras
                        </h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Existen diferentes tecnologías para el cronometraje de eventos
                            deportivos. A continuación, te explicamos los principales sistemas y
                            sus características:
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse border border-gray-300 text-base mb-6">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-3 border border-gray-300">Sistema</th>
                                        <th className="p-3 border border-gray-300">Ventajas</th>
                                        <th className="p-3 border border-gray-300">Desventajas</th>
                                        <th className="p-3 border border-gray-300">Mejor para</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            🔹 Cronometraje Manual
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <ul className="list-none space-y-1">
                                                <li>✅ Uso de cronómetros operados por jueces</li>
                                                <li>✅ Bajo costo y fácil implementación</li>
                                            </ul>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <p>❌ Sujeto a errores humanos y menos preciso</p>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <p>📌 Entrenamientos o eventos pequeños</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            🔹 Cronometraje con Fotocélulas
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <ul className="list-none space-y-1">
                                                <li>✅ Sensores láser que detectan el cruce de meta</li>
                                                <li>✅ Alta precisión en carreras de velocidad</li>
                                            </ul>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <p>❌ No mide tiempos intermedios</p>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <p>📌 Pruebas de atletismo en pista</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-gray-300">
                                            🔹 Cronometraje con Chips RFID
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <ul className="list-none space-y-1">
                                                <li>✅ Usa chips en el dorsal</li>
                                                <li>✅ Registra tiempos intermedios y finales</li>
                                                <li>✅ Automatización y resultados en tiempo real</li>
                                                <li>✅ Certificación para eventos masivos</li>
                                            </ul>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <p>-</p>
                                        </td>
                                        <td className="p-3 border border-gray-300">
                                            <p>📌 Maratones, triatlones y eventos masivos</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-semibold mt-10 mb-4">
                            ⚖️ Factores clave para elegir un partner en cronometraje
                        </h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-8">
                            Para productoras de eventos, no solo es importante elegir el sistema
                            correcto, sino también un proveedor de cronometraje con experiencia.
                            Aquí te dejamos algunos factores clave:
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3">
                            🎯 1. Tecnología Certificada y Resultados Comprobados
                        </h3>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-8">
                            Asegúrate de que el sistema ha sido utilizado en eventos
                            internacionales y cuenta con certificaciones de calidad.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3">
                            💰 2. Costos y Presupuesto
                        </h3>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-8">
                            Los sistemas varían en precio. Es importante evaluar la relación
                            costo-beneficio y el impacto en la calidad del evento.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3">
                            🏃‍♂️ 3. Capacidad para Eventos Masivos
                        </h3>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-8">
                            Verifica si el proveedor tiene experiencia en eventos de gran escala
                            y puede gestionar la lectura de miles de chips en simultáneo.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3">
                            🌍 4. Soporte Técnico Especializado
                        </h3>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-8">
                            El cronometraje debe contar con un equipo que garantice asistencia
                            técnica antes, durante y después del evento.
                        </p>

                        <h3 className="text-xl font-semibold mt-8 mb-3">
                            🚀 5. Resultados en Tiempo Real y Accesibilidad
                        </h3>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-8">
                            Los corredores esperan obtener sus tiempos rápidamente. Un buen
                            sistema debe permitir la publicación en vivo de los resultados.
                        </p>

                        <h2 className="text-2xl font-semibold mt-6 mb-4">
                            📊 Comparación de sistemas
                        </h2>
                        <table className="w-full text-left border-collapse border border-gray-300 text-base">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-2 border border-gray-300">Característica</th>
                                    <th className="p-2 border border-gray-300">
                                        Cronometraje Manual
                                    </th>
                                    <th className="p-2 border border-gray-300">Fotocélulas</th>
                                    <th className="p-2 border border-gray-300">Chip RFID</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <strong>Precisión</strong>
                                    </td>
                                    <td className="p-2 border border-gray-300">Media</td>
                                    <td className="p-2 border border-gray-300">Alta</td>
                                    <td className="p-2 border border-gray-300">Muy alta</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <strong>Automatización</strong>
                                    </td>
                                    <td className="p-2 border border-gray-300">No</td>
                                    <td className="p-2 border border-gray-300">Parcial</td>
                                    <td className="p-2 border border-gray-300">Total</td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <strong>Certificación</strong>
                                    </td>
                                    <td className="p-2 border border-gray-300">No</td>
                                    <td className="p-2 border border-gray-300">No</td>
                                    <td className="p-2 border border-gray-300">
                                        Sí, depende del proveedor
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 border border-gray-300">
                                        <strong>Mejor para</strong>
                                    </td>
                                    <td className="p-2 border border-gray-300">
                                        Eventos pequeños
                                    </td>
                                    <td className="p-2 border border-gray-300">Atletismo</td>
                                    <td className="p-2 border border-gray-300">
                                        Maratones y triatlones
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <h2 className="text-2xl font-semibold mt-10 mb-4">
                            ❓ Preguntas Frecuentes sobre Sistemas de Cronometraje
                        </h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    ⏱ ¿Cuál es el mejor sistema de cronometraje para eventos
                                    masivos?
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    Los sistemas RFID certificados como BibTag de MyLaps son la
                                    mejor opción para carreras con miles de participantes.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    🏅 ¿Por qué es importante elegir un partner con experiencia en
                                    eventos grandes?
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    Un proveedor con experiencia garantiza que el sistema funcione
                                    correctamente, evitando problemas técnicos y asegurando lecturas
                                    precisas.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mb-2">
                                    🏃‍♂️ ¿Cuál es el costo de un sistema de cronometraje profesional?
                                </h3>
                                <p className="text-base/relaxed tracking-wider text-gray-600">
                                    Depende del número de participantes, la tecnología y el
                                    proveedor. Solicita una cotización con Timetrack para una
                                    solución personalizada.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold mb-4 mt-10">🚀 Conclusión</h2>
                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            Para productoras de eventos deportivos, elegir el mejor sistema de
                            cronometraje es clave para garantizar resultados precisos y una
                            excelente experiencia para corredores y organizadores. Si buscas un
                            sistema confiable, el cronometraje con chip RFID certificado es la
                            mejor solución.
                        </p>

                        <p className="text-base/relaxed tracking-wider text-gray-600 mb-5">
                            En Timetrack, ofrecemos tecnología de vanguardia en cronometraje
                            deportivo en Chile, con resultados comprobados en eventos masivos.
                        </p>

                        <div className="bg-gray-100 p-5 rounded-lg mt-8">
                            <h3 className="text-xl font-semibold mb-3">
                                🌟 ¿Tienes una carrera próximamente?
                            </h3>
                            <p className="text-lg/relaxed tracking-wider text-gray-600">
                                Contáctanos para asegurar el mejor cronometraje en tu próximo
                                evento deportivo. Contamos con{" "}
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
