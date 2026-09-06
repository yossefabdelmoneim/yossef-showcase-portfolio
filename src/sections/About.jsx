import {motion} from 'framer-motion';

const highlights = [
    {
        number: "01",
        title: "BACKEND",
        description: "APIs · Architecture · Databases",
    },
    {
        number: "02",
        title: "AI ENGINEERING",
        description: "RAG · LLMs · Semantic Search",
    },
    {
        number: "03",
        title: "FULL STACK",
        description: "React · Node.js · Web Applications",
    },
    {
        number: "04",
        title: "ENGINEERING",
        description: "Clean Code · Git · Docker",
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
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

function About(){
    return(
        <section
            id="about"
            className="relative overflow-hidden bg-white px-6 py-8 md:px-12 lg:px-10 lg:py-18 dark:bg-black"
        >
            <div className="mx-auto max-w-6xl">
                {/*Section Header*/}
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
                        ABOUT ME
                    </motion.p>

                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl dark:text-white"
                    >
                        More than just
                        <span className="block text-slate-500 dark:text-slate-400">a developer.</span>
                    </motion.h2>
                </motion.div>

                {/* Main Content */}
                <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
                    {/* About Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="border-l border-slate-200 pl-6 md:pl-8 dark:border-slate-800">
                            <p className="text-xl leading-relaxed text-slate-700 md:text-2xl dark:text-slate-300">
                                I'm a Software Engineer who enjoys turning complex problems
                                into simple, reliable solutions.
                            </p>

                            <p className="mt-7 leading-8 text-slate-600 dark:text-slate-500">
                                My strongest interest is backend engineering, designing APIs,
                                working with databases, authentication, business logic, and
                                building systems that are maintainable as they grow.
                            </p>

                            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-500">
                                I'm also interested in AI engineering, particularly building
                                practical AI systems that can work with real-world data.
                                Alongside backend development, I have experience building
                                full-stack applications and enjoy understanding how all the
                                pieces of a system fit together.
                            </p>

                            <p className="mt-5 leading-8 text-slate-600 dark:text-slate-500">
                                I'm constantly learning, experimenting, and building — because
                                I believe the best way to become a better engineer is to keep
                                creating.
                            </p>
                        </div>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2"
                    >
                        {highlights.map((item) => (
                            <motion.div
                                key={item.number}
                                variants={itemVariants}
                                className="group border-t border-slate-200 p-6 first:border-t sm:nth-[2]:border-t dark:border-slate-800"
                            >
                <span className="text-xs tracking-[0.2em] text-slate-400 dark:text-slate-600">
                  {item.number}
                </span>

                                <h3 className="mt-5 text-sm font-semibold tracking-[0.2em] text-slate-600 transition-colors duration-300 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-600">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom line */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 h-px origin-left bg-slate-200 dark:bg-slate-900"
                />
            </div>
        </section>
    )
}

export default About;