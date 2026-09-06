import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects } from "../data/projects";

function Github({size = 21}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
        </svg>
    );
}

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden border-t border-slate-200/70 py-24 sm:py-32 dark:border-slate-800/70"
        >
            <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-800/40" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 max-w-3xl"
                >
                    <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                        Selected Work
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                        Things I've built.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                        A selection of projects spanning backend engineering, artificial
                        intelligence, and full-stack application development.
                    </p>
                </motion.div>

                {/* Projects */}
                <div className="space-y-6">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index }) => {
    const projectLink = project.liveUrl || project.githubUrl;

    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
                duration: 0.6,
                delay: index * 0.08,
            }}
            whileHover={{ y: -4 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 transition-colors duration-300 hover:border-slate-300 dark:border-slate-800 dark:bg-black dark:hover:border-slate-600"
        >
            {/* Subtle background glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-slate-300/20 blur-3xl transition-opacity duration-500 group-hover:bg-slate-400/30 dark:bg-slate-700/10 dark:group-hover:bg-slate-600/20" />

            {/* Media */}
            <div className="relative h-40 w-full overflow-hidden sm:h-44">
                {project.image ? (
                    <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                ) : (
                    <div className="absolute inset-0 flex flex-col bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300/70 dark:from-slate-900 dark:via-slate-950 dark:to-slate-800/50">
                        {/* Title bar */}
                        <div className="flex items-center gap-1.5 border-b border-slate-300/60 px-4 py-2 sm:px-5 dark:border-slate-700/50">
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                            <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />

                            <span className="ml-3 truncate font-mono text-[11px] uppercase tracking-widest text-slate-500">
                                {project.category} · 0{project.id}
                            </span>
                        </div>

                        {/* Terminal body */}
                        <div className="flex flex-1 items-center gap-3 px-4 sm:px-5">
                            <p className="shrink-0 font-mono text-xs text-slate-400 dark:text-slate-600">
                                $ stack
                            </p>

                            <div className="flex min-w-0 flex-wrap items-center gap-1.5">
                                {project.technologies.slice(0, 4).map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-md border border-slate-300/70 bg-white/50 px-1.5 py-0.5 font-mono text-[11px] text-slate-600 dark:border-slate-700/60 dark:bg-black/30 dark:text-slate-300"
                                    >
                                        {technology}
                                    </span>
                                ))}

                                {project.technologies.length > 4 && (
                                    <span className="rounded-md border border-dashed border-slate-400/60 px-1.5 py-0.5 font-mono text-[11px] text-slate-400 dark:border-slate-600/60 dark:text-slate-500">
                                        +{project.technologies.length - 4}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="relative p-6 sm:p-8 lg:p-10">
                <div className="grid gap-8 lg:grid-cols-[120px_1fr_auto] lg:items-start">
                    {/* Project Number */}
                    <div className="hidden lg:block">
            <span className="font-mono text-sm text-slate-400 dark:text-slate-600">
              0{project.id}
            </span>
                    </div>

                    {/* Main Content */}
                    <div>
                        <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:text-slate-500">
                {project.category}
              </span>

                            {project.featured && (
                                <span className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Featured
                </span>
                            )}
                        </div>

                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-3xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700 sm:text-4xl dark:text-white dark:group-hover:text-slate-200">
                                    {project.title}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-slate-600 sm:text-base dark:text-slate-500">
                                    {project.subtitle}
                                </p>
                            </div>

                            {/* Mobile number */}
                            <span className="font-mono text-sm text-slate-400 lg:hidden dark:text-slate-700">
                0{project.id}
              </span>
                        </div>

                        <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                            {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-7 flex flex-wrap gap-2">
                            {project.technologies.map((technology) => (
                                <span
                                    key={technology}
                                    className="rounded-md border border-slate-200 px-3 py-1.5 text-xs text-slate-600 transition-colors duration-300 group-hover:border-slate-300 dark:border-slate-800 dark:text-slate-400 dark:group-hover:border-slate-700"
                                >
                  {technology}
                </span>
                            ))}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3 lg:pt-1">
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} live website`}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
                            >
                                <ExternalLink size={15} />
                                <span>Live Demo</span>
                            </a>
                        )}

                        {!project.liveUrl && project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} GitHub repository`}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
                            >
                                <Github size={15} />
                                <span>GitHub</span>
                            </a>
                        )}

                        {projectLink && (
                            <motion.a
                                href={projectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title}`}
                                whileHover={{ x: 3, y: -3 }}
                                className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-300 hover:border-slate-400 hover:text-slate-900 sm:flex dark:border-slate-800 dark:hover:border-slate-600 dark:hover:text-white"
                            >
                                <ArrowUpRight size={18} />
                            </motion.a>
                        )}
                    </div>
                </div>
            </div>
        </motion.article>
    );
};

export default Projects;