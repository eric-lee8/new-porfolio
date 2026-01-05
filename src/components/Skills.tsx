"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { skills } from "@/lib/data";

export default function Skills() {
    return (
        <section id="skills" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Core Competencies</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        My key skills and areas of expertise in UX Product Design and B2B solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="p-6 rounded-xl border border-border bg-white hover:border-primary/20 hover:shadow-sm transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-2 bg-primary/5 rounded-lg text-primary flex-shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">{skill.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
