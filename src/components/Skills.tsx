interface Skill {
    name: string;
    category: 'technical' | 'soft';
    items: string[];
}

const Skills = () => {
    const skills: Skill[] = [
        {
            name: 'Programming Languages',
            category: 'technical',
            items: ['C#', 'ASP.NET', 'JavaScript', 'HTML5', 'CSS3'],
        },
        {
            name: 'Frameworks & Libraries',
            category: 'technical',
            items: ['.NET Core', 'React.js', 'Node.js', 'Tailwind CSS'],
        },
        {
            name: 'Databases',
            category: 'technical',
            items: ['MongoDB', 'PostgreSQL'],
        },
        {
            name: 'Tools & Practices',
            category: 'technical',
            items: ['Git', 'GitHub', 'Trello', 'Jira', 'Agile', 'MVC', 'OOP', 'RESTful APIs'],
        },
        {
            name: 'Other Technologies',
            category: 'technical',
            items: ['Blazor (Basic)', 'JWT Authentication', 'Debugging'],
        },
    ];

    const softSkills = [
        'Time Management',
        'Resilience',
        'Communication',
        'Planning and Research',
        'Analytical Thinking',
        'Attention to Detail',
        'Collaboration',
    ];

    return (
        <section id="skills" className="section-container">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-3 md:mb-4 animate-fade-in-up">
                    Skills & <span className="gradient-text">Expertise</span>
                </h2>
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-10 md:mb-16 animate-scale-in"></div>

                {/* Technical Skills */}
                <div className="mb-12 md:mb-16">
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-6 md:mb-8 animate-fade-in-up">
                        Technical Skills
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={index}
                                className="glass-card p-5 md:p-6 hover:bg-white/10 transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <h4 className="text-lg sm:text-xl font-semibold text-primary-400 mb-3 md:mb-4 flex items-center gap-2">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                    <span className="break-words">{skillGroup.name}</span>
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((item, idx) => (
                                        <span
                                            key={idx}
                                            className="px-2.5 py-1.5 sm:px-3 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-full text-xs sm:text-sm text-slate-200 hover:border-primary-400 transition-colors"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-6 md:mb-8 animate-fade-in-up">
                        Soft Skills
                    </h3>
                    <div className="glass-card p-6 sm:p-8 animate-fade-in-up animate-delay-400">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                            {softSkills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 sm:gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-200 text-sm sm:text-base">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
