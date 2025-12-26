'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const footerLinks = {
    services: [
        { name: 'AI Audit & Planning', href: '/ai-audit' },
        { name: 'Technical Execution', href: '/technical-execution' },
        { name: 'Transformation Leadership', href: '/leadership' },
    ],
    company: [
        { name: 'About', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Insights', href: '/insights' },
        { name: 'Contact', href: '/contact' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
    ],
};

export default function Footer() {
    return (
        <footer className="relative mt-32 border-t border-white/5">
            {/* Background Gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-nc-coral/5 blur-[100px]" />
                <div className="absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-nc-purple/5 blur-[80px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
                    {/* Brand Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-1"
                    >
                        <Link href="/" className="flex items-center gap-3">
                            <Icons.Logo className="w-10 h-10" />
                            <span className="text-xl font-semibold">
                                New <span className="gradient-text">Clarity</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-white/50 leading-relaxed max-w-xs">
                            Your AI Strategy and Transformation Partners. Strategic plans, technical
                            implementation, and transformational leadership.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex gap-3">
                            {[
                                { icon: Icons.LinkedIn, href: '#' },
                                { icon: Icons.Twitter, href: '#' },
                                { icon: Icons.Email, href: 'mailto:hello@newclarity.ai' },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                                >
                                    <social.icon className="w-5 h-5" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Links Sections */}
                    <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
                        {/* Services */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.services.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200 link-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Company */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white/50 hover:text-white transition-colors duration-200 link-underline"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Newsletter */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="col-span-2 md:col-span-1"
                        >
                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                                Stay Updated
                            </h3>
                            <p className="text-sm text-white/50 mb-4">
                                Get the latest AI insights delivered to your inbox.
                            </p>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="flex-1 px-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-nc-coral/50 transition-colors"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    type="submit"
                                    className="px-4 py-3 rounded-full gradient-coral-purple text-white text-sm font-medium"
                                >
                                    <Icons.ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
                >
                    <p className="text-sm text-white/40">
                        © {new Date().getFullYear()} New Clarity. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm text-white/40 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
