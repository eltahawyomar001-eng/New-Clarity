'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';

const articles = [
    {
        id: 1,
        title: 'The Future of AI Agents in Enterprise',
        excerpt: 'How autonomous AI agents are reshaping business operations and what it means for your organization.',
        category: 'AI Strategy',
        date: 'Dec 2024',
        readTime: '8 min read',
    },
    {
        id: 2,
        title: 'Building an AI-Ready Organization',
        excerpt: 'Key steps to prepare your team and infrastructure for successful AI implementation.',
        category: 'Transformation',
        date: 'Dec 2024',
        readTime: '6 min read',
    },
    {
        id: 3,
        title: 'Measuring ROI on AI Investments',
        excerpt: 'Frameworks and metrics for quantifying the business impact of your AI initiatives.',
        category: 'Analytics',
        date: 'Nov 2024',
        readTime: '10 min read',
    },
    {
        id: 4,
        title: 'AI Ethics: A Practical Guide',
        excerpt: 'Navigating the ethical considerations of AI deployment in your business.',
        category: 'Ethics',
        date: 'Nov 2024',
        readTime: '7 min read',
    },
    {
        id: 5,
        title: 'From POC to Production: Scaling AI',
        excerpt: 'Lessons learned from taking AI projects from prototype to enterprise-scale deployment.',
        category: 'Technical',
        date: 'Oct 2024',
        readTime: '9 min read',
    },
    {
        id: 6,
        title: 'The Rise of Vertical AI',
        excerpt: 'Why industry-specific AI solutions are outperforming general-purpose models.',
        category: 'Trends',
        date: 'Oct 2024',
        readTime: '5 min read',
    },
];

export default function InsightsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
                <div className="absolute inset-0 gradient-hero" />
                <div className="absolute inset-0 dot-pattern opacity-40" />

                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-nc-coral/20 blur-[120px]"
                />

                <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                    >
                        <Icons.Document className="w-4 h-4 text-nc-coral" />
                        <span className="text-sm text-white/70">News & Resources</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        <span className="gradient-text">Insights</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-white/60 leading-relaxed"
                    >
                        Thought leadership, practical guides, and the latest trends in
                        AI transformation from our team of experts.
                    </motion.p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <Link href="#">
                                    <div className="glass-card rounded-3xl p-6 h-full transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-white/15">
                                        {/* Category & Date */}
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-nc-coral/10 text-nc-coral border border-nc-coral/20">
                                                {article.category}
                                            </span>
                                            <span className="text-xs text-white/40">{article.date}</span>
                                        </div>

                                        {/* Title */}
                                        <h2 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors leading-tight">
                                            {article.title}
                                        </h2>

                                        {/* Excerpt */}
                                        <p className="text-white/50 text-sm leading-relaxed mb-4">
                                            {article.excerpt}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                            <span className="text-xs text-white/40">{article.readTime}</span>
                                            <span className="flex items-center gap-1 text-sm text-white/60 group-hover:text-white transition-colors">
                                                Read more
                                                <Icons.ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="relative py-20">
                <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-strong rounded-3xl p-12 lg:p-16"
                    >
                        <Icons.Email className="w-10 h-10 text-nc-coral mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Stay <span className="gradient-text">Informed</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Get the latest AI insights delivered directly to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-5 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-nc-coral/50 transition-colors"
                            />
                            <button type="submit" className="btn-apple btn-primary whitespace-nowrap">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
