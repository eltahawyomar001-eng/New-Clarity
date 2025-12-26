'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Icons } from '@/components/ui/Icons';

const testimonials = [
    {
        quote: "New Clarity transformed our approach to AI. Their strategic roadmap and execution capabilities helped us achieve ROI within the first quarter.",
        author: "Sarah Chen",
        title: "VP of Operations",
        company: "TechForward Industries",
        avatar: null,
    },
    {
        quote: "The team's ability to translate complex AI concepts into practical business solutions is unmatched. They delivered beyond our expectations.",
        author: "Michael Rodriguez",
        title: "Chief Digital Officer",
        company: "Pinnacle Financial",
        avatar: null,
    },
    {
        quote: "Working with New Clarity gave us the confidence to embrace AI at scale. Their fractional leadership model provided exactly the expertise we needed.",
        author: "Emily Thompson",
        title: "CEO",
        company: "Innovate Retail Co",
        avatar: null,
    },
    {
        quote: "From audit to implementation, New Clarity guided us every step of the way. The 40% reduction in processing time speaks for itself.",
        author: "David Park",
        title: "Director of Finance",
        company: "Global Manufacturing Ltd",
        avatar: null,
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    // Auto-advance
    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0,
        }),
    };

    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-nc-dark" />
            <div className="absolute inset-0 dot-pattern opacity-30" />

            {/* Decorative Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nc-coral/5 blur-[150px]" />

            <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-2 rounded-full glass-card text-sm text-nc-coral mb-4">
                        Client Testimonials
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                        What Our <span className="gradient-text">Clients Say</span>
                    </h2>
                </motion.div>

                {/* Testimonial Slider */}
                <div className="relative">
                    {/* Quote Icon */}
                    <div className="absolute -top-4 left-0 opacity-20">
                        <Icons.Quote className="w-20 h-20 text-nc-coral" />
                    </div>

                    {/* Slider Container */}
                    <div className="relative min-h-[300px] flex items-center">
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.3 },
                                }}
                                className="w-full text-center px-8 md:px-16"
                            >
                                {/* Quote */}
                                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90 mb-10">
                                    &ldquo;{testimonials[current].quote}&rdquo;
                                </blockquote>

                                {/* Author */}
                                <div className="flex flex-col items-center">
                                    {/* Avatar Placeholder with Gradient Border */}
                                    <div className="w-16 h-16 rounded-full gradient-coral-purple p-[2px] mb-4">
                                        <div className="w-full h-full rounded-full bg-nc-dark flex items-center justify-center text-xl font-bold gradient-text">
                                            {testimonials[current].author.charAt(0)}
                                        </div>
                                    </div>
                                    <div className="text-lg font-semibold">{testimonials[current].author}</div>
                                    <div className="text-sm text-white/50">
                                        {testimonials[current].title}, {testimonials[current].company}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-10">
                        {/* Previous Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={prev}
                            className="p-4 rounded-full glass-card border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                            aria-label="Previous testimonial"
                        >
                            <Icons.ChevronLeft className="w-5 h-5" />
                        </motion.button>

                        {/* Dots */}
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > current ? 1 : -1);
                                        setCurrent(index);
                                    }}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === current
                                            ? 'w-8 bg-gradient-to-r from-nc-coral to-nc-purple'
                                            : 'bg-white/20 hover:bg-white/40'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={next}
                            className="p-4 rounded-full glass-card border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                            aria-label="Next testimonial"
                        >
                            <Icons.ChevronRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
