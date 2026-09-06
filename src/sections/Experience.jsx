import { motion } from "framer-motion";
import { experience } from "../data/experience";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function Experience() {
    return (
        <section
            id="experience"
            className="relative bg-white px-6 py-16 md:px-12 lg:px-20 lg:py-18 dark:bg-black"
        >
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-20"
                >
                    <motion.p
                        variants={itemVariants}
                        className="mb-4 text-sm font-medium tracking-[0.35em] text-slate-500"
                    >
                        EXPERIENCE
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white"
                    >
                        Where I've
                        <span className="block text-slate-500 dark:text-slate-400">been building.</span>
                    </motion.h2>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute bottom-0 left-0 top-0 w-px bg-slate-200 md:left-[180px] dark:bg-slate-800" />

                    {experience.map((item, index) => (
                        <motion.article
                            key={`${item.role}-${item.company}-${index}`}
                            variants={itemVariants}
                            className="relative grid grid-cols-[32px_1fr] gap-6 pb-16 last:pb-0 md:grid-cols-[180px_32px_1fr] md:gap-0"
                        >
                            {/* Date */}
                            <div className="hidden pt-1 text-right md:block md:pr-8">
                <span className="text-xs font-medium tracking-[0.15em] text-slate-500">
                  {item.period}
                </span>
                            </div>

                            {/* Timeline Dot */}
                            <div className="relative flex justify-center">
                                <span className="mt-1 h-4 w-4 rounded-full border border-slate-400 bg-white transition-colors duration-300 hover:border-slate-900 dark:border-slate-600 dark:bg-black dark:hover:border-white" />
                            </div>

                            {/* Content */}
                            <div className="md:pl-10">
                                {/* Mobile Date */}
                                <p className="mb-3 text-xs font-medium tracking-[0.15em] text-slate-500 md:hidden dark:text-slate-600">
                                    {item.period}
                                </p>

                                <div className="border-t border-slate-200 pt-5 dark:border-slate-800">
                                    <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl dark:text-white">
                                        {item.role}
                                    </h3>

                                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                    <span className="text-slate-600 dark:text-slate-300">
                      {item.company}
                    </span>

                                        <span className="text-slate-300 dark:text-slate-700">/</span>

                                        <span className="text-slate-500 dark:text-slate-600">
                      {item.location}
                    </span>
                                    </div>

                                    <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-600 md:text-base dark:text-slate-500">
                                        {item.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {item.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="border border-slate-200 px-3 py-2 text-xs text-slate-600 transition-colors duration-300 hover:border-slate-300 hover:text-slate-800 dark:border-slate-800 dark:text-slate-500 dark:hover:border-slate-700 dark:hover:text-slate-300"
                                            >
                        {technology}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Bottom Line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 h-px origin-left bg-slate-200 dark:bg-slate-900"
                />
            </div>
        </section>
    );
}

export default Experience;