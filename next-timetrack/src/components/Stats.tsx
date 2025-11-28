"use client";
import CountUp from "react-countup";
import Image from "next/image";

export default function Stats() {
    return (
        <section className="py-24 bg-slate-500/10 relative" data-aos="fade-up">
            <div className="absolute top-0 inset-x-0 hidden sm:block">
                <Image
                    src="/assets/images/shapes/white-wave.svg"
                    alt="svg"
                    className="w-full -scale-x-100"
                    width={1920}
                    height={100}
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
                    <div className="text-center">
                        <span className="text-3xl font-bold">
                            <CountUp end={60} prefix="+" duration={2.5} enableScrollSpy />
                        </span>
                        <p className="font-semibold mt-3">Carreras cronometradas</p>
                        <p className="text-slate-800 mt-1">A lo largo de todo Chile</p>
                    </div>

                    <div className="text-center">
                        <span className="text-3xl font-bold">
                            <CountUp end={50} prefix="+" suffix="K" duration={2.5} enableScrollSpy />
                        </span>
                        <p className="font-semibold mt-3">Participantes</p>
                        <p className="text-slate-800 mt-1">
                            Cronometrados con nuestra tecnología
                        </p>
                    </div>

                    <div className="text-center">
                        <span className="text-3xl font-bold">
                            <CountUp end={100} prefix="+" suffix="K" duration={2.5} enableScrollSpy />
                        </span>
                        <p className="font-semibold mt-3">Lecturas de chips</p>
                        <p className="text-slate-800 mt-1">En diferentes disciplinas</p>
                    </div>

                    <div className="text-center">
                        <span className="text-3xl font-bold">
                            <CountUp end={200} prefix="+" suffix="M" duration={2.5} enableScrollSpy />
                        </span>
                        <p className="font-semibold mt-3">Inscripciones procesadas</p>
                        <p className="text-slate-800 mt-1">
                            En nuestras plataformas de inscripciones
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
