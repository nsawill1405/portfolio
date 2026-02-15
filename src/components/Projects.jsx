import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Search } from 'lucide-react';

const projects = [
    {
        title: 'FPS Game Framework',
        description: 'A modular gun system ensuring server-side validation and lag compensation. Features raycasting, recoil patterns, and ammo management.',
        tags: ['Luau', 'Rojo', 'Knit'],
        link: '#',
        github: '#'
    },
    {
        title: 'DataStore V2 Handler',
        description: 'Reliable data management wrapper with session locking, auto-saving, and data migration support. Prevents data loss during server crashes.',
        tags: ['ProfileService', 'Rojo'],
        link: '#',
        github: '#'
    },
    {
        title: 'Inventory UI System',
        description: 'Complete inventory backend with drag-and-drop replication, stacking logic, and anti-exploit verification.',
        tags: ['ProfileService', 'Rojo'],
        link: '#',
        github: '#'
    }
];

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const uniqueTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

    const filteredProjects = projects.filter(project => {
        const matchesTag = filter === 'All' || project.tags.includes(filter);
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesTag && matchesSearch;
    });

    return (
        <section id="projects" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Selected Works</h2>
                    <div className="h-1 w-20 bg-white mb-8"></div>

                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
                        {/* Filter Buttons */}
                        <div className="flex flex-wrap gap-2">
                            {uniqueTags.map(tag => (
                                <button
                                    key={tag}
                                    onClick={() => setFilter(tag)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${filter === tag
                                        ? 'bg-white text-black border-white'
                                        : 'bg-black/30 text-gray-400 border-white/20 hover:border-white hover:text-white backdrop-blur-sm'
                                        }`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative w-full md:w-64 group">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-white transition-colors w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-black/30 border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-white/50 transition-all placeholder:text-gray-600 backdrop-blur-sm"
                            />
                        </div>
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative border border-white/10 bg-zinc-900/80 backdrop-blur-md rounded-lg overflow-hidden transition-colors hover:border-white/30 hover:bg-zinc-900"
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="p-6 h-full flex flex-col relative z-10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-xl font-bold text-white transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <motion.a
                                                href={project.github}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors"
                                            >
                                                <Github className="w-4 h-4" />
                                            </motion.a>
                                            <motion.a
                                                href={project.link}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="p-2 rounded-full bg-white/10 hover:bg-white hover:text-black transition-colors"
                                            >
                                                <ExternalLink className="w-4 h-4" />
                                            </motion.a>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="text-xs font-mono px-2 py-1 rounded bg-white/10 text-gray-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 text-gray-500"
                    >
                        No projects found matching your criteria.
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
