import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    ArrowLeft,
    ArrowRight,
    ExternalLink,
    Award,
} from "lucide-react";
import { certificates } from "../data/certificates";

const Certificates = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeCertificate = certificates[activeIndex];

    const nextCertificate = () => {
        setActiveIndex((current) =>
            current === certificates.length - 1 ? 0 : current + 1
        );
    };

    const previousCertificate = () => {
        setActiveIndex((current) =>
            current === 0 ? certificates.length - 1 : current - 1
        );
    };

    if (!certificates.length) {
        return null;
    }

    return (
        <section
            id="certificates"
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
                        Certifications
                    </p>

                    <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                        Proof of continuous learning.
                    </h2>

                    <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                        Certifications and courses that have contributed to my technical
                        growth and engineering journey.
                    </p>
                </motion.div>

                {/* Certificate Showcase */}
                <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
                    {/* Certificate Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-black"
                    >
                        <div className="aspect-[16/10] w-full">
                            <AnimatePresence mode="wait">
                                {activeCertificate.image ? (
                                    <motion.img
                                        key={activeCertificate.id}
                                        src={activeCertificate.image}
                                        alt={`${activeCertificate.title} certificate`}
                                        loading="lazy"
                                        decoding="async"
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.02 }}
                                        transition={{ duration: 0.35 }}
                                        className="h-full w-full object-contain p-4 sm:p-8"
                                    />
                                ) : (
                                    <motion.div
                                        key={`placeholder-${activeCertificate.id}`}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center"
                                    >
                                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-600">
                                            <Award size={28} />
                                        </div>

                                        <p className="text-sm text-slate-500 dark:text-slate-600">
                                            Certificate preview
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Image Counter */}
                        <div className="absolute bottom-5 left-5 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 font-mono text-xs text-slate-500 backdrop-blur dark:border-slate-800 dark:bg-black/80">
                            {String(activeIndex + 1).padStart(2, "0")} /{" "}
                            {String(certificates.length).padStart(2, "0")}
                        </div>
                    </motion.div>

                    {/* Certificate Information */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8 lg:p-10 dark:border-slate-800 dark:bg-black"
                    >
                        <div>
                            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-500 dark:border-slate-800 dark:text-slate-400">
                                <Award size={20} />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeCertificate.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className="font-mono text-xs uppercase tracking-wider text-slate-500 dark:text-slate-600">
                                        Certificate {String(activeIndex + 1).padStart(2, "0")}
                                    </p>

                                    <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                                        {activeCertificate.title}
                                    </h3>

                                    <p className="mt-3 text-base text-slate-600 dark:text-slate-400">
                                        {activeCertificate.issuer}
                                    </p>

                                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-600">
                                        {activeCertificate.date}
                                    </p>

                                    {activeCertificate.credentialUrl && (
                                        <a
                                            href={activeCertificate.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-100 dark:border-slate-700 dark:text-white dark:hover:border-slate-500 dark:hover:bg-slate-900"
                                        >
                                            <ExternalLink size={15} />
                                            View Credential
                                        </a>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Navigation */}
                        <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6 dark:border-slate-800">
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={previousCertificate}
                                    aria-label="Previous certificate"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:hover:border-slate-600 dark:hover:text-white"
                                >
                                    <ArrowLeft size={17} />
                                </button>

                                <button
                                    type="button"
                                    onClick={nextCertificate}
                                    aria-label="Next certificate"
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:hover:border-slate-600 dark:hover:text-white"
                                >
                                    <ArrowRight size={17} />
                                </button>
                            </div>

                            {/* Dots */}
                            <div className="flex items-center gap-2">
                                {certificates.map((certificate, index) => (
                                    <button
                                        key={certificate.id}
                                        type="button"
                                        onClick={() => setActiveIndex(index)}
                                        aria-label={`View certificate ${index + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            index === activeIndex
                                                ? "w-6 bg-slate-400 dark:bg-slate-300"
                                                : "w-1.5 bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500"
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Certificates;