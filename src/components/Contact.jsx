import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Gamepad2, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Interested in working together? Feel free to reach out through any of these platforms.
                    </p>
                </motion.div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <motion.a
                        href="https://discord.com/users/996690533168721930"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-[#5865F2]/50 hover:bg-[#5865F2]/10 transition-colors group w-full sm:w-auto min-w-[200px] justify-center"
                    >
                        <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-[#5865F2] transition-colors" />
                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Discord</span>
                    </motion.a>

                    <motion.a
                        href="https://www.roblox.com/users/8284290795/profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-sm hover:border-white/50 hover:bg-white/10 transition-colors group w-full sm:w-auto min-w-[200px] justify-center"
                    >
                        <Gamepad2 className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Roblox</span>
                    </motion.a>

                    <motion.a
                        href="mailto:businessnsawill@outlook.com"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-zinc-900/50 border border-zinc-800 backdrop-blur-md hover:border-[#0078D4]/50 hover:bg-[#0078D4]/10 transition-colors group w-full sm:w-auto min-w-[200px] justify-center"
                    >
                        <Mail className="w-5 h-5 text-gray-400 group-hover:text-[#0078D4] transition-colors" />
                        <span className="font-medium text-gray-200 group-hover:text-white transition-colors">Email</span>
                    </motion.a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
