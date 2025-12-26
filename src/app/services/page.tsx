'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const services = [
    {
        icon: Icons.Target,
        title: 'AI Audit & Strategic Planning',
        description: 'Comprehensive assessment of your AI readiness with a clear roadmap for transformation. We analyze your current state, identify opportunities, and create a prioritized action plan.',
        features: [
            'Current state technology assessment',
            'Opportunity identification & prioritization',
            'ROI projections & business case development',
            'Custom AI roadmap creation',
            'Stakeholder alignment workshops',
        ],
        gradient: 'from-nc-coral to-nc-orange',
        href: '/ai-audit',
    },
    {
        icon: Icons.Cpu,
        title: 'Technical Execution',
        description: 'Expert development and deployment of AI solutions tailored to your business needs. From custom AI agents to data pipelines, we build production-ready systems.',
        features: [
            'Custom AI agent development',
            'Machine learning model training',
            'Data pipeline architecture',
            'System integration & APIs',
            'Cloud infrastructure setup',
        ],
        gradient: 'from-nc-purple to-nc-blue',
        href: '/technical-execution',
    },
    {
        icon: Icons.RocketLaunch,
        title: 'Transformation Leadership',
        description: 'Ongoing fractional AI leadership to ensure sustained impact and continuous improvement. We embed with your team to drive lasting change.',
        features: [
            'Fractional Chief AI Officer',
            'Change management guidance',
            'Team training & upskilling',
            'Performance tracking & optimization',
            'Continuous improvement programs',
        ],
        gradient: 'from-nc-teal to-nc-green',
        href: '/leadership',
    },
];

const process = [
    {
        step: '01',
        title: 'Discovery',
        description: 'We learn about your business, challenges, and goals through in-depth conversations.',
    },
    {
        step: '02',
        title: 'Assessment',
        description: 'Our team conducts a thorough analysis of your current capabilities and opportunities.',
    },
    {
        step: '03',
        title: 'Strategy',
        description: 'We develop a custom AI roadmap aligned with your business objectives.',
    },
    {
        step: '04',
        title: 'Execution',
        description: 'Our experts build and deploy solutions with ongoing support and iteration.',
    },
];

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-nc-purple/20 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-1/4 -left-20 w-80 h-80 rounded-full bg-nc-coral/20 blur-[100px]"
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Icons.Sparkles className="w-4 h-4 text-nc-coral" />
                        <span className="text-sm text-white/70">What We Do</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        Our <span className="gradient-text">Services</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed"
                    >
                        End-to-end AI transformation services designed to help you move from
                        strategy to execution to sustainable impact.
                    </motion.p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative h-full p-8 rounded-3xl glass-card overflow-hidden transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.06]">
                                    {/* Glow Effect */}
                                    <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`} />

                                    {/* Icon */}
                                    <div className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                                        <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center group-hover:bg-nc-card transition-colors">
                                            <service.icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-semibold mb-4 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/50 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm text-white/60">
                                                    <Icons.Check className="w-4 h-4 text-nc-coral mt-0.5 flex-shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <Link
                                            href={service.href}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors"
                                        >
                                            <span>Learn more</span>
                                            <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="relative py-20 bg-nc-dark">
                <div className="absolute inset-0 grid-pattern" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-nc-coral text-sm uppercase tracking-wider font-medium">How We Work</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Our <span className="gradient-text">Process</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative"
                            >
                                {/* Connector Line */}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-white/10 to-transparent" />
                                )}

                                <div className="glass-card rounded-2xl p-6 h-full">
                                    <div className="text-3xl font-bold gradient-text mb-4">{step.step}</div>
                                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
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
                        <Icons.Lightning className="w-10 h-10 text-nc-coral mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Get <span className="gradient-text">Started?</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Let's discuss how our services can help transform your organization with AI.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Book a Consultation</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
