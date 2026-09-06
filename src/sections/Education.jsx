import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data/education";

const Education = () => {
    return (
        <section
            id="education"
            className="border-t border-slate-200/70 py-24 sm:py-32 dark:border-slate-800/70"
        >
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
                        Education
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                        Where I learned to build.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                        My academic journey has given me the foundation to approach
                        software engineering with both technical depth and curiosity.
                    </p>
                </motion.div>

                {/* Education Entries */}
                <div className="space-y-6">
                    {education.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.1,
                            }}
                            className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-black dark:hover:border-slate-600"
                        >
                            <div className="grid gap-8 lg:grid-cols-[180px_1fr_auto] lg:items-start">
                                {/* Period */}
                                <div>
                  <span className="font-mono text-sm text-slate-500">
                    {item.period}
                  </span>
                                </div>

                                {/* Main Information */}
                                <div>
                                    <div className="mb-5 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                            <GraduationCap size={18} />
                                        </div>

                                        {item.status && (
                                            <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-slate-600 dark:border-slate-800 dark:text-slate-500">
                        {item.status}
                      </span>
                                        )}
                                    </div>

                                    <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                                        {item.degree}
                                    </h3>

                                    <p className="mt-2 text-base font-medium text-slate-600 dark:text-slate-400">
                                        {item.field}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
                                        <span>{item.institution}</span>
                                        <span className="text-slate-400 dark:text-slate-700">•</span>
                                        <span>{item.location}</span>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
                                        <span>GPA: {item.GPA}</span>
                                    </div>

                                    <p className="mt-6 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                                        {item.description}
                                    </p>
                                </div>

                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;