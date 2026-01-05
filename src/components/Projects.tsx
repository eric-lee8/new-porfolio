"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-muted/30">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold tracking-tight mb-4">Selected Work</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A collection of projects showcasing my expertise in product design and user experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="group block h-full">
                                <article className="h-full bg-white border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                                    <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                                            <ArrowUpRight size={20} className="text-primary" />
                                        </div>
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="mb-4">
                                            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                                                {project.client}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary/80 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                            {project.description}
                                        </p>
                                        <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                            View Case Study
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
