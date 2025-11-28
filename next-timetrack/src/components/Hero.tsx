"use client";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
    return (
        <section
            className="relative min-h-screen pt-44 pb-44 bg-gradient-to-t from-slate-500/10 overflow-x-hidden hero-section"
            id="home"
        >
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center max-w-7xl mx-auto">
                    <div>
                        <h1 className="md:text-5xl/tight text-3xl font-semibold text-white mb-7 mt-16">
                            Especialistas en cronometraje deportivo en Chile
                            <br /> para{" "}
                            <span className="capitalize relative after:absolute after:inset-x-0 after:bottom-2 after:bg-orange-400/40 after:h-5 after:w-full after:-z-10 after:z-[1]">
                                <Typewriter
                                    words={["Running", "Trail Running", "Triatlon", "Ciclismo"]}
                                    loop={0}
                                    cursor
                                    cursorStyle="_"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={2000}
                                />
                            </span>
                        </h1>

                        <p className="text-white/80 leading-7 text-[1.2rem]">
                            Como empresa líder de cronometraje deportivo, nos especializamos en
                            sistemas de cronometraje para carreras utilizando la avanzada
                            tecnología <strong>BibTag de MyLaps</strong>.
                        </p>
                        <div className="flex flex-wrap items-center gap-5 mt-16">
                            <Link
                                href="#contact"
                                className="bg-primary text-white rounded-md hover:outline hover:outline-primary/40 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4 flex items-center"
                            >
                                Cotiza Ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
