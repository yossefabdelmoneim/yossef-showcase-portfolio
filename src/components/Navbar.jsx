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

function Navbar(){
    return (
        <nav className="fixed top-0 right-0 left-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/70">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    YOUSSEF <span className="text-slate-500 dark:text-gray-500">.</span>
                </a>

                <div className="flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="rounded-full px-3 py-1.5 text-sm transition text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-gray-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;