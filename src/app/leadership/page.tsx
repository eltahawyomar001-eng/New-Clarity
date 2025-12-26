'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const offerings = [
    {
        title: 'Fractional Chief AI Officer',
        description: 'Executive-level AI leadership without the full-time commitment. Strategic guidance matched to your needs.',
        features: ['Strategic planning', 'Board presentations', 'Vendor evaluation', 'Team structure'],
    },
    {
        title: 'Change Management',
        description: 'Navigate the human side of AI transformation with proven change management frameworks.',
        features: ['Communication plans', 'Training programs', 'Adoption tracking', 'Culture alignment'],
    },
    {
        title: 'Team Development',
        description: 'Build internal AI capabilities through targeted training and mentorship programs.',
        features: ['Skills assessment', 'Training curriculum', 'Hiring support', 'Career paths'],
    },
];

export default function LeadershipPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-nc-teal/20 blur-[150px]"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                        >
                            <Icons.RocketLaunch className="w-4 h-4 text-nc-teal" />
                            <span className="text-sm text-white/70">Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        >
                            Transformation
                            <br />
                            <span className="gradient-text">Leadership</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 leading-relaxed mb-8"
                        >
                            Ongoing fractional AI leadership to ensure sustained impact and
                            continuous improvement. We embed with your team to drive lasting change.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/contact" className="btn-apple btn-primary">
                                <span>Get Leadership Support</span>
                                <Icons.ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Offerings */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="space-y-8">
                        {offerings.map((offering, index) => (
                            <motion.div
                                key={offering.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-3xl p-8 lg:p-10"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                    <div className="lg:col-span-2">
                                        <h3 className="text-2xl font-semibold mb-4">{offering.title}</h3>
                                        <p className="text-white/60 leading-relaxed text-lg">{offering.description}</p>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/40 uppercase tracking-wider mb-4">Includes</div>
                                        <ul className="space-y-3">
                                            {offering.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-3 text-white/70">
                                                    <Icons.Check className="w-4 h-4 text-nc-teal flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-3xl p-12 lg:p-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready for <span className="gradient-text">Lasting Impact?</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Let&apos;s discuss how ongoing leadership can accelerate your AI transformation.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Schedule a Call</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
