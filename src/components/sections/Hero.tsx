'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 gradient-hero" />
            <div className="absolute inset-0 dot-pattern opacity-50" />

            {/* Animated Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
                className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-nc-coral/20 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 2,
                }}
                className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-nc-purple/20 blur-[100px]"
            />

            {/* Content - Added more top padding to prevent navbar overlap */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center pt-32 pb-20">
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
                >
                    <Icons.Sparkles className="w-4 h-4 text-nc-coral" />
                    <span className="text-sm text-white/70">AI Transformation Experts</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
                >
                    Your AI Strategy
                    <br />
                    <span className="gradient-text">& Transformation</span>
                    <br />
                    Partners
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-white/60 leading-relaxed mb-10"
                >
                    Strategic plans, technical implementation, and transformational
                    leadership to help you simplify complexity and drive measurable ROI.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <Link href="/contact" className="btn-apple btn-primary">
                        <span>Book a Call</span>
                        <Icons.ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/case-studies" className="btn-apple btn-secondary">
                        <Icons.Play className="w-4 h-4" />
                        <span>View Case Studies</span>
                    </Link>
                </motion.div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { value: '40%', label: 'Avg. Time Saved' },
                        { value: '150+', label: 'AI Projects' },
                        { value: '98%', label: 'Client Retention' },
                        { value: '$2M+', label: 'ROI Generated' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                            className="text-center"
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-2 text-white/40"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </motion.div>
        </section>
    );
}
