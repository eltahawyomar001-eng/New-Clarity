'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

export default function CTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-nc-black" />

            {/* Animated Gradient Background */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-nc-coral via-nc-purple to-nc-blue blur-[150px]"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Tag */}
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm mb-8">
                        <Icons.Lightning className="w-4 h-4 text-nc-coral" />
                        <span className="text-white/70">Ready to Transform?</span>
                    </span>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
                        Let&apos;s Build Your
                        <br />
                        <span className="gradient-text">AI-Powered Future</span>
                    </h2>

                    {/* Description */}
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed mb-10">
                        Book a free consultation to discuss your AI transformation goals.
                        We'll help you identify opportunities and create a roadmap for success.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="btn-apple btn-primary text-lg px-8 py-4">
                            <span>Schedule a Call</span>
                            <Icons.ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link href="/ai-audit" className="btn-apple btn-secondary text-lg px-8 py-4">
                            <span>Learn About Our Process</span>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-16 flex flex-wrap items-center justify-center gap-8 text-white/40"
                    >
                        <div className="flex items-center gap-2">
                            <Icons.Shield className="w-5 h-5" />
                            <span className="text-sm">NDA Protected</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icons.Clock className="w-5 h-5" />
                            <span className="text-sm">30-Min Free Consultation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Icons.Users className="w-5 h-5" />
                            <span className="text-sm">Fortune 500 Experience</span>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
