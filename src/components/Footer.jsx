import React from 'react';
import { Mail, Twitter, Gamepad2 } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 border-t border-white/10 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl font-bold mb-8">Ready to create something amazing?</h2>

                <div className="flex justifying-center gap-8 mb-12 justify-center">
                    <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10">
                            <Mail className="w-6 h-6" />
                        </div>
                        <span className="text-sm">Email Me</span>
                    </a>
                    <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10">
                            <Twitter className="w-6 h-6" />
                        </div>
                        <span className="text-sm">Twitter</span>
                    </a>
                    <a href="#" className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                        <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10">
                            <Gamepad2 className="w-6 h-6" />
                        </div>
                        <span className="text-sm">Roblox</span>
                    </a>
                </div>

                <div className="text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} Dev.Lua. Built with React & Tailwind.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
