export default function Footer() {
    return (
        <footer className="bg-gray-100">
            <div className="py-6">
                <div className="container">
                    {/* Content commented out in original */}
                </div>
            </div>

            <div className="border-b"></div>

            <div className="container">
                <div className="border-b"></div>

                <div className="grid sm:grid-cols-2 text-center sm:text-start gap-6 py-5">
                    <div>
                        <p className=" text-sm text-slate-500">
                            © 2025 Timetrack SpA. Todos los derechos reservados.
                        </p>
                    </div>

                    <div className="flex justify-center sm:justify-end gap-7">
                        <div>
                            <a href="https://facebook.com/timetrackcl" target="_blank" aria-label="Visita Facebook de Timetrack">
                                <svg className="w-5 h-5 text-slate-500/90 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://twitter.com/timetrackcl" target="_blank" aria-label="Visita Twitter de Timetrack">
                                <svg className="w-5 h-5 text-slate-500/90 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                            </a>
                        </div>
                        <div>
                            <a href="https://linkedin.com/company/timetrackcl" target="_blank" aria-label="Visita linkedin de Timetrack">
                                <svg className="w-5 h-5 text-slate-500/90 hover:text-primary transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                    <rect x="2" y="9" width="4" height="12"></rect>
                                    <circle cx="4" cy="4" r="2"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
