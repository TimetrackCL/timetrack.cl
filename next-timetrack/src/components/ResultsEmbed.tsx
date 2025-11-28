"use client";
import { useEffect, useRef } from "react";

interface ResultsConfig {
    type: "timingsense" | "sportmaniacs";
    competitionId?: string;
    event?: string;
    containerId?: string;
    scriptSrc?: string;
}

interface ResultsEmbedProps {
    config: ResultsConfig;
}

declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        tsRankings: any;
    }
}

export default function ResultsEmbed({ config }: ResultsEmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!config) return;

        if (config.type === "timingsense" && config.containerId) {
            // Timingsense Embed
            const script = document.createElement("script");
            script.src =
                "https://development.timingsense.cloud/ts-rankings/main.js?v=1.0";
            script.async = true;
            script.onload = () => {
                if (window.tsRankings) {
                    window.tsRankings.plugin({
                        config: {
                            api: "https://rankings-api.timingsense.cloud/api/competition",
                        },
                        container: document.getElementById(config.containerId!),
                        competitionId: config.competitionId,
                        event: decodeURI(config.event || ""),
                        withSummary: true,
                        defaultTab: "ranking",
                        translations: {
                            en: {
                                tableHeaders: {
                                    pos: "Position",
                                    dorsal: "BiB",
                                    name: "Name",
                                    surname: "Surname",
                                    club: "Club",
                                    time: "Time",
                                    status: "Status",
                                },
                                fieldValues: {
                                    status: {
                                        finished: "Finished",
                                        retired: "Withdrawn",
                                    },
                                },
                            },
                        },
                    });
                }
            };
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        } else if (config.type === "sportmaniacs" && config.scriptSrc) {
            // Sportmaniacs Embed
            const script = document.createElement("script");
            script.src = config.scriptSrc;
            script.async = true;
            if (containerRef.current) {
                containerRef.current.innerHTML = ""; // Clear previous
                containerRef.current.appendChild(script);
            }
        }
    }, [config]);

    if (config.type === "timingsense") {
        return (
            <>
                <style jsx global>{`
          :root {
            --primary-color: #1d67ff;
            --split-selected-color: var(--primary-color);
            --light-background: #f3f3f3;
            --dark-background: #888;
            --web-background: #fff;
            --font-size: 12px;
            --icon-size: 30px;
            --navigation-padding: 20px;
            --detail-item-font-size: 20px;
            --detail-item-title-font-size: 16px;
            --detail-subtitle-font-size: 14px;
            --detail-table-font-size: 14px;
          }
        `}</style>
                <div id={config.containerId}></div>
            </>
        );
    }

    if (config.type === "sportmaniacs") {
        return <div ref={containerRef}></div>;
    }

    return null;
}
