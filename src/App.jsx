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

function App(){
    return (
        <div className="min-h-screen bg-white text-slate-900 dark:bg-black dark:text-white">
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
        </div>
    )
}

export default App;