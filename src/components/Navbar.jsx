import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import useActiveSection from "../hooks/useActiveSection.js";

const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#certificates", label: "Certificates" },
    { href: "#activities", label: "Activities" },
    { href: "#contact", label: "Contact" },
];

const sectionIds = navLinks.map((link) => link.href.slice(1));

const getLinkClass = (isActive) =>
    `rounded-full px-3 py-1.5 text-sm transition ${
        isActive
            ? "bg-slate-900 text-white dark:bg-white dark:text-black"
            : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
    }`;

function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useActiveSection(sectionIds);

    return(
        <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">YOUSSEF <span className="text-slate-500 dark:text-gray-500">.</span></a>

                <div className="hidden items-center gap-2 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={getLinkClass(activeSection === link.href.slice(1))}
                        >
                            {link.label}
                        </a>
                    ))}

                    <div className="ml-2">
                        <ThemeToggle/>
                    </div>
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <ThemeToggle/>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-white"
                    >
                        {isMenuOpen ? <X size={18}/> : <Menu size={18}/>}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="flex flex-col gap-1 border-t border-slate-200/70 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden dark:border-white/10 dark:bg-black/95">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={getLinkClass(activeSection === link.href.slice(1))}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    )
}

export default Navbar;