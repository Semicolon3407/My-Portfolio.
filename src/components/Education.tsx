const Education = () => {
    return (
        <section id="education" className="section-container bg-slate-900/30">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-3 md:mb-4 animate-fade-in-up">
                    <span className="gradient-text">Education</span>
                </h2>
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-10 md:mb-16 animate-scale-in"></div>

                <div className="glass-card p-6 sm:p-8 md:p-12 hover:bg-white/10 transition-all duration-300 animate-fade-in-up">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 mx-auto sm:mx-0">
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 flex items-center justify-center">
                                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 text-center sm:text-left">
                            <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                                BSc (Hons) Computing
                            </h3>
                            <p className="text-primary-400 font-semibold text-base sm:text-lg mb-2">
                                Islington College, London Metropolitan University
                            </p>
                            <p className="text-slate-400 text-sm mb-1">Nov 2022 – June 2025 (Graduated)</p>
                            <p className="text-slate-400 text-sm flex items-center gap-1 mb-4 justify-center sm:justify-start">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Kamalpokhari, Nepal
                            </p>

                            <div className="space-y-3 text-slate-300">
                                <p className="text-sm sm:text-base leading-relaxed">
                                    Completed a comprehensive computing degree covering software development, database management,
                                    web technologies, and system architecture. The program emphasized practical application of
                                    theoretical concepts through hands-on projects and industry-relevant coursework.
                                </p>
                                <div className="flex flex-wrap gap-2 mt-4 justify-center sm:justify-start">
                                    <span className="px-2.5 py-1.5 sm:px-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs sm:text-sm">
                                        Software Engineering
                                    </span>
                                    <span className="px-2.5 py-1.5 sm:px-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs sm:text-sm">
                                        Web Development
                                    </span>
                                    <span className="px-2.5 py-1.5 sm:px-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs sm:text-sm">
                                        Database Systems
                                    </span>
                                    <span className="px-2.5 py-1.5 sm:px-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs sm:text-sm">
                                        System Architecture
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
