'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface NavbarProps {
  linkColor?: 'light' | 'dark';
  headerClass?: string;
}

export default function Navbar({ linkColor = 'light', headerClass = '' }: NavbarProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = `nav-link font-medium relative tracking-wide flex items-center py-1.5 px-3.5 rounded-md text-sm cursor-pointer transition-all duration-300 bg-transparent`;

  return (
    <>
      {/* Navbar */}
      <header
        id="navbar"
        className={`${linkColor} fixed top-0 inset-x-0 flex items-center z-40 w-full lg:bg-transparent bg-white transition-all py-5 ${headerClass} ${
          isSticky ? 'nav-sticky' : ''
        }`}
      >
        <div className="container">
          <nav className="flex items-center">
            {/* Navbar Brand Logo */}
            <Link href="/">
              <img src="/assets/images/logo-dark.png" className="h-16 logo-dark" alt="Timetrack CL" />
              <img src="/assets/images/logo-light.png" className="h-16 logo-light" alt="Timetrack CL" />
            </Link>

            {/* Navigation Menu */}
            <div className="hidden lg:block ms-auto">
              <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                <li className="nav-item">
                  <Link className={navLinkClass} href="/#home">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className={navLinkClass} href="/#technology">
                    Tecnología
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={navLinkClass} href="/#services">
                    Servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className={navLinkClass} href="/results">
                    Resultados
                  </Link>
                </li>
              </ul>
            </div>

            {/* Download Button */}
            <div className="hidden lg:flex items-center ms-3">
              <Link
                href="/#contact"
                className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm hover:bg-primary/90 transition-all"
              >
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="lg:hidden flex items-center ms-auto px-2.5">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open Menu"
                className="text-gray-800"
              >
                <i className="fa-solid fa-bars text-2xl"></i>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className={`${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s`}
      >
        <div className="flex flex-col h-full divide-y-2 divide-gray-200">
          {/* Mobile Menu Header */}
          <div className="p-6 flex items-center justify-between">
            <Link href="/">
              <img src="/assets/images/logo-dark.png" className="h-8" alt="Logo Timetrack" />
            </Link>

            <button onClick={() => setIsMobileMenuOpen(false)} className="flex items-center px-2" aria-label="Close Menu">
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          {/* Mobile Menu Link List */}
          <div className="p-6 overflow-scroll h-full">
            <ul className="navbar-nav flex flex-col gap-2">
              <li className="nav-item">
                <Link href="/#home" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/#technology" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  Tecnología
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/#services" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  Servicios
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/results" className={navLinkClass} onClick={() => setIsMobileMenuOpen(false)}>
                  Resultados
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 flex items-center justify-center">
            <Link
              href="/#contact"
              className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm hover:bg-primary/90 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
