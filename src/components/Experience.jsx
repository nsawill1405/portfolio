import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const experiences = [
    {
        role: "Lead Scripter",
        company: "Game Studio X",
        period: "2024 - Present",
        description: "Architecting the core game loop for a 50k+ CCU roleplay game. Optimization of replication systems for 100+ player servers.",
        tech: ["Luau", "Knit", "ProfileService"]
    },
    {
        role: "Systems Engineer",
        company: "Adventure Interactive",
        period: "2022 - 2024",
        description: "Developed a custom vehicle chassis and weapon system. Implemented secure anti-cheat measures utilizing server-side validation.",
        tech: ["TypeScript", "Roact", "Matter"]
    },
    {
        role: "Freelance Developer",
        company: "Self-Employed",
        period: "2020 - 2022",
        description: "Delivered over 20+ commissions ranging from UI frameworks to full game prototypes. Maintained 5-star rating on Talent Hub.",
        tech: ["Luau", "Gui"]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 flex items-center gap-3">
                        Previous Jobs
                    </h2>
                    <div className="h-1 w-20 bg-white"></div>
                </motion.div>

                <div className="relative border-l-2 border-white/20 ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white mt-[1.5rem]"></div>

                            <div className="bg-zinc-900/80 border border-white/10 p-6 rounded-lg backdrop-blur-md hover:border-white/30 hover:bg-zinc-900 transition-all shadow-lg hover:shadow-white/5">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1 md:mt-0 bg-white/5 px-3 py-1 rounded-full">
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>
                                </div>

                                <h4 className="text-lg text-gray-300 font-semibold mb-4">{exp.company}</h4>
                                <p className="text-gray-300 mb-6 leading-relaxed bg-black/30 p-4 rounded-md border border-white/5">
                                    {exp.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {exp.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1 bg-white/10 border border-white/5 rounded text-xs text-white font-mono hover:bg-white hover:text-black transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
