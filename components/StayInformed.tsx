"use client";

import { motion } from "framer-motion";
import { articles } from "@/data/Milestones";
import { useInView } from "@/hooks/useInView";

export default function StayInformed() {
    const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-20 bg-gray-50">
            <div className="max-w-[1440px] mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-teal-600 text-4xl font-bold mb-6">
                        Stay Informed
                    </h2>
                    <p className="text-gray-900 text-4xl font-bold max-w-5xl leading-tight">
                        Through advocacy, education, and support, we're building a stigma-free future for mental health in Nigeria.
                    </p>
                </motion.div>

                {/* Articles Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="flex flex-col"
                        >
                            {/* Card */}
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm mb-8 border border-gray-200">
                                {/* Top Section - White Background */}
                                <div className="relative h-[280px] bg-white p-6 overflow-hidden">
                                    {/* Logos */}
                                    <div className="flex items-center justify-center gap-4 mb-6">
                                        {/* Asido Logo */}
                                        <div className="w-10 h-4 flex items-center justify-center">
                                            <img src="/images/asido-logo.png" alt="Asido Foundation Logo" />
                                        </div>
                                        {/* Ayuri Logo */}
                                        <div className="w-10 h-4 flex items-center justify-center">
                                            <img src="/images/ayuri-logo.png" alt="Ayuri Logo" />
                                        </div>
                                    </div>

                                    {/* Title Text */}
                                    <div className="relative z-10">
                                        <h3
                                            className="text-3xl font-bold leading-tight mb-2"
                                            style={{ color: article.color }}
                                        >
                                            Your Mental<br />Health & You
                                        </h3>
                                        {/* Horizontal line after title */}
                                        <div
                                            className="w-16 h-0.5 mb-3"
                                            style={{ backgroundColor: article.color }}
                                        ></div>
                                        <p className="text-xs text-gray-600">
                                            A weekly column for the Nigerian Tribune<br />on Thursdays
                                        </p>
                                    </div>

                                    {/* Doctor's Image - Right Side */}
                                    <div className="absolute bottom-10 right-4">
                                        <div className="relative w-32 h-32">
                                            {/* Background shape */}
                                            <div
                                                className="absolute inset-0 rounded-lg transform rotate-15"
                                                style={{ backgroundColor: article.color }}
                                            ></div>
                                            {/* Doctor's image */}
                                            <div className="absolute inset-0 rounded-lg transform overflow-hidden bg-gray-200">
                                                <img src="/images/dr-jubril.png" alt="Dr. Jibril" className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Section - Colored Background */}
                                <div className="p-6 text-white" style={{ backgroundColor: article.color }}>
                                    {/* Topic Section with Vertical Line */}
                                    <div className="flex items-start gap-3 mb-6">
                                        {/* Vertical line */}
                                        <div className="w-0.5 bg-white/40 self-stretch min-h-[60px]"></div>

                                        <div className="flex-1">
                                            {/* Topic Label */}
                                            <div className="text-[10px] uppercase tracking-wider mb-2 opacity-90">
                                                TOPIC
                                            </div>
                                            {/* Topic Text */}
                                            <p className="text-xs font-medium leading-tight">
                                                {article.topic}
                                            </p>
                                        </div>

                                        {/* Author Name */}
                                        <div className="text-right whitespace-nowrap">
                                            <div className="font-bold text-lg">Dr. Jibril</div>
                                            <div className="text-sm opacity-90">Abdulmalik</div>
                                        </div>
                                    </div>

                                    {/* Date Section with Vertical Line */}
                                    <div className="flex items-start gap-3 mb-6">
                                        {/* Vertical line */}
                                        <div className="w-0.5 bg-white/40 self-stretch min-h-[40px]"></div>

                                        <div className="flex-1">
                                            {/* Date Label */}
                                            <div className="text-[10px] uppercase tracking-wider mb-1 opacity-90">
                                                DATE
                                            </div>
                                            {/* Date Text */}
                                            <div className="text-sm font-medium">{article.date}</div>
                                        </div>

                                        {/* Author Role */}
                                        <div className="text-right max-w-[160px]">
                                            <div className="text-xs opacity-90 leading-tight">
                                                {article.authorRole}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Media Icons - No top border */}
                                    <div className="flex items-center justify-center pt-4">
                                        {/* Social Icons */}
                                        <div className="flex gap-3 items-center">
                                            {/* Twitter */}
                                            <svg className="w-4 h-4 opacity-90 hover:opacity-100 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                            </svg>
                                            {/* Facebook */}
                                            <svg className="w-4 h-4 opacity-90 hover:opacity-100 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                            </svg>
                                            {/* LinkedIn */}
                                            <svg className="w-4 h-4 opacity-90 hover:opacity-100 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            {/* Instagram */}
                                            <svg className="w-4 h-4 opacity-90 hover:opacity-100 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                                            </svg>

                                            <span className="text-[11px] opacity-90">@asidofoundation</span>
                                        </div>

                                        {/* Vertical Separator and Telegram */}
                                        <div className="flex items-center gap-3">
                                            <div className="w-px h-6 bg-white/40"></div>
                                            <div className="flex items-center gap-2">
                                                <svg className="w-4 h-4 opacity-90" fill="currentColor" viewBox="0 0 24 24">
                                                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                                                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" />
                                                </svg>
                                                <span className="text-[11px] opacity-90">t.me/asidofoundation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Article Title and Link Below Card */}
                            <div className="px-2">
                                <h4 className="text-gray-900 text-2xl font-bold mb-4 leading-tight">
                                    {article.title}
                                </h4>
                                <a
                                    href={article.link}
                                    className="inline-flex items-center gap-2 text-primary font-bold text-lg transition-all duration-300 hover:gap-3 group"
                                >
                                    READ MORE
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}