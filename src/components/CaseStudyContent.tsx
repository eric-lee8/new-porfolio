"use client";

import React from "react";
import { motion } from "framer-motion";

export type ContentBlock =
    | { type: "text"; title?: string; content: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "stats"; items: { label: string; value: string }[] };

interface CaseStudyContentProps {
    blocks: ContentBlock[];
}

export function CaseStudyContent({ blocks }: CaseStudyContentProps) {
    return (
        <div className="space-y-16 max-w-4xl mx-auto">
            {blocks.map((block, index) => {
                switch (block.type) {
                    case "text":
                        return (
                            <motion.section
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="max-w-2xl mx-auto"
                            >
                                {block.title && (
                                    <h3 className="text-2xl font-bold mb-4 text-foreground">{block.title}</h3>
                                )}
                                <div
                                    className="prose prose-slate dark:prose-invert leading-relaxed text-muted-foreground"
                                    dangerouslySetInnerHTML={{ __html: block.content }}
                                />
                            </motion.section>
                        );

                    case "image":
                        return (
                            <motion.figure
                                key={index}
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="my-12"
                            >
                                <div className="rounded-xl overflow-hidden border border-border shadow-lg bg-muted">
                                    <img
                                        src={block.src}
                                        alt={block.alt}
                                        className="w-full h-auto"
                                        loading="lazy"
                                    />
                                </div>
                                {block.caption && (
                                    <figcaption className="text-center text-sm text-muted-foreground mt-3 italic">
                                        {block.caption}
                                    </figcaption>
                                )}
                            </motion.figure>
                        );

                    case "stats":
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12"
                            >
                                {block.items.map((stat, i) => (
                                    <div key={i} className="bg-primary/5 p-6 rounded-xl border border-primary/10 text-center">
                                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                        <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
                                    </div>
                                ))}
                            </motion.div>
                        );

                    default:
                        return null;
                }
            })}
        </div>
    );
}
