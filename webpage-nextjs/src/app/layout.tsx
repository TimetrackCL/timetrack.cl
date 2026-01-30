import type { Metadata } from 'next';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'aos/dist/aos.css';
import '@/styles/globals.scss';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Cronometraje con Chips | Running, Trail, MTB y Triatlón | Timetrack',
  description:
    'Timetrack, especialistas en servicios de cronometraje para eventos deportivos con la avanzada tecnología BibTag de MyLaps. Garantizamos resultados precisos y en tiempo real para running, ciclismo, triatlones y más.',
  keywords: 'cronometraje, running, ciclismo, triatlón, BibTag, MyLaps, eventos deportivos',
  authors: [{ name: 'Timetrack SpA' }],
  openGraph: {
    title: 'Cronometraje con Chips | Running, Trail, MTB y Triatlón | Timetrack',
    description: 'Especialistas en servicios de cronometraje para eventos deportivos con tecnología BibTag de MyLaps',
    url: 'https://timetrack.cl',
    siteName: 'Timetrack',
    locale: 'es_CL',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WXM2XTBB');
          `}
        </Script>
      </head>
      <body className="text-gray-700">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXM2XTBB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />

        {/* AOS Animation Library */}
        <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js" strategy="lazyOnload" />
        <Script id="aos-init" strategy="lazyOnload">
          {`
            if (typeof AOS !== 'undefined') {
              AOS.init({
                duration: 1000,
                once: true
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
