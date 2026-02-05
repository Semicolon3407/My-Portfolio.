const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-white/10 py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-slate-400 text-xs sm:text-sm text-center md:text-left">
                        © {currentYear} Anup Sharma. All rights reserved.
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                        >
                            GitHub
                        </a>
                        <a
                            href="mailto:anupsharma3407@gmail.com"
                            className="text-slate-400 hover:text-primary-400 transition-colors text-xs sm:text-sm"
                        >
                            Email
                        </a>
                    </div>

                    <div className="text-slate-400 text-xs sm:text-sm text-center md:text-right">
                        Built with <span className="text-red-500">♥</span> using React & Tailwind CSS
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
