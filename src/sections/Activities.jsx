import { motion } from "framer-motion";
import { activities } from "../data/activities";

const Activities = () => {
    return (
        <section
            id="activities"
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
                        Beyond Code
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                        More than just engineering.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                        Experiences, communities, and activities that have shaped me
                        beyond my technical work.
                    </p>
                </motion.div>

                {/* Activities */}
                <div className="divide-y divide-slate-200/70 border-y border-slate-200/70 dark:divide-slate-800/70 dark:border-slate-800/70">
                    {activities.map((activity, index) => (
                        <motion.article
                            key={activity.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            className="group grid gap-6 py-8 transition-colors duration-300 sm:py-10 lg:grid-cols-[100px_180px_1fr_auto] lg:items-start"
                        >
                            {/* Number */}
                            <span className="font-mono text-sm text-slate-400 dark:text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </span>

                            {/* Period */}
                            <span className="text-sm text-slate-500">
                {activity.period}
              </span>

                            {/* Content */}
                            <div>
                                <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-700 sm:text-2xl dark:text-white dark:group-hover:text-slate-300">
                                    {activity.title}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-slate-500">
                                    {activity.organization}
                                </p>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                                    {activity.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Activities;