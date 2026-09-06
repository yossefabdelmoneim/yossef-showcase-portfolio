import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { projects } from "../data/projects.js";
import { certificates } from "../data/certificates.js";
import { skills } from "../data/skills.js";

const roles = [
    "Scalable Backends",
    "AI & RAG Systems",
    "Full-Stack Apps",
    "Maintainable APIs",
];

const technologyCount = new Set(skills.flatMap((skill) => skill.technologies)).size;

function Github({ size = 21 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
    );
}

function Linkedin({ size = 21 }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
        </svg>
    );
}

function RotatingRole() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(
            () => setIndex((current) => (current + 1) % roles.length),
            2600
        );
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="relative inline-flex h-5 items-center overflow-hidden align-bottom font-mono text-slate-500 dark:text-gray-400">
            <AnimatePresence mode="wait">
                <motion.span
                    key={roles[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="whitespace-nowrap"
                >
                    {roles[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

function Stat({ value, label }) {
    return (
        <div>
            <p className="font-mono text-2xl font-semibold text-slate-900 dark:text-white">
                {String(value).padStart(2, "0")}
            </p>
            <p className="mt-1 text-[11px] uppercase tracking-widest text-slate-500 dark:text-gray-500">
                {label}
            </p>
        </div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-50 px-6 pt-20 text-slate-900 dark:bg-black dark:text-white"
        >
            <div className="pointer-events-none absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-slate-200/50 blur-3xl dark:bg-slate-800/40" />

            <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                {/* Text */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    transition={{ staggerChildren: 0.1 }}
                    className="text-center md:text-left"
                >
                    <motion.p
                        variants={fadeUp}
                        className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-gray-500"
                    >
                        Software Engineer
                    </motion.p>

                    <motion.h1
                        variants={fadeUp}
                        className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
                    >
                        Hi, I'm
                        <span className="block text-slate-500 dark:text-gray-400">
                            Youssef.
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-gray-400"
                    >
                        Software & AI Engineer. I build scalable backends, RAG-powered AI systems, and full-stack web apps with modern technologies.
                    </motion.p>

                    <motion.p
                        variants={fadeUp}
                        className="mt-5 flex flex-wrap items-center justify-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400 md:justify-start dark:text-slate-600"
                    >
                        <span className="text-slate-500 dark:text-slate-500">▹</span>
                        Building <RotatingRole />
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:scale-105 hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-gray-200"
                        >
                            View My Projects
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition hover:scale-105 hover:border-slate-400 dark:border-white/20 dark:text-white dark:hover:border-white/50"
                        >
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-10 flex justify-center gap-8 border-t border-slate-200 pt-6 md:justify-start dark:border-slate-800"
                    >
                        <Stat value={projects.length} label="Projects" />
                        <Stat value={technologyCount} label="Technologies" />
                        <Stat value={certificates.length} label="Certifications" />
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        className="mt-8 flex justify-center gap-8 md:justify-start"
                    >
                        <a
                            href="https://github.com/yossefabdelmoneim"
                            className="text-slate-600 transition hover:scale-110 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                            aria-label="GitHub"
                        >
                            <Github size={30} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/yossef-abdelmoneim-aa9774287/"
                            className="text-slate-600 transition hover:scale-110 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={30} />
                        </a>

                        <a
                            href="mailto: youssefabdelmoniem11@gmail.com"
                            className="text-slate-600 transition hover:scale-110 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white"
                            aria-label="Email"
                        >
                            <Mail size={30} />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex justify-center"
                >
                    <div className="relative">
                        <motion.div
                            animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -inset-12 rounded-full bg-gradient-to-tr from-slate-400/30 via-slate-300/20 to-transparent blur-2xl dark:from-slate-500/25 dark:via-slate-700/20"
                        />

                        <div className="absolute -inset-4 rounded-full border border-slate-200 dark:border-white/10" />

                        <div className="absolute -inset-8 rounded-full border border-slate-100 dark:border-white/5" />

                        <img
                            src="/images/profile/profile.jpg"
                            alt="Youssef Abdelmoniem"
                            loading="lazy"
                            decoding="async"
                            className="relative h-64 w-64 rounded-full border border-slate-300 object-cover sm:h-80 sm:w-80 dark:border-white/20"
                        />
                    </div>
                </motion.div>
            </div>

            <a
                href="#about"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 transition hover:text-slate-900 dark:text-gray-600 dark:hover:text-white"
                aria-label="Scroll down"
            >
                <ArrowDown size={25} />
            </a>
        </section>
    );
}

export default Hero;