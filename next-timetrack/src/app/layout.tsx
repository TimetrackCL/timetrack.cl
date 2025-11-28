import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "../styles/style.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import Script from "next/script";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Cronometraje con Chips | Running, Trail, MTB y Triatlón | Timetrack",
  description: "Timetrack, especialistas en servicios de cronometraje para eventos deportivos con la avanzada tecnología BibTag de MyLaps. Garantizamos resultados precisos y en tiempo real para running, ciclismo, triatlones y más. ¡Concentra tu energía en organizar, nosotros nos encargamos del cronometraje!",
  alternates: {
    canonical: "https://timetrack.cl",
  },
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AOSInit from "@/components/AOSInit";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${beVietnamPro.variable} font-body text-gray-700`}>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
        <Script src="https://kit.fontawesome.com/your-code.js" strategy="lazyOnload" />
        {/* Note: The original used fontawesome. I might need to add the kit code or install fontawesome package. 
            Package.json had @fortawesome/fontawesome-free. 
            I should import it in style.scss or layout.tsx.
        */}
      </body>
    </html>
  );
}
