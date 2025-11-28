import Link from "next/link";
import eventsData from "@/data/events.json";

export default function Events() {
    // Filter or sort events if needed. For now, just take the first few or all.
    // The HTML showed 4 events.
    const events = eventsData.slice(0, 4);

    return (
        <section className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Calendario</h2>
                    {/* <Link href="/calendario" className="text-primary hover:text-primary/80 text-sm font-medium">Ver todo</Link> */}
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                        <div className="flex items-center gap-3">
                            <span className="text-xl text-gray-600">Proximos Eventos</span>
                        </div>
                    </div>

                    <div className="space-y-4 mt-4">
                        {events.map((event) => {
                            // Fix for date parsing if it's off by one day due to timezone, 
                            // but for simplicity assuming the string is correct or handling it simply.
                            // Actually, "2025-04-15" parsed might be UTC. 
                            // Let's just split the string to be safe and avoid timezone issues.
                            const [yearStr, monthStr, dayStr] = event.date.split('-');
                            const eventDay = dayStr;
                            const eventMonth = new Date(parseInt(yearStr), parseInt(monthStr) - 1, parseInt(dayStr)).toLocaleString("es-ES", { month: "short" }).toUpperCase();


                            return (
                                <Link
                                    key={event.id}
                                    href={event.link}
                                    target={event.linkType === "external" ? "_blank" : "_self"}
                                    className="block"
                                >
                                    <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                                        <div className="flex flex-col items-center justify-center w-20 h-20 bg-primary/10 rounded-lg flex-shrink-0">
                                            <span className="text-xl font-bold text-primary">
                                                {eventDay}
                                            </span>
                                            <span className="text-xs text-gray-600">{eventMonth}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="font-semibold text-gray-900">
                                                {event.title}
                                            </h3>
                                            <div className="flex items-center gap-3 mt-1">
                                                <span className="text-sm text-gray-600">
                                                    <i className="fas fa-map-marker-alt mr-1"></i>
                                                    {event.location}
                                                </span>
                                                {/* Time is not in JSON, omitting or adding placeholder if needed. 
                            The HTML had time. I'll omit for now or add to JSON if requested.
                        */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
