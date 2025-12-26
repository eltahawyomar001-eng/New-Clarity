'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import { caseStudies } from '@/components/sections/CaseStudies';

export default function CaseStudiesPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
                {/* Background Effects */}
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/3 -right-20 w-96 h-96 rounded-full bg-nc-purple/20 blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 2,
                    }}
                    className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-nc-coral/20 blur-[100px]"
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Icons.Document className="w-4 h-4 text-nc-coral" />
                        <span className="text-sm text-white/70">Client Success Stories</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
                    >
                        Case <span className="gradient-text">Studies</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed"
                    >
                        Explore how we've helped organizations across industries simplify complexity
                        and drive measurable ROI through AI transformation.
                    </motion.p>
                </div>
            </section>

            {/* Filter Section */}
            <section className="relative py-8 border-y border-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-wrap items-center justify-center gap-3"
                    >
                        {['All', 'Finance', 'Technology', 'Retail', 'Consulting', 'Manufacturing'].map((filter, index) => (
                            <motion.button
                                key={filter}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.05 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${filter === 'All'
                                        ? 'bg-gradient-to-r from-nc-coral to-nc-purple text-white'
                                        : 'glass-card text-white/70 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {filter}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {caseStudies.map((study, index) => {
                            const IconComponent = Icons[study.icon as keyof typeof Icons] || Icons.Document;

                            return (
                                <motion.div
                                    key={study.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-50px' }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link href={study.href}>
                                        <div className="relative h-full rounded-3xl glass-card p-8 lg:p-10 overflow-hidden transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.06]">
                                            {/* Gradient Glow on Hover */}
                                            <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

                                            {/* Top Row */}
                                            <div className="relative z-10 flex items-start justify-between mb-6">
                                                {/* Industry Badge */}
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${study.gradient} p-[1px]`}>
                                                        <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center">
                                                            <IconComponent className="w-5 h-5 text-white" />
                                                        </div>
                                                    </div>
                                                    <span className="text-sm text-white/60 font-medium">{study.industry}</span>
                                                </div>

                                                {/* Arrow */}
                                                <motion.div
                                                    whileHover={{ scale: 1.1, rotate: 15 }}
                                                    className="p-3 rounded-full glass-card group-hover:bg-white/10 transition-colors"
                                                >
                                                    <Icons.ArrowUpRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                                                </motion.div>
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10">
                                                <h2 className="text-2xl lg:text-3xl font-semibold leading-tight mb-4 group-hover:text-white transition-colors">
                                                    {study.title}
                                                </h2>
                                                <p className="text-white/50 leading-relaxed mb-8">
                                                    {study.description}
                                                </p>

                                                {/* Metrics */}
                                                <div className="flex gap-8 pt-6 border-t border-white/5">
                                                    {study.metrics.map((metric) => (
                                                        <div key={metric.label}>
                                                            <div className={`text-2xl lg:text-3xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                                                {metric.value}
                                                            </div>
                                                            <div className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                                                                {metric.label}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-3xl p-12 lg:p-16"
                    >
                        <Icons.Sparkles className="w-10 h-10 text-nc-coral mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Write Your <span className="gradient-text">Success Story?</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Let's discuss how we can help transform your organization with AI.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Start a Conversation</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
