import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import SocialIcons from "./components/icons/SocialIcons";
import ParticlesComponent from "./components/particles/ParticlesComponent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(
        e.currentTarget.getAttribute("href")
      );
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);
  return (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar />
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
        <SocialIcons />
      </div>
      <ParticlesComponent />
    </>
  );
}

export default App;
