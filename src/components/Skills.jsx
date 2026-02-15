import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Languages", items: ["Luau", "TypeScript", "Python", "Java", "C#", "JavaScript", "HTML", "CSS"] },
    { category: "Frameworks & Libs", items: ["Knit", "ProfileService", "ReplicaService"] },
    { category: "Tools", items: ["Rojo", "Github", "Antigravity"] }
];

const Skills = () => {
    return (
        <section id="skills" className="py-20 border-t border-white/10 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 opacity-20 transform translate-x-1/2 -translate-y-1/2">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-96 h-96 border border-dashed border-white rounded-full"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">Technical Arsenal</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            My toolkit is curated for performance, security, and scalability.
                            I leverage modern workflows to ship robust code.
                        </p>
                        <div className="h-1 w-20 bg-white"></div>
                    </motion.div>

                    <div className="space-y-12">
                        {skills.map((skillGroup, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                            >
                                <h3 className="text-xl font-mono text-gray-500 mb-6 border-b border-white/10 pb-2 inline-block">
                                    {skillGroup.category}
                                </h3>
                                <div className="flex flex-wrap gap-4">
                                    {skillGroup.items.map((item, itemIndex) => (
                                        <motion.span
                                            key={item}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.3 }}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                                            className="px-5 py-2 border border-white/10 rounded-full text-sm sm:text-base cursor-default transition-colors bg-white/5 backdrop-blur-sm"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
