import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            return savedTheme === "dark";
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const root = document.documentElement;

        if (isDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);

    return (
        <button
            type="button"
            onClick={() => setIsDark((current) => !current)}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition-all duration-300 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white"
        >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
};

export default ThemeToggle;