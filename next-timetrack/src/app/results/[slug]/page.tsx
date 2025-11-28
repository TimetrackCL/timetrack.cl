import Link from "next/link";
import { notFound } from "next/navigation";
import eventsData from "@/data/events.json";
import ResultsEmbed from "@/components/ResultsEmbed";
import ContactSection from "@/components/ContactSection";

// Define the type for the event data based on your JSON structure
interface EventData {
    id: number;
    title: string;
    date: string;
    location: string;
    category: string;
    image: string;
    participants: number;
    linkType: string;
    link: string;
    slug?: string;
    resultsConfig?: {
        type: "timingsense" | "sportmaniacs";
        competitionId?: string;
        event?: string;
        containerId?: string;
        scriptSrc?: string;
    };
}

export async function generateStaticParams() {
    return eventsData
        .filter((event) => event.linkType === "internal" && event.slug)
        .map((event) => ({
            slug: event.slug,
        }));
}

export default function ResultPage({ params }: { params: { slug: string } }) {
    const event = eventsData.find(
        (e) => e.slug === params.slug
    ) as EventData | undefined;

    if (!event) {
        notFound();
    }

    return (
        <main>
            <section className="pt-20">
                <div className="container">
                    <div className="py-14">
                        <div className="flex flex-wrap items-center gap-2 bg-gray-100 py-2 px-3 rounded-md">
                            <Link
                                href="/"
                                className="transition-all hover:text-primary text-sm"
                            >
                                Home
                            </Link>{" "}
                            /
                            <Link
                                href="/results/"
                                className="transition-all hover:text-primary text-sm"
                            >
                                Resultados
                            </Link>{" "}
                            /
                            <p className="text-gray-500 text-sm">{event.title}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-20">
                <div className="container">
                    {event.resultsConfig ? (
                        <ResultsEmbed config={event.resultsConfig} />
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-500">
                                Resultados no disponibles o configuración faltante.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
