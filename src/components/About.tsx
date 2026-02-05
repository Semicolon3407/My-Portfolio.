const About = () => {
    return (
        <section id="about" className="section-container">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-center mb-3 md:mb-4 animate-fade-in-up">
                    About <span className="gradient-text">Me</span>
                </h2>
                <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-8 md:mb-12 animate-scale-in"></div>

                <div className="glass-card p-6 sm:p-8 md:p-12 animate-fade-in-up animate-delay-200">
                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                        I'm a passionate software developer with a <strong className="text-white">BSc (Hons) Computing</strong> degree
                        from Islington College, affiliated with London Metropolitan University (Graduated December 2025). With a strong foundation in both
                        frontend and backend development, I specialize in creating scalable, responsive applications that
                        deliver exceptional user experiences.
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                        My journey in software development has been marked by hands-on experience with modern technologies
                        including <strong className="text-primary-400">.NET Core</strong>, <strong className="text-primary-400">React.js</strong>,
                        <strong className="text-primary-400"> Node.js</strong>, and various database systems. I'm proficient in building
                        RESTful APIs, implementing authentication systems, and following best coding practices including MVC, OOP,
                        and Agile methodologies.
                    </p>

                    <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                        Beyond technical skills, I pride myself on my <strong className="text-accent-400">attention to detail</strong>,
                        <strong className="text-accent-400"> analytical thinking</strong>, and ability to collaborate effectively
                        across teams. I'm constantly learning and adapting to new technologies, driven by a passion for creating
                        innovative solutions that make a real impact.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
