import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Code2 } from 'lucide-react';

const Hero = () => {
    return (
        <section id="#" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-sm mb-8 relative overflow-hidden group shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                    >
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 duration-1000"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
                        </span>
                        <span className="text-sm text-green-400 font-mono tracking-wide uppercase font-semibold text-shadow-sm">Available for Work</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
                    >
                        Full Stack Roblox <span className="text-white">Scripter</span>
                        <br />
                        & Game Developer
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    >
                        Crafting immersive gameplay mechanics, optimized systems, and secure frameworks using Luau.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,255,255,0.4)", transition: { duration: 0.1 } }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-100"
                        >
                            View Projects <ChevronRight className="w-4 h-4" />
                        </motion.a>
                    </motion.div>
                </div>

                {/* Code Snippet Decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 max-w-3xl mx-auto"
                >
                    <div className="rounded-lg border border-white/10 bg-black/50 backdrop-blur-sm p-4 font-mono text-sm overflow-hidden">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            <span className="ml-2 text-gray-500 text-xs">system_core.lua</span>
                        </div>
                        <div className="space-y-1 text-gray-300">
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">1</span>
                                <span><span className="text-purple-400">local</span> Maid = <span className="text-blue-400">require</span>(Shared.Maid)</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">2</span>
                                <span><span className="text-purple-400">local</span> GameSystem = { }</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">3</span>
                                <span>GameSystem.__index = GameSystem</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">4</span>
                                <span></span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">5</span>
                                <span><span className="text-purple-400">function</span> GameSystem.<span className="text-blue-400">new</span>()</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">6</span>
                                <span className="pl-4"><span className="text-purple-400">local</span> self = <span className="text-yellow-300">setmetatable</span>({ }, GameSystem)</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">7</span>
                                <span className="pl-4">self._maid = Maid.new()</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">8</span>
                                <span className="pl-4"><span className="text-purple-400">return</span> self</span>
                            </div>
                            <div className="flex">
                                <span className="text-gray-600 w-8 select-none">9</span>
                                <span><span className="text-purple-400">end</span></span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
