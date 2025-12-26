'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

// Navigation with Home included
const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="fixed top-0 left-0 right-0 z-50 px-4 py-5 md:px-8"
            >
                <nav className="mx-auto max-w-6xl">
                    <div className="glass-strong rounded-full px-6 py-3 flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2.5 group">
                            <motion.div
                                whileHover={{ rotate: 180, scale: 1.1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Icons.Logo className="w-8 h-8" />
                            </motion.div>
                            <span className="text-lg font-semibold tracking-tight hidden sm:block">
                                New<span className="gradient-text">Clarity</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation - Centered */}
                        <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="relative px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-full group"
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    />
                                </Link>
                            ))}
                        </div>

                        {/* CTA Button */}
                        <div className="flex items-center gap-3">
                            <Link
                                href="/contact"
                                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium bg-white text-nc-black hover:bg-white/90 transition-colors"
                            >
                                <span>Get Started</span>
                            </Link>

                            {/* Mobile Menu Button */}
                            <motion.button
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                {isOpen ? <Icons.X className="w-5 h-5" /> : <Icons.Menu className="w-5 h-5" />}
                            </motion.button>
                        </div>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="fixed top-24 left-4 right-4 glass-strong rounded-3xl z-50 md:hidden p-6"
                        >
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/5 transition-colors duration-200"
                                        >
                                            <span className="text-lg">{link.name}</span>
                                            <Icons.ChevronRight className="w-5 h-5 text-white/40" />
                                        </Link>
                                    </motion.div>
                                ))}

                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: navLinks.length * 0.05 }}
                                    className="mt-4 pt-4 border-t border-white/10"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-white text-nc-black font-medium"
                                    >
                                        <span>Get Started</span>
                                        <Icons.ArrowRight className="w-4 h-4" />
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
