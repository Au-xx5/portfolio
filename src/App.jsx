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

Aos.init();

function App() {
  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
        <ContactMe />
        <BackToTop />
      </div>
      <ParticlesComponent />
    </>
  );
}

export default App;
