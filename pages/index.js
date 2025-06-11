import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cronometraje con Chips | Timetrack</title>
        <meta name="description" content="Timetrack, especialistas en servicios de cronometraje." />
      </Head>
      <section className="hero-section" id="home">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center max-w-7xl mx-auto">
            <div>
              <h1 className="md:text-5xl text-3xl font-semibold text-white mb-7 mt-16">
                Especialistas en cronometraje deportivo en Chile
                <br /> para <span className="capitalize text-primary">Running</span>
              </h1>
              <p className="text-white/80 leading-7 text-[1.2rem]">Como empresa líder de cronometraje deportivo, nos especializamos en sistemas de cronometraje para carreras utilizando la avanzada tecnología <strong>BibTag de MyLaps</strong>.</p>
              <div className="flex flex-wrap items-center gap-5 mt-16">
                <a href="#contact" className="bg-primary text-white rounded-md py-2 px-4">Cotiza Ahora</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
