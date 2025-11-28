"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import eventsData from "@/data/events.json";

export default function ResultsPage() {
    const [filter, setFilter] = useState("all");
    const [filteredEvents, setFilteredEvents] = useState(eventsData);

    useEffect(() => {
        if (filter === "all") {
            setFilteredEvents(eventsData);
        } else {
            setFilteredEvents(eventsData.filter((event) => event.category === filter));
        }
    }, [filter]);

    const categories = [
        { id: "all", name: "Todos" },
        { id: "running", name: "Running" },
        { id: "triatlon", name: "Triatlón" },
        { id: "ciclismo", name: "Ciclismo" },
        { id: "trail", name: "Trail" },
    ];

    const categoryColors: Record<string, string> = {
        running: "bg-blue-500/10 text-blue-600",
        triatlon: "bg-purple-500/10 text-purple-600",
        ciclismo: "bg-green-500/10 text-green-600",
        trail: "bg-orange-500/10 text-orange-600",
    };

    const categoryNames: Record<string, string> = {
        running: "Running",
        triatlon: "Triatlón",
        ciclismo: "Ciclismo",
        trail: "Trail Running",
    };

    return (
        <main>
            <section className="pt-36 pb-20">
                <div className="container">
                    <div className="absolute inset-0 h-[300px] bg-cover bg-no-repeat bg-center bg-[url('/assets/images/blog/hero-2.png')]">
                        <div className="relative w-full h-full z-30 bg-black/10"></div>
                    </div>

                    <div className="relative lg:w-3/5 mx-auto z-30">
                        <div className="text-center text-white">
                            <h2 className="text-5xl font-semibold mb-8">Resultados</h2>
                            <p className="text-base/relaxed tracking-wide">
                                Resultados de los eventos deportivos que han utilizado nuestros
                                sistemas de cronometraje.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container">
                    {/* Filtros */}
                    <div className="flex flex-wrap items-center gap-4 mb-12">
                        <p className="font-semibold">Filtrar por:</p>
                        <div className="flex flex-wrap items-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id)}
                                    className={`border border-gray-300 rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg hover:border-primary py-2 px-4 ${filter === cat.id
                                            ? "bg-primary text-white border-primary"
                                            : ""
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Grid de Eventos */}
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                        {filteredEvents.length > 0 ? (
                            filteredEvents.map((event) => {
                                const dateObj = new Date(event.date);
                                // Simple formatting
                                const formattedDate = dateObj.toLocaleDateString("es-ES", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                });

                                return (
                                    <div
                                        key={event.id}
                                        className="group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300"
                                        data-aos="fade-up"
                                    >
                                        <div className="relative h-48 overflow-hidden">
                                            <Image
                                                src={event.image}
                                                alt={event.title}
                                                width={400}
                                                height={300}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute top-4 left-4">
                                                <span
                                                    className={`${categoryColors[event.category] || "bg-gray-100"
                                                        } font-semibold rounded-full text-xs py-1.5 px-3`}
                                                >
                                                    {categoryNames[event.category] || event.category}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                                {event.title}
                                            </h3>
                                            <div className="space-y-2 mb-4">
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <i className="fas fa-calendar-alt w-5 text-primary"></i>
                                                    <span>{formattedDate}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <i className="fas fa-map-marker-alt w-5 text-primary"></i>
                                                    <span>{event.location}</span>
                                                </div>
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <i className="fas fa-users w-5 text-primary"></i>
                                                    <span>
                                                        {event.participants.toLocaleString("es-ES")}{" "}
                                                        participantes
                                                    </span>
                                                </div>
                                            </div>
                                            <Link
                                                href={event.link}
                                                target={event.linkType === "external" ? "_blank" : "_self"}
                                                className="inline-flex items-center justify-center w-full bg-orange-400 text-white font-medium rounded-lg py-2.5 px-4 hover:bg-orange-500 transition-colors"
                                            >
                                                Ver Resultados{" "}
                                                {event.linkType === "external" && (
                                                    <i className="fas fa-external-link-alt ml-1 text-xs"></i>
                                                )}
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-gray-500 text-lg">
                                    No se encontraron eventos para esta categoría
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}
