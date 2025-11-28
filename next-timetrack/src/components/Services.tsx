import Image from "next/image";

const services = [
    {
        title: "Cronometraje deportivo",
        description:
            "Cronometraje preciso para triatlón, running, trail running y ciclismo con tecnología líder.",
        image: "/assets/images/services/cronometraje-deportivo.jpg",
    },
    {
        title: "Resultados y clasificaciones",
        description:
            "Publicación rápida de resultados, permitiendo acceso inmediato a los datos de clasificaciones",
        image: "/assets/images/services/resultados.jpg",
    },
    {
        title: "Entrega de Kits",
        description:
            "Gestionamos la entrega de números y chips de competencia con nuestra plataforma, evitando errores y asegurando resultados precisos",
        image: "/assets/images/services/kits.jpg",
    },
    {
        title: "Relojes en Meta",
        description:
            "Proporcionamos relojes en la meta para mostrar el tiempo transcurrido, liberándote de la búsqueda y gestión de estos sistemas en tu evento.",
        image: "/assets/images/services/reloj-en-meta.jpg",
    },
    {
        title: "Números de competencia",
        description:
            "Proporcionamos números de Tyvek con alfileres, garantizando una identificación clara y duradera para los participantes.",
        image: "/assets/images/services/numero-en-competencia.jpg",
    },
    {
        title: "Desarrollo Web",
        description:
            "Desarrollamos sitios web atractivos y funcionales para carreras deportivas, garantizando una experiencia fluida en inscripciones y resultados.",
        image: "/assets/images/services/desarrollo-web.jpg",
    },
];

export default function Services() {
    return (
        <section className="bg-gray-100 xl:py-24 py-16" id="services">
            <div className="container" data-aos="fade-up" data-aos-duration="1500">
                <div className="text-center">
                    <span className="text-sm bg-primary/10 text-primary/90 rounded-full px-3 py-1">
                        Nuestros Servicios
                    </span>

                    <h1 className="text-3xl/tight font-medium mt-3 mb-4">
                        Sistema de cronometraje para carreras de alto nivel
                    </h1>
                    <p className="text-gray-500">
                        Como una de las principales empresas de cronometraje deportivo en
                        Chile, garantizamos una experiencia de alta calidad para los
                        participantes. Transformamos cada competición en una experiencia
                        inolvidable con nuestro servicio especializado de cronometraje de
                        carreras.
                    </p>
                </div>

                <div className="pt-16">
                    <div className="grid xl:grid-cols-2 grid-cols-1 gap-7">
                        {services.map((service, index) => (
                            <div key={index}>
                                <div className="bg-white flex items-center rounded gap-5 p-5 hover:shadow-md transition-shadow duration-300">
                                    <Image
                                        src={service.image}
                                        className="w-24 h-auto rounded"
                                        alt={`Servicio ${service.title}`}
                                        width={96}
                                        height={96}
                                    />
                                    <div>
                                        <h1 className="mb-3 font-semibold">{service.title}</h1>
                                        <p className="text-gray-500">{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
