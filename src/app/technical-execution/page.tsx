'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const capabilities = [
    {
        icon: Icons.Brain,
        title: 'Custom AI Agents',
        description: 'Intelligent agents that automate complex workflows and decision-making processes.',
    },
    {
        icon: Icons.ChartBar,
        title: 'Data Science & ML',
        description: 'Machine learning models trained on your data for predictions and insights.',
    },
    {
        icon: Icons.Cpu,
        title: 'System Integration',
        description: 'Seamless integration with your existing tech stack and business processes.',
    },
    {
        icon: Icons.Globe,
        title: 'Cloud Infrastructure',
        description: 'Scalable, secure cloud architecture for production AI deployments.',
    },
];

const techStack = [
    'Python', 'TensorFlow', 'PyTorch', 'LangChain', 'OpenAI', 'AWS', 'GCP', 'Azure',
    'Kubernetes', 'Docker', 'PostgreSQL', 'MongoDB', 'Redis', 'FastAPI', 'Next.js'
];

export default function TechnicalExecutionPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-nc-purple/20 blur-[150px]"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                        >
                            <Icons.Cpu className="w-4 h-4 text-nc-purple" />
                            <span className="text-sm text-white/70">Service</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                        >
                            Technical
                            <br />
                            <span className="gradient-text">Execution</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-white/60 leading-relaxed mb-8"
                        >
                            Expert development and deployment of AI solutions tailored to your
                            business needs. From custom agents to production systems, we build
                            AI that works.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            <Link href="/contact" className="btn-apple btn-primary">
                                <span>Start Building</span>
                                <Icons.ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className="relative py-20 bg-nc-dark">
                <div className="absolute inset-0 grid-pattern" />
                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-nc-purple text-sm uppercase tracking-wider font-medium">Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            What We <span className="gradient-text">Build</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={cap.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-3xl p-8 group hover:bg-white/[0.06] transition-all"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-nc-purple to-nc-blue p-[1px] mb-6">
                                    <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center group-hover:bg-nc-card transition-colors">
                                        <cap.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{cap.title}</h3>
                                <p className="text-white/50 leading-relaxed">{cap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <span className="text-nc-coral text-sm uppercase tracking-wider font-medium">Technologies</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Our <span className="gradient-text">Tech Stack</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-3"
                    >
                        {techStack.map((tech, index) => (
                            <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.03 }}
                                className="px-5 py-2.5 rounded-full glass-card text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all cursor-default"
                            >
                                {tech}
                            </motion.span>
                        ))}
                    </motion.div>
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
                            Let&apos;s Build <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Tell us about your project and let&apos;s explore how we can bring it to life.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Start a Project</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
