import {motion} from "framer-motion";
import {skills} from "../data/skills.js";

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 25,
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

function Skills(){
    return(
        <section
            id="skills"
            className="relative overflow-hidden bg-slate-50 px-6 py-8 md:px-12 lg:px-20 lg:py-18 dark:bg-black"
        >
            <div className="mx-auto max-w-6xl">
                {/* Header */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="mb-16"
                >
                    <motion.p
                        variants={itemVariants}
                        className="mb-4 text-sm font-medium tracking-[0.35em] text-slate-500"
                    >
                        SKILLS
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white"
                    >
                        Tools I use to
                        <span className="block text-slate-500 dark:text-slate-400">
              build things.
            </span>
                    </motion.h2>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid border-t border-slate-200 md:grid-cols-2 dark:border-slate-800"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            variants={itemVariants}
                            className={`group border-b border-slate-200 p-6 md:p-8 dark:border-slate-800 ${
                                index % 2 === 0 ? "md:border-r" : ""
                            }`}
                        >
                            {/* Category */}
                            <div className="flex items-start justify-between">
                <span className="text-xs tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  {String(index + 1).padStart(2, "0")}
                </span>

                                <span className="text-xs tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">
                  {skill.category}
                </span>
                            </div>

                            {/* Description */}
                            <p className="mt-8 max-w-md text-sm leading-6 text-slate-600 group-hover:text-slate-800 dark:text-slate-500 dark:group-hover:text-slate-300">
                                {skill.description}
                            </p>

                            {/* Technologies */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {skill.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="border rounded-lg border-slate-200 px-3 py-2 text-xs text-slate-600 transition-all duration-300 group-hover:border-slate-300 group-hover:text-slate-800 dark:border-slate-700 dark:text-slate-400 dark:group-hover:border-slate-700 dark:group-hover:text-slate-300"
                                    >
                    {technology}
                  </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}

                    {/* Empty sixth cell / statement */}
                    <motion.div
                        variants={itemVariants}
                        className="flex min-h-[220px] items-center justify-center border-b border-slate-200 p-8 md:p-12 dark:border-slate-800 "
                    >
                        <p className="max-w-sm text-center text-sm leading-7 text-slate-500 hover:text-slate-800 dark:text-slate-600 dark:hover:text-slate-300 ">
                            Always learning. Always building.
                            <br />
                            Always looking for better ways to solve problems.
                        </p>
                    </motion.div>
                </motion.div>

                {/* Bottom Line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="h-px origin-left bg-slate-200 dark:bg-slate-900"
                />
            </div>
        </section>
    )
}

export default Skills;