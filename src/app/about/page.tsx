'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const team = [
    {
        name: 'Alex Morrison',
        role: 'Founder & CEO',
        bio: 'Former VP of AI at Fortune 100. 15+ years leading digital transformation.',
    },
    {
        name: 'Dr. Sarah Kim',
        role: 'Chief Technology Officer',
        bio: 'PhD in Machine Learning. Previously Staff Engineer at Google DeepMind.',
    },
    {
        name: 'Marcus Chen',
        role: 'Head of Strategy',
        bio: 'Ex-McKinsey partner specializing in AI-driven business transformation.',
    },
    {
        name: 'Elena Rodriguez',
        role: 'VP of Engineering',
        bio: 'Built ML platforms at scale for Amazon. Expert in production AI systems.',
    },
];

const values = [
    {
        icon: Icons.Target,
        title: 'Results-Driven',
        description: 'We measure success by the tangible outcomes we deliver for our clients.',
    },
    {
        icon: Icons.Shield,
        title: 'Trusted Partner',
        description: 'We operate with complete transparency and treat your business as our own.',
    },
    {
        icon: Icons.Lightning,
        title: 'Innovation First',
        description: 'We stay at the cutting edge to bring you the most effective solutions.',
    },
    {
        icon: Icons.Users,
        title: 'Collaborative',
        description: 'We work alongside your teams to build lasting internal capabilities.',
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-nc-coral/20 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-nc-purple/20 blur-[100px]"
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Icons.Users className="w-4 h-4 text-nc-coral" />
                        <span className="text-sm text-white/70">Our Story</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        About <span className="gradient-text">New Clarity</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 leading-relaxed"
                    >
                        We're a team of AI strategists, engineers, and transformation experts
                        on a mission to help organizations unlock the full potential of artificial intelligence.
                    </motion.p>
                </div>
            </section>

            {/* Mission */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-nc-coral text-sm uppercase tracking-wider font-medium">Our Mission</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                                Simplifying Complexity.
                                <br />
                                <span className="gradient-text">Driving Results.</span>
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-6">
                                AI has the power to transform businesses, but the path from possibility to reality
                                is often unclear. We bridge that gap by combining deep technical expertise with
                                strategic business acumen.
                            </p>
                            <p className="text-white/60 text-lg leading-relaxed">
                                From initial audit to ongoing transformation leadership, we partner with you
                                at every stage—ensuring that AI investments translate into measurable,
                                sustainable business outcomes.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-6"
                        >
                            {[
                                { value: '150+', label: 'AI Projects Delivered' },
                                { value: '45+', label: 'Enterprise Clients' },
                                { value: '98%', label: 'Client Satisfaction' },
                                { value: '3x', label: 'Average ROI' },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card rounded-2xl p-6 text-center"
                                >
                                    <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-white/50">{stat.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="relative py-20 bg-nc-dark">
                <div className="absolute inset-0 grid-pattern" />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-nc-coral text-sm uppercase tracking-wider font-medium">Our Values</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            What <span className="gradient-text">Drives Us</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card rounded-2xl p-8 text-center group hover:bg-white/[0.06] transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl gradient-coral-purple p-[1px] mx-auto mb-6">
                                    <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center group-hover:bg-nc-card transition-colors">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                                <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-nc-coral text-sm uppercase tracking-wider font-medium">Leadership</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Meet the <span className="gradient-text">Team</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="glass-card rounded-3xl p-6 text-center h-full transition-all duration-300 group-hover:bg-white/[0.06]">
                                    {/* Avatar */}
                                    <div className="w-24 h-24 rounded-full gradient-coral-purple p-[2px] mx-auto mb-6">
                                        <div className="w-full h-full rounded-full bg-nc-dark flex items-center justify-center text-2xl font-bold gradient-text">
                                            {member.name.split(' ').map(n => n[0]).join('')}
                                        </div>
                                    </div>

                                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                                    <p className="text-sm text-nc-coral mb-4">{member.role}</p>
                                    <p className="text-sm text-white/50 leading-relaxed">{member.bio}</p>

                                    {/* Social Links */}
                                    <div className="flex justify-center gap-3 mt-6">
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.1 }}
                                            className="p-2 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            <Icons.LinkedIn className="w-4 h-4" />
                                        </motion.a>
                                        <motion.a
                                            href="#"
                                            whileHover={{ scale: 1.1 }}
                                            className="p-2 rounded-full bg-white/5 text-white/40 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            <Icons.Twitter className="w-4 h-4" />
                                        </motion.a>
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
                        <Icons.Sparkles className="w-10 h-10 text-nc-coral mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Let&apos;s Work <span className="gradient-text">Together</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Ready to explore how AI can transform your organization? We'd love to hear from you.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Get in Touch</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
