import ContactSection from "@/components/ContactSection";

export default function TermsPage() {
    return (
        <main>
            <section className="pt-36 pb-20">
                <div className="container max-w-4xl">
                    <h1 className="text-3xl font-bold mb-8">
                        POLÍTICA DE PRIVACIDAD DE LA APP <strong>Timetrack Live</strong>
                    </h1>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                Información sobre ubicación
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                Recopilamos y procesamos información sobre localización cuando
                                usted se inscribe y hace uso de los servicios Acorde a nuestra
                                política de privacidad (Privacy policy) no hacemos un seguimiento
                                de la ubicación de su dispositivo mientras usted no está usando la
                                app pero, para poder proporcionar los servicios básicos de
                                cronometraje es necesario hacer un seguimiento de la ubicación de
                                su dispositivo mientras usted usa la app. Si desea detener el
                                seguimiento de la ubicación de su dispositivo, puede hacerlo en
                                cualquier momento ajustando la configuración de su dispositivo.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                Información que el usuario comparte.
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-2">
                                Esta app requiere los permisos de la cámara si el usuario esta
                                interesado en subir una foto a la galería. Recopilamos información
                                a partir de las fotos que usted comparte.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Esta app no requiere información de sus contactos.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3">
                                Información sobre pagos
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                No se hace ningún tipo de pago dentro de la app, por lo que no se
                                recopilará ningún tipo de información acerca de sus tarjetas de
                                crédito o débito.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <ContactSection />
        </main>
    );
}
