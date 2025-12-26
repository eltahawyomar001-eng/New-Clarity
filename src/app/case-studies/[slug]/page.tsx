'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/ui/Icons';
import { caseStudies } from '@/components/sections/CaseStudies';

// This would normally come from a CMS
const getCaseStudyData = (slug: string) => {
    const study = caseStudies.find((s) => s.href.includes(slug)) || caseStudies[0];
    return {
        ...study,
        fullContent: {
            challenge: `The client faced significant operational challenges in their ${study.industry.toLowerCase()} operations. Manual processes were consuming valuable time and resources, while data remained siloed and difficult to analyze. Leadership recognized the need for AI-driven transformation but lacked a clear roadmap for implementation.`,
            solution: `New Clarity conducted a comprehensive AI audit to identify key opportunities for automation and intelligence. We developed a custom solution architecture that integrated with existing systems while introducing advanced machine learning capabilities. Our team implemented the solution in phases, ensuring minimal disruption to ongoing operations.`,
            results: `The transformation delivered exceptional results across multiple metrics. The team saw immediate improvements in efficiency and accuracy, while long-term benefits included sustainable competitive advantages and new revenue opportunities enabled by AI-driven insights.`,
            testimonial: {
                quote: "Working with New Clarity was transformative for our organization. Their expertise in AI strategy and execution helped us achieve results we didn't think were possible in such a short timeframe.",
                author: "Executive Leadership",
                title: "C-Suite Executive",
                company: study.industry,
            },
            timeline: [
                { phase: 'Discovery & Audit', duration: '2 weeks', description: 'Comprehensive assessment of current state and opportunities' },
                { phase: 'Strategy & Design', duration: '3 weeks', description: 'Solution architecture and implementation roadmap' },
                { phase: 'Development', duration: '8 weeks', description: 'Agile development with continuous stakeholder alignment' },
                { phase: 'Deployment & Training', duration: '2 weeks', description: 'Rollout and team enablement' },
                { phase: 'Optimization', duration: 'Ongoing', description: 'Continuous improvement and support' },
            ],
            technologies: ['Machine Learning', 'Natural Language Processing', 'Cloud Infrastructure', 'Custom AI Agents', 'Data Pipeline Automation'],
        },
    };
};

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    // In a real app, you'd await this
    const resolvedParams = { slug: 'finance-automation' }; // Placeholder for demo
    const study = getCaseStudyData(resolvedParams.slug);
    const IconComponent = Icons[study.icon as keyof typeof Icons] || Icons.Document;

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-16">
                {/* Background */}
                <div className="absolute inset-0 bg-nc-black" />
                <div className={`absolute inset-0 bg-gradient-to-br ${study.gradient} opacity-10`} />
                <div className="absolute inset-0 dot-pattern opacity-30" />

                {/* Gradient Orbs */}
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
                    className="absolute top-1/4 -right-40 w-[500px] h-[500px] rounded-full bg-nc-coral/15 blur-[150px]"
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
                    className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full bg-nc-purple/15 blur-[120px]"
                />

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-white/50 mb-8"
                    >
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <Icons.ChevronRight className="w-4 h-4" />
                        <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
                        <Icons.ChevronRight className="w-4 h-4" />
                        <span className="text-white/70">{study.industry}</span>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Industry Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
                            >
                                <IconComponent className="w-4 h-4 text-nc-coral" />
                                <span className="text-sm text-white/70">{study.industry}</span>
                            </motion.div>

                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] mb-6"
                            >
                                {study.title}
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg md:text-xl text-white/60 leading-relaxed"
                            >
                                {study.description}
                            </motion.p>
                        </div>

                        {/* Metrics Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="glass-strong rounded-3xl p-8"
                        >
                            <h3 className="text-sm uppercase tracking-wider text-white/50 mb-6">Key Results</h3>
                            <div className="space-y-6">
                                {study.metrics.map((metric, index) => (
                                    <div key={metric.label}>
                                        <div className={`text-4xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                            {metric.value}
                                        </div>
                                        <div className="text-sm text-white/50 mt-1">{metric.label}</div>
                                        {index < study.metrics.length - 1 && (
                                            <div className="w-full h-px bg-white/5 mt-6" />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="relative py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">
                            {/* The Challenge */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nc-coral to-nc-orange flex items-center justify-center">
                                        <Icons.Target className="w-5 h-5 text-white" />
                                    </div>
                                    The Challenge
                                </h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {study.fullContent.challenge}
                                </p>
                            </motion.div>

                            {/* The Solution */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nc-purple to-nc-blue flex items-center justify-center">
                                        <Icons.Lightning className="w-5 h-5 text-white" />
                                    </div>
                                    Our Solution
                                </h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {study.fullContent.solution}
                                </p>
                            </motion.div>

                            {/* The Results */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-nc-teal to-nc-green flex items-center justify-center">
                                        <Icons.TrendingUp className="w-5 h-5 text-white" />
                                    </div>
                                    The Results
                                </h2>
                                <p className="text-white/60 leading-relaxed text-lg">
                                    {study.fullContent.results}
                                </p>
                            </motion.div>

                            {/* Testimonial */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative glass-card rounded-3xl p-8 lg:p-10"
                            >
                                <Icons.Quote className="w-12 h-12 text-nc-coral/30 absolute top-6 left-6" />
                                <div className="relative z-10 pt-8">
                                    <blockquote className="text-xl lg:text-2xl font-light leading-relaxed text-white/90 mb-8">
                                        &ldquo;{study.fullContent.testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full gradient-coral-purple p-[2px]">
                                            <div className="w-full h-full rounded-full bg-nc-dark flex items-center justify-center text-sm font-bold">
                                                {study.fullContent.testimonial.author.charAt(0)}
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-semibold">{study.fullContent.testimonial.author}</div>
                                            <div className="text-sm text-white/50">{study.fullContent.testimonial.title}</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Timeline */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-3xl p-8 sticky top-32"
                            >
                                <h3 className="text-lg font-semibold mb-6">Project Timeline</h3>
                                <div className="space-y-6">
                                    {study.fullContent.timeline.map((phase, index) => (
                                        <div key={phase.phase} className="relative pl-6">
                                            {/* Line */}
                                            {index < study.fullContent.timeline.length - 1 && (
                                                <div className="absolute left-[7px] top-6 w-px h-full bg-gradient-to-b from-nc-coral/50 to-transparent" />
                                            )}
                                            {/* Dot */}
                                            <div className="absolute left-0 top-1.5 w-[14px] h-[14px] rounded-full border-2 border-nc-coral bg-nc-dark" />
                                            {/* Content */}
                                            <div>
                                                <div className="font-medium text-white/90">{phase.phase}</div>
                                                <div className="text-xs text-nc-coral mt-0.5">{phase.duration}</div>
                                                <div className="text-sm text-white/50 mt-1">{phase.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Technologies */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="glass-card rounded-3xl p-8"
                            >
                                <h3 className="text-lg font-semibold mb-6">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {study.fullContent.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-white/70"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Case Studies */}
            <section className="relative py-20 border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-between mb-12"
                    >
                        <h2 className="text-3xl font-bold">More <span className="gradient-text">Success Stories</span></h2>
                        <Link href="/case-studies" className="btn-apple btn-secondary hidden md:inline-flex">
                            <span>View All</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {caseStudies.slice(0, 3).filter(s => s.id !== study.id).map((relatedStudy, index) => {
                            const RelatedIcon = Icons[relatedStudy.icon as keyof typeof Icons] || Icons.Document;
                            return (
                                <motion.div
                                    key={relatedStudy.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group"
                                >
                                    <Link href={relatedStudy.href}>
                                        <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-white/15">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${relatedStudy.gradient} p-[1px]`}>
                                                    <div className="w-full h-full rounded-xl bg-nc-dark flex items-center justify-center">
                                                        <RelatedIcon className="w-4 h-4 text-white" />
                                                    </div>
                                                </div>
                                                <span className="text-xs text-white/50">{relatedStudy.industry}</span>
                                            </div>
                                            <h3 className="font-semibold group-hover:text-white transition-colors line-clamp-2">
                                                {relatedStudy.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
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
                        <Icons.RocketLaunch className="w-10 h-10 text-nc-coral mx-auto mb-6" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready for Your <span className="gradient-text">Transformation?</span>
                        </h2>
                        <p className="text-white/60 mb-8 max-w-xl mx-auto">
                            Let's discuss how we can deliver similar results for your organization.
                        </p>
                        <Link href="/contact" className="btn-apple btn-primary inline-flex">
                            <span>Start Your Journey</span>
                            <Icons.ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
