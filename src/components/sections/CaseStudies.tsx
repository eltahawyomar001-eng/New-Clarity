'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Icons } from '@/components/ui/Icons';

export interface CaseStudy {
    id: string;
    title: string;
    industry: string;
    description: string;
    metrics: {
        label: string;
        value: string;
    }[];
    gradient: string;
    icon: keyof typeof Icons;
    href: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'finance-automation',
        title: 'How AI Reduced Month-End Close Time by 40%',
        industry: 'Finance & Accounting',
        description: 'Automated reconciliation and reporting workflows for a mid-market enterprise, dramatically improving efficiency.',
        metrics: [
            { label: 'Time Saved', value: '40%' },
            { label: 'Error Reduction', value: '95%' },
        ],
        gradient: 'from-nc-coral to-nc-orange',
        icon: 'Finance',
        href: '/case-studies/finance-automation',
    },
    {
        id: 'peter-sheahan',
        title: 'Turning Unstructured Data into Strategic Insight',
        industry: 'Professional Services',
        description: 'Built an AI-powered knowledge extraction system that transforms thousands of documents into actionable intelligence.',
        metrics: [
            { label: 'Documents Processed', value: '50K+' },
            { label: 'Insight Delivery', value: '10x faster' },
        ],
        gradient: 'from-nc-purple to-nc-blue',
        icon: 'Consulting',
        href: '/case-studies/peter-sheahan',
    },
    {
        id: 'iron-bridge',
        title: 'AI Agent that Automatically Detects Market Events',
        industry: 'Financial Services',
        description: 'Deployed real-time market monitoring agents that detect and alert on market-moving events before they impact portfolios.',
        metrics: [
            { label: 'Response Time', value: '<5 min' },
            { label: 'Accuracy', value: '97%' },
        ],
        gradient: 'from-nc-teal to-nc-green',
        icon: 'ChartBar',
        href: '/case-studies/iron-bridge',
    },
    {
        id: 'sales-psychology',
        title: 'Turning Buyer Psychology into Conversion',
        industry: 'Sales & B2B',
        description: 'Developed an intelligent sales engine that analyzes buyer behavior and recommends optimal engagement strategies.',
        metrics: [
            { label: 'Conversion Rate', value: '+35%' },
            { label: 'Deal Size', value: '+22%' },
        ],
        gradient: 'from-nc-orange to-nc-coral',
        icon: 'Sales',
        href: '/case-studies/sales-psychology',
    },
    {
        id: 'queen-anne-pillow',
        title: 'AI Strategic Plan for Pillow Manufacturer',
        industry: 'Home Goods',
        description: 'Created a comprehensive AI roadmap for a home goods manufacturer to optimize supply chain and customer experience.',
        metrics: [
            { label: 'Efficiency Gain', value: '28%' },
            { label: 'Customer Satisfaction', value: '+18%' },
        ],
        gradient: 'from-nc-blue to-nc-purple',
        icon: 'Manufacturing',
        href: '/case-studies/queen-anne-pillow',
    },
    {
        id: 'customer-insights',
        title: 'From Raw Data to Actionable Customer Intelligence',
        industry: 'E-commerce & Retail',
        description: 'Built an AI-powered customer analytics platform that segments, predicts, and personalizes at scale.',
        metrics: [
            { label: 'Revenue Impact', value: '+$1.2M' },
            { label: 'Retention', value: '+24%' },
        ],
        gradient: 'from-nc-green to-nc-teal',
        icon: 'Retail',
        href: '/case-studies/customer-insights',
    },
];

interface CaseStudyCardProps {
    study: CaseStudy;
    index: number;
}

function CaseStudyCard({ study, index }: CaseStudyCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [5, -5]);
    const rotateY = useTransform(x, [-100, 100], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set(e.clientX - centerX);
        y.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const IconComponent = Icons[study.icon] || Icons.Document;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="group perspective-1000"
        >
            <Link href={study.href}>
                <div className="relative h-full p-6 lg:p-8 rounded-3xl glass-card overflow-hidden transition-all duration-500 group-hover:border-white/15 group-hover:bg-white/[0.06]">
                    {/* Gradient Border on Hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${study.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                    {/* Top Row: Industry Tag + Icon */}
                    <div className="flex items-start justify-between mb-6">
                        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent border border-white/10`}>
                            <IconComponent className="w-3.5 h-3.5 text-white/60" />
                            {study.industry}
                        </span>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            className={`w-10 h-10 rounded-xl bg-gradient-to-br ${study.gradient} p-[1px]`}
                        >
                            <div className="w-full h-full rounded-xl bg-nc-dark flex items-center justify-center">
                                <Icons.ArrowUpRight className="w-4 h-4 text-white/80" />
                            </div>
                        </motion.div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl lg:text-2xl font-semibold leading-tight mb-3 group-hover:text-white transition-colors">
                        {study.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/50 text-sm lg:text-base leading-relaxed mb-6">
                        {study.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex gap-6">
                        {study.metrics.map((metric) => (
                            <div key={metric.label}>
                                <div className={`text-xl lg:text-2xl font-bold bg-gradient-to-r ${study.gradient} bg-clip-text text-transparent`}>
                                    {metric.value}
                                </div>
                                <div className="text-xs text-white/40 mt-0.5">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}

export default function CaseStudies() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-nc-black" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-nc-purple/10 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
                >
                    <div>
                        <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-nc-coral mb-4">
                            Client Success
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                            Case <span className="gradient-text">Studies</span>
                        </h2>
                    </div>
                    <Link
                        href="/case-studies"
                        className="btn-apple btn-secondary self-start md:self-auto"
                    >
                        <span>View All</span>
                        <Icons.ArrowRight className="w-4 h-4" />
                    </Link>
                </motion.div>

                {/* Case Study Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {caseStudies.slice(0, 6).map((study, index) => (
                        <CaseStudyCard key={study.id} study={study} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
