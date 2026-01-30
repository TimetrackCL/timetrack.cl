'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function ContactSection() {
  return (
    <section className="pt-20" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div data-aos="fade-up" data-aos-duration="600">
            <h2 className="md:text-3xl text-xl font-semibold my-5">¿Hablemos?</h2>
            <p className="text-slate-700">
              Si requieres asistencia para cronometrar tu próximo evento deportivo, no dudes en
              contactarno. Estaremos encantado de agendar una llamada contigo y discutir todos los
              detalles necesarios.
            </p>
            <p className="text-slate-500 mt-12">Escribenos a:</p>
            <h3>
              <a
                href="mailto:contacto@timetrack.cl"
                className="text-lg font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                contacto@timetrack.cl
              </a>
            </h3>
            <strong>+56 9 6237 9642</strong>
          </div>

          <div data-aos="fade-up" data-aos-duration="900">
            <Script src="//js.hsforms.net/forms/embed/v2.js" strategy="lazyOnload" />
            <Script id="hubspot-form" strategy="lazyOnload">
              {`
                if (typeof hbspt !== 'undefined') {
                  hbspt.forms.create({
                    portalId: "48903751",
                    formId: "5354eecb-7a93-4ebb-938b-9163e4e2bdd0"
                  });
                }
              `}
            </Script>
            <div id="hubspotForm"></div>
          </div>
        </div>
        <hr className="mt-10" />
      </div>
    </section>
  );
}
