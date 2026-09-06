import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Experience from "./sections/Experience.jsx";
import Projects from "./sections/Projects.jsx";
import Education from "./sections/Education.jsx";
import Certificates from "./sections/Certificates.jsx";
import Activities from "./sections/Activities.jsx";
import Contact from "./sections/Contact.jsx";

function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed left-0 top-0 z-[60] h-0.5 w-full origin-left bg-gradient-to-r from-slate-400 via-slate-600 to-slate-400 dark:from-slate-500 dark:via-slate-200 dark:to-slate-500"
        />
    );
}

function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    type="button"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Back to top"
                    className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-lg backdrop-blur-md transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:bg-black/80 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white"
                >
                    <ArrowUp size={18} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

function App(){
    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white">
            <ScrollProgress/>
            <Navbar/>

            <main>
                <Hero/>
                <About/>
                <Skills/>
                <Experience/>
                <Projects/>
                <Education/>
                <Certificates/>
                <Activities/>
                <Contact/>
            </main>

            <BackToTop/>
        </div>
    )
}

export default App;