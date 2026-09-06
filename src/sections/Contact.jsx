import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Mail,
} from "lucide-react";

function Github({size = 21}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.68.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/>
        </svg>
    );
}

function Linkedin({size = 21}) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z"/>
        </svg>
    );
}

const Contact = () => {
    return (
        <section
            id="contact"
            className="border-t border-slate-200/70 py-24 sm:py-32 dark:border-slate-800/70"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Main CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24 dark:border-slate-800 dark:bg-black"
                >
                    {/* Decorative background */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-slate-300/30 blur-3xl dark:bg-slate-700/10" />

                    <div className="relative max-w-4xl">
                        <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                            Contact
                        </p>

                        <h2 className="text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl dark:text-white">
                            Let's build something
                            <span className="block text-slate-500">
                meaningful.
              </span>
                        </h2>

                        <p className="mt-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                            Have a project, opportunity, or idea in mind? I'd love to hear
                            about it and explore how we can turn it into something useful.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a
                                href="mailto:youssefabdelmoniem11@gmail.com"
                                className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200"
                            >
                                <Mail size={17} />

                                <span>Email Me</span>

                                <ArrowUpRight
                                    size={16}
                                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/yossef-abdelmoneim-aa9774287/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-medium text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
                            >
                                <Linkedin size={17} />
                                <span>LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mt-8 grid border-y border-slate-200/70 sm:grid-cols-3 dark:border-slate-800/70"
                >
                    {/* Email */}
                    <a
                        href="mailto:youssefabdelmoniem11@gmail.com"
                        className="group border-b border-slate-200/70 p-6 transition-colors duration-300 hover:bg-slate-100 sm:border-b-0 sm:border-r sm:p-8 dark:border-slate-800/70 dark:hover:bg-slate-900/30"
                    >
                        <div className="flex items-center justify-between">
                            <Mail
                                size={19}
                                className="text-slate-500 transition-colors group-hover:text-slate-900 dark:group-hover:text-white"
                            />

                            <ArrowUpRight
                                size={17}
                                className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-600 dark:text-slate-700 dark:group-hover:text-slate-400"
                            />
                        </div>

                        <p className="mt-8 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-600">
                            Email
                        </p>

                        <p className="mt-2 break-all text-sm text-slate-700 dark:text-slate-300">
                            youssefabdelmoniem11@gmail.com
                        </p>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/yossefabdelmoneim"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border-b border-slate-200/70 p-6 transition-colors duration-300 hover:bg-slate-100 sm:border-b-0 sm:border-r sm:p-8 dark:border-slate-800/70 dark:hover:bg-slate-900/30"
                    >
                        <div className="flex items-center justify-between">
                            <Github
                                size={19}
                                className="text-slate-500 transition-colors group-hover:text-slate-900 dark:group-hover:text-white"
                            />

                            <ArrowUpRight
                                size={17}
                                className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-600 dark:text-slate-700 dark:group-hover:text-slate-400"
                            />
                        </div>

                        <p className="mt-8 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-600">
                            GitHub
                        </p>

                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                            GitHub Profile
                        </p>
                    </a>

                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/yossef-abdelmoneim-aa9774287/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-6 transition-colors duration-300 hover:bg-slate-100 sm:p-8 dark:hover:bg-slate-900/30"
                    >
                        <div className="flex items-center justify-between">
                            <Linkedin
                                size={19}
                                className="text-slate-500 transition-colors group-hover:text-slate-900 dark:group-hover:text-white"
                            />

                            <ArrowUpRight
                                size={17}
                                className="text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-slate-600 dark:text-slate-700 dark:group-hover:text-slate-400"
                            />
                        </div>

                        <p className="mt-8 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-600">
                            LinkedIn
                        </p>

                        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                            LinkedIn Profile
                        </p>
                    </a>
                </motion.div>

                {/* Footer */}
                <div className="mt-12 flex flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-600">
                    <p>
                        © {new Date().getFullYear()} Youssef Abdelmoniem. All rights
                        reserved.
                    </p>

                    <p>
                        Software & AI Engineer
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;