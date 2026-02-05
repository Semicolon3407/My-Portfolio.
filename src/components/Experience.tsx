interface ExperienceItem {
    title: string;
    company: string;
    type: string;
    startDate: string; // Format: 'YYYY-MM'
    endDate: string | 'Present'; // Format: 'YYYY-MM' or 'Present'
    location: string;
    description: string;
    responsibilities: string[];
}

// Helper function to calculate duration
const calculateDuration = (startDate: string, endDate: string | 'Present'): string => {
    const start = new Date(startDate + '-01');
    const end = endDate === 'Present' ? new Date() : new Date(endDate + '-01');

    const monthsDiff = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    const years = Math.floor(monthsDiff / 12);
    const months = monthsDiff % 12;

    let duration = '';
    if (years > 0) {
        duration += `${years} yr${years > 1 ? 's' : ''}`;
    }
    if (months > 0) {
        if (duration) duration += ' ';
        duration += `${months} mo${months > 1 ? 's' : ''}`;
    }

    return duration || '1 mo';
};

// Helper function to format date range
const formatDateRange = (startDate: string, endDate: string | 'Present'): string => {
    const start = new Date(startDate + '-01');
    const startMonth = start.toLocaleDateString('en-US', { month: 'short' });
    const startYear = start.getFullYear();

    let endFormatted = 'Present';
    if (endDate !== 'Present') {
        const end = new Date(endDate + '-01');
        const endMonth = end.toLocaleDateString('en-US', { month: 'short' });
        const endYear = end.getFullYear();
        endFormatted = `${endMonth} ${endYear}`;
    }

    const duration = calculateDuration(startDate, endDate);
    return `${startMonth} ${startYear} - ${endFormatted} · ${duration}`;
};

const Experience = () => {
    const experiences: ExperienceItem[] = [
        {
            title: 'Junior Software Developer',
            company: 'Eydean Inc.',
            type: 'Full-time',
            startDate: '2025-12',
            endDate: 'Present',
            location: 'Jhamsikhel, Lalitpur · On-site',
            description: 'As a Junior Full Stack Developer at Eydean Inc., I specialize in Core Development within the MERN stack, focusing on the architectural integrity and server-side efficiency of our web applications. My role involves building the foundational logic and robust back-end systems that power high-scale digital solutions.',
            responsibilities: [
                'Core Logic Implementation: Developing complex server-side business logic and modular code structures using Node.js and Express.js.',
                'System Architecture: Contributing to the design of scalable backend architectures, ensuring high availability and low-latency performance.',
                'Database Engineering: Designing and optimizing MongoDB schemas and aggregation pipelines to handle large datasets and complex relationships.',
                'API Development: Architecting secure, efficient, and well-documented RESTful APIs that serve as the backbone for cross-platform integration.',
                'Optimization & Refactoring: Identifying bottlenecks in the core codebase and refactoring legacy code to improve maintainability and execution speed.',
                'State Management: Implementing sophisticated data flow and state management strategies on the frontend using React.js to ensure synchronization with core services.',
            ],
        },
        {
            title: 'Frontend Developer Intern',
            company: 'SoftLab Inc.',
            type: 'Full-time',
            startDate: '2024-08',
            endDate: '2024-12',
            location: 'Old Baneshwor, Kathmandu, Nepal · On-site',
            description: 'During my tenure at Softlab Inc., I focused on engineering high-quality user interfaces and optimizing the frontend delivery pipeline. I played a key role in translating design concepts into functional, high-performance web applications using modern JavaScript frameworks.',
            responsibilities: [
                'UI/UX Engineering: Developed responsive, mobile-first web interfaces using React.js, ensuring a seamless user experience across diverse devices and browsers.',
                'Component-Based Architecture: Implemented modular, reusable component structures to improve code maintainability and accelerate development cycles.',
                'Cross-Functional Collaboration: Partnered with UI/UX designers and backend teams to integrate RESTful APIs and ensure design fidelity from Figma to production.',
                'Performance Optimization: Analyzed and optimized frontend assets and rendering logic to significantly reduce load times and enhance Core Web Vitals.',
                'Technical Quality Assurance: Participated in the full development lifecycle, including debugging, unit testing, and Git-based version control to ensure high-quality software delivery.',
            ],
        },
        {
            title: 'Skill Ambassador',
            company: 'ING Skill Academy',
            type: 'Internship',
            startDate: '2024-02',
            endDate: '2024-07',
            location: 'New Baneshwor, Kathmandu, Nepal · On-site',
            description: 'As a Skill Ambassador, I served as a key liaison between the academy and its participants, focusing on program facilitation and the enhancement of the learning environment. I played a vital role in delivering high-quality educational experiences and fostering community engagement.',
            responsibilities: [
                'Program Facilitation: Led and facilitated training sessions, ensuring effective knowledge transfer and maintaining high standards of participant engagement.',
                'Participant Success & Support: Managed end-to-end participant relations, addressing inquiries with professional-grade communication and providing tailored support to ensure learner success.',
                'Continuous Improvement: Actively gathered and analyzed participant feedback to provide actionable insights for the optimization of training modules and educational materials.',
                'Event Coordination: Conceptualized and executed engaging academy events, managing logistics and organizational workflows to promote a collaborative learning culture.',
                'Strategic Communication: Leveraged strong interpersonal skills to represent the academy\'s brand and build professional relationships within the skill development ecosystem.',
            ],
        },
    ];

    return (
        <section id="experience" className="section-container bg-slate-900/30">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-3 md:mb-4 animate-fade-in-up">
                    Work <span className="gradient-text">Experience</span>
                </h2>
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-10 md:mb-16 animate-scale-in"></div>

                <div className="space-y-6 md:space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="glass-card p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className="flex flex-col mb-4">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">{exp.title}</h3>
                                    <p className="text-primary-400 font-semibold text-base sm:text-lg mb-1">
                                        {exp.company} · {exp.type}
                                    </p>
                                    <p className="text-slate-400 text-sm mb-1">
                                        {formatDateRange(exp.startDate, exp.endDate)}
                                    </p>
                                    <p className="text-slate-400 text-sm flex items-center gap-1">
                                        <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        {exp.location}
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">{exp.description}</p>

                            <div className="space-y-2">
                                <p className="text-white font-semibold mb-2 text-sm sm:text-base">Key Contributions:</p>
                                <ul className="space-y-2">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx} className="flex items-start gap-2 sm:gap-3 text-slate-300 text-sm sm:text-base">
                                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
