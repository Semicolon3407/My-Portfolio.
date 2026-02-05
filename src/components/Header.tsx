import { useState, useEffect } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'skills', 'education', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card shadow-lg py-3 md:py-4' : 'bg-transparent py-4 md:py-6'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                <div className="text-xl md:text-2xl font-display font-bold gradient-text animate-fade-in">
                    AS
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex items-center gap-6 lg:gap-8">
                    {navItems.map((item, index) => (
                        <li
                            key={item.id}
                            className="animate-fade-in-down"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <button
                                onClick={() => scrollToSection(item.id)}
                                className={`text-sm font-medium transition-all duration-300 hover:text-primary-400 ${activeSection === item.id ? 'text-primary-400' : 'text-slate-300'
                                    }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <a
                    href="mailto:anupsharma3407@gmail.com"
                    className="btn-primary animate-fade-in hidden md:block text-sm"
                >
                    Get in Touch
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden w-10 h-10 flex items-center justify-center text-white"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass-card mt-2 mx-4 rounded-2xl overflow-hidden animate-fade-in-down">
                    <ul className="py-2">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <button
                                    onClick={() => scrollToSection(item.id)}
                                    className={`w-full text-left px-6 py-3 transition-all duration-300 ${activeSection === item.id
                                            ? 'text-primary-400 bg-white/10'
                                            : 'text-slate-300 hover:bg-white/5'
                                        }`}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                        <li className="px-6 py-3">
                            <a
                                href="mailto:anupsharma3407@gmail.com"
                                className="btn-primary w-full text-center block text-sm"
                            >
                                Get in Touch
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
