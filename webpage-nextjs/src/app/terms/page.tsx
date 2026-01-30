import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad | Timetrack',
  description: 'Política de privacidad de la aplicación Timetrack Live',
};

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24">
      <div className="container">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold mb-8">
            POLÍTICA DE PRIVACIDAD DE LA APP <strong>Timetrack Live</strong>
          </h1>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Información sobre ubicación</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Recopilamos y procesamos información sobre localización cuando usted se inscribe y hace
            uso de los servicios. Acorde a nuestra política de privacidad (Privacy policy) no hacemos
            un seguimiento de la ubicación de su dispositivo mientras usted no está usando la app
            pero, para poder proporcionar los servicios básicos de cronometraje es necesario hacer un
            seguimiento de la ubicación de su dispositivo mientras usted usa la app. Si desea detener
            el seguimiento de la ubicación de su dispositivo, puede hacerlo en cualquier momento
            ajustando la configuración de su dispositivo.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Información que el usuario comparte</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Esta app requiere los permisos de la cámara si el usuario está interesado en subir una
            foto a la galería. Recopilamos información a partir de las fotos que usted comparte.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Esta app no requiere información de sus contactos.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Información sobre pagos</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            No se hace ningún tipo de pago dentro de la app, por lo que no se recopilará ningún tipo
            de información acerca de sus tarjetas de crédito o débito.
          </p>

          <div className="mt-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600">
              Última actualización: 2025
              <br />
              Timetrack SpA
              <br />
              Chile
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
