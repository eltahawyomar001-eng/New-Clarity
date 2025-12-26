'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const services = [
    {
        icon: Icons.Target,
        title: 'AI Audit & Strategic Planning',
        description: 'Comprehensive assessment of your AI readiness with a clear roadmap for transformation.',
        features: ['Current state analysis', 'Opportunity identification', 'ROI projections'],
        gradient: 'from-nc-coral to-nc-orange',
        href: '/ai-audit',
    },
    {
        icon: Icons.Cpu,
        title: 'Technical Execution',
        description: 'Expert development and deployment of AI solutions tailored to your business needs.',
        features: ['Custom AI agents', 'Data science & ML', 'System integration'],
        gradient: 'from-nc-purple to-nc-blue',
        href: '/technical-execution',
    },
    {
        icon: Icons.RocketLaunch,
        title: 'Transformation Leadership',
        description: 'Ongoing fractional AI leadership to ensure sustained impact and continuous improvement.',
        features: ['Change management', 'Team upskilling', 'Performance tracking'],
        gradient: 'from-nc-teal to-nc-green',
        href: '/leadership',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.25, 1, 0.5, 1],
        },
    },
};

export default function Services() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-nc-dark" />
            <div className="absolute inset-0 grid-pattern" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-nc-coral mb-4">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                        End-to-End AI
                        <br />
                        <span className="gradient-text">Transformation</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-white/60">
                        From strategy to execution to ongoing leadership, we guide you through
                        every step of your AI transformation journey.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={cardVariants}
                            className="group relative"
                        >
                            <Link href={service.href}>
                                <div className="relative h-full p-8 rounded-3xl glass-card overflow-hidden transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08]">
                                    {/* Glow Effect on Hover */}
                                    <div className={`absolute -inset-px rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`} />

                                    {/* Icon */}
                                    <div className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] mb-6`}>
                                        <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center">
                                            <service.icon className="w-6 h-6 text-white" />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <h3 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/50 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2 mb-6">
                                            {service.features.map((feature) => (
                                                <li key={feature} className="flex items-center gap-2 text-sm text-white/60">
                                                    <Icons.Check className="w-4 h-4 text-nc-coral" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                                            <span>Learn more</span>
                                            <motion.div
                                                className="group-hover:translate-x-1 transition-transform duration-200"
                                            >
                                                <Icons.ArrowRight className="w-4 h-4" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
