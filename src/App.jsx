import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import ParticlesComponent from "./components/particles/ParticlesComponent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Aos from "aos";
import "aos/dist/aos.css";
import BackToTop from "./components/icons/BackToTop";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import DarkMode from "./components/icons/DarkMode";
import { useState } from "react";

Aos.init();

function App() {
  const [isDarkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = (e) => {
    e.preventDefault();
    const html = document.documentElement;

    html.classList.toggle("dark");
    setDarkMode(document.documentElement.classList.contains("dark"));
  };

  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <Footer />
        <BackToTop />
        <DarkMode toggleDarkMode={toggleDarkMode} />
      </div>
      <ParticlesComponent isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
