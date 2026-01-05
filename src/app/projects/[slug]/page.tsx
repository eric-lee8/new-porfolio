import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Calendar, Users, Briefcase } from "lucide-react";
import { projects } from "@/lib/data";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-white pb-24">
            {/* Hero Section */}
            <div className="bg-muted/30 py-20 border-b border-border">
                <div className="container mx-auto px-6">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-8 transition-colors"
                    >
                        <ArrowLeft size={16} className="mr-2" />
                        Back to Projects
                    </Link>
                    <div className="max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
                            {project.title}
                        </h1>
                        <p className="text-xl text-primary font-medium mb-6">
                            {project.subheading}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                            <div className="flex items-center">
                                <Briefcase size={16} className="mr-2" />
                                <span>{project.client}</span>
                            </div>
                            {project.timeline && (
                                <div className="flex items-center">
                                    <Calendar size={16} className="mr-2" />
                                    <span>{project.timeline}</span>
                                </div>
                            )}
                            {project.team && (
                                <div className="flex items-center">
                                    <Users size={16} className="mr-2" />
                                    <span>{project.team}</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">Overview</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                {project.description}
                            </p>
                        </section>

                        {project.results && (
                            <section className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
                                <h2 className="text-xl font-bold mb-6">Key Results</h2>
                                <ul className="space-y-4">
                                    {project.results.map((result, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle2 size={20} className="text-primary flex-shrink-0 mt-1" />
                                            <span className="text-foreground/80">{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Case Study Images */}
                        {project.caseStudyImages && (
                            <section className="space-y-8">
                                <h2 className="text-2xl font-bold">Case Study Gallery</h2>
                                {project.caseStudyImages.map((image, index) => (
                                    <div key={index} className="space-y-3">
                                        <div className="rounded-xl overflow-hidden border border-border shadow-sm">
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="w-full h-auto"
                                                loading="lazy"
                                            />
                                        </div>
                                        {image.alt && <p className="text-sm text-center text-muted-foreground italic">{image.alt}</p>}
                                    </div>
                                ))}
                            </section>
                        )}
                    </div>

                    <div className="lg:col-span-1 space-y-8">
                        {/* Sticky sidebar can go here if needed, or metadata */}
                    </div>
                </div>
            </div>
        </article>
    );
}
