'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Icons } from '@/components/ui/Icons';

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        service: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formState);
    };

    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-nc-purple/20 blur-[120px]"
                />
                <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.3, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-nc-coral/20 blur-[100px]"
                />

                <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Icons.Email className="w-4 h-4 text-nc-coral" />
                        <span className="text-sm text-white/70">Get in Touch</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed"
                    >
                        Ready to transform your organization with AI? Schedule a free consultation
                        to discuss your goals and explore how we can help.
                    </motion.p>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={formState.name}
                                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-nc-coral/50 transition-colors"
                                            placeholder="John Doe"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={formState.email}
                                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                            className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-nc-coral/50 transition-colors"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-white/70 mb-2">
                                        Company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        value={formState.company}
                                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-nc-coral/50 transition-colors"
                                        placeholder="Your Company"
                                    />
                                </div>

                                {/* Service Interest */}
                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-white/70 mb-2">
                                        What are you interested in?
                                    </label>
                                    <select
                                        id="service"
                                        value={formState.service}
                                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-nc-coral/50 transition-colors appearance-none cursor-pointer"
                                    >
                                        <option value="" className="bg-nc-dark">Select a service</option>
                                        <option value="audit" className="bg-nc-dark">AI Audit & Strategic Planning</option>
                                        <option value="execution" className="bg-nc-dark">Technical Execution</option>
                                        <option value="leadership" className="bg-nc-dark">Transformation Leadership</option>
                                        <option value="all" className="bg-nc-dark">Full Transformation Partnership</option>
                                        <option value="other" className="bg-nc-dark">Other / Not Sure</option>
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                                        Tell us about your project
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-nc-coral/50 transition-colors resize-none"
                                        placeholder="Describe your AI transformation goals..."
                                    />
                                </div>

                                {/* Submit */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full btn-apple btn-primary py-5 text-lg"
                                >
                                    <span>Send Message</span>
                                    <Icons.ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            {/* Quick Info Cards */}
                            <div className="space-y-4">
                                <motion.a
                                    href="mailto:hello@newclarity.ai"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-5 p-6 glass-card rounded-2xl group hover:bg-white/[0.06] transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl gradient-coral-purple p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center group-hover:bg-nc-card transition-colors">
                                            <Icons.Email className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 mb-1">Email Us</div>
                                        <div className="font-semibold group-hover:text-white transition-colors">hello@newclarity.ai</div>
                                    </div>
                                </motion.a>

                                <motion.a
                                    href="#"
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-5 p-6 glass-card rounded-2xl group hover:bg-white/[0.06] transition-all"
                                >
                                    <div className="w-14 h-14 rounded-2xl gradient-coral-purple p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center group-hover:bg-nc-card transition-colors">
                                            <Icons.LinkedIn className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 mb-1">Connect on LinkedIn</div>
                                        <div className="font-semibold group-hover:text-white transition-colors">New Clarity AI</div>
                                    </div>
                                </motion.a>

                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="flex items-center gap-5 p-6 glass-card rounded-2xl"
                                >
                                    <div className="w-14 h-14 rounded-2xl gradient-coral-purple p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-nc-dark flex items-center justify-center">
                                            <Icons.Globe className="w-6 h-6 text-white" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-sm text-white/50 mb-1">Location</div>
                                        <div className="font-semibold">Remote-First, Global Team</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* What to Expect */}
                            <div className="glass-strong rounded-3xl p-8">
                                <h3 className="text-lg font-semibold mb-6">What to Expect</h3>
                                <ul className="space-y-4">
                                    {[
                                        { step: '1', text: 'We\'ll respond within 24 hours' },
                                        { step: '2', text: 'Schedule a 30-minute discovery call' },
                                        { step: '3', text: 'Receive a custom proposal' },
                                        { step: '4', text: 'Begin your transformation journey' },
                                    ].map((item) => (
                                        <li key={item.step} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full gradient-coral-purple flex items-center justify-center text-sm font-bold">
                                                {item.step}
                                            </div>
                                            <span className="text-white/70">{item.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4">
                                {[
                                    { icon: Icons.Shield, text: 'NDA Protected' },
                                    { icon: Icons.Clock, text: '24hr Response' },
                                    { icon: Icons.Check, text: 'No Obligation' },
                                ].map((badge) => (
                                    <div key={badge.text} className="flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-white/60">
                                        <badge.icon className="w-4 h-4" />
                                        {badge.text}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
