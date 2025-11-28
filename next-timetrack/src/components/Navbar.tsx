"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                id="navbar"
                className={`fixed top-0 inset-x-0 flex items-center z-40 w-full transition-all py-5 ${isScrolled ? "bg-white shadow-md" : "lg:bg-transparent bg-white"
                    }`}
            >
                <div className="container">
                    <nav className="flex items-center">
                        <Link href="/">
                            <Image
                                src="/assets/images/logo-dark.png"
                                className="h-16 w-auto logo-dark"
                                alt="Timetrack CL"
                                width={200}
                                height={64}
                                priority
                            />
                        </Link>

                        <div className="hidden lg:block ms-auto">
                            <ul className="navbar-nav flex gap-x-3 items-center justify-center">
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-primary transition-colors" href="/#home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-primary transition-colors" href="/#technology">Tecnología</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-primary transition-colors" href="/#services">Servicios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link hover:text-primary transition-colors" href="/results/">Resultados</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden lg:flex items-center ms-3">
                            <Link href="/#contact" className="bg-primary text-white px-4 py-2 rounded inline-flex items-center text-sm hover:bg-primary/90 transition-colors">
                                Contacto
                            </Link>
                        </div>

                        <div className="lg:hidden flex items-center ms-auto px-2.5">
                            <button type="button" onClick={() => setIsOpen(true)} aria-label="Open Menu">
                                <i className="fa-solid fa-bars text-2xl text-gray-500"></i>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                id="mobileMenu"
                className={`fixed top-0 end-0 transition-all duration-200 transform h-full w-full max-w-md z-50 bg-white border-s ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full divide-y-2 divide-gray-200">
                    <div className="p-6 flex items-center justify-between">
                        <Link href="/">
                            <Image src="/assets/images/logo-dark.png" className="h-8 w-auto" alt="Logo Timetrack" width={100} height={32} />
                        </Link>
                        <button onClick={() => setIsOpen(false)} className="flex items-center px-2" aria-label="Close Menu">
                            <i className="fa-solid fa-xmark text-xl"></i>
                        </button>
                    </div>

                    <div className="p-6 overflow-scroll h-full">
                        <ul className="navbar-nav flex flex-col gap-2">
                            <li className="nav-item">
                                <Link href="/#home" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#technology" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Tecnología</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/#services" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/results/" className="nav-link block py-2" onClick={() => setIsOpen(false)}>Resultados</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 flex items-center justify-center">
                        <Link href="/#contact" className="bg-primary w-full text-white p-3 rounded flex items-center justify-center text-sm" onClick={() => setIsOpen(false)}>
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/20 z-40 lg:hidden" onClick={() => setIsOpen(false)}></div>
            )}
        </>
    );
}
