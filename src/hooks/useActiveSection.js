import { useEffect, useState } from "react";

const useActiveSection = (sectionIds) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const sections = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean);

        if (!sections.length) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [sectionIds]);

    return activeSection;
};

export default useActiveSection;