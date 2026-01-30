'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HeroSection() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Running', 'Trail Running', 'Triatlón', 'Ciclismo'];
  const period = 2000;

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), period);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section className="hero-section min-h-screen" id="home">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 items-center max-w-7xl mx-auto">
          <div>
            <h1 className="md:text-5xl/tight text-3xl font-semibold text-white mb-7 mt-16">
              Especialistas en cronometraje deportivo en Chile
              <br /> para{' '}
              <span className="typewrite capitalize relative after:absolute after:inset-x-0 after:bottom-2 after:bg-orange-400/40 after:h-5 after:w-full after:-z-10 after:z-[1]">
                <span className="wrap">{text}</span>
                <span className="cursor">|</span>
              </span>
            </h1>

            <p className="text-white/80 leading-7 text-[1.2rem]">
              Como empresa líder de cronometraje deportivo, nos especializamos en sistemas de
              cronometraje para carreras utilizando la avanzada tecnología{' '}
              <strong>BibTag de MyLaps</strong>.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-16">
              <Link
                href="#contact"
                className="bg-primary text-white rounded-md hover:outline hover:outline-primary/40 focus:shadow-none focus:outline focus:outline-primary/40 transition-all duration-500 py-2 px-4"
              >
                Cotiza Ahora
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
