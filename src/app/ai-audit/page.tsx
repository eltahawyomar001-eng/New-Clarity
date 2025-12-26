'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const auditPhases = [
    {
        phase: '01',
        title: 'Discovery',
        duration: '1-2 weeks',
        description: 'Deep dive into your business objectives, current technology landscape, and organizational readiness for AI.',
        deliverables: ['Stakeholder interviews', 'Technology inventory', 'Process documentation'],
    },
    {
        phase: '02',
        title: 'Analysis',
        duration: '2-3 weeks',
        description: 'Comprehensive assessment of AI opportunities, risks, and potential ROI across your organization.',
        deliverables: ['Opportunity matrix', 'Risk assessment', 'ROI projections'],
    },
    {
        phase: '03',
        title: 'Strategy',
        duration: '1-2 weeks',
        description: 'Development of a prioritized AI roadmap aligned with your business goals and resources.',
        deliverables: ['AI roadmap', 'Implementation timeline', 'Resource plan'],
    },
    {
        phase: '04',
        title: 'Presentation',
        duration: '1 week',
        description: 'Executive presentation of findings, recommendations, and next steps for stakeholder alignment.',
        deliverables: ['Executive summary', 'Detailed report', 'Action plan'],
    },
];

const benefits = [
    { icon: Icons.Target, title: 'Clear Direction', description: 'Know exactly where AI can drive the most value in your organization.' },
    { icon: Icons.ChartBar, title: 'ROI Projections', description: 'Understand the expected returns before making any investment.' },
    { icon: Icons.Shield, title: 'Risk Mitigation', description: 'Identify and plan for potential challenges before they arise.' },
    { icon: Icons.Users, title: 'Team Alignment', description: 'Get everyone on the same page with a shared vision for AI.' },
];

export default function AIAuditPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-nc-coral/20 blur-[150px]"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                        >
                            <Icons.Target className="w-4 h-4 text-nc-coral" />
                            <span className="text-sm text-white/70">Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        >
                            AI Audit &
                            <br />
                            <span className="gradient-text">Strategic Planning</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 leading-relaxed mb-8"
                        >
                            A comprehensive assessment of your AI readiness with a clear,
                            prioritized roadmap for transformation. Know exactly where to
                            invest for maximum impact.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/contact" className="btn-apple btn-primary">
                                <span>Start Your Audit</span>
                                <Icons.ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="relative py-20 bg-nc-dark">
                <div className="absolute inset-0 grid-pattern" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-2xl p-6 text-center"
                            >
                                <div className="w-12 h-12 rounded-xl gradient-coral-purple mx-auto mb-4 flex items-center justify-center">
                                    <benefit.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                                <p className="text-sm text-white/50">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-nc-coral text-sm uppercase tracking-wider font-medium">The Process</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            How the <span className="gradient-text">Audit Works</span>
                        </h2>
                    </motion.div>

                    <div className="space-y-8">
                        {auditPhases.map((phase, index) => (
                            <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-3xl p-8 lg:p-10"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
                                    <div>
                                        <div className="text-4xl font-bold gradient-text mb-2">{phase.phase}</div>
                                        <div className="text-sm text-nc-coral">{phase.duration}</div>
                                    </div>
                                    <div className="lg:col-span-2">
                                        <h3 className="text-2xl font-semibold mb-3">{phase.title}</h3>
                                        <p className="text-white/60 leading-relaxed">{phase.description}</p>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/40 uppercase tracking-wider mb-3">Deliverables</div>
                                        <ul className="space-y-2">
                                            {phase.deliverables.map((item) => (
                                                <li key={item} className="flex items-center gap-2 text-sm text-white/70">
                                                    <Icons.Check className="w-4 h-4 text-nc-coral" />
                                                    {item}
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
                            Ready to <span className="gradient-text">Get Clarity?</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Schedule a free consultation to discuss your AI transformation goals.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Book Your Audit</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
