import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import AboutMe from "./components/AboutMe";
import SocialIcons from "./components/icons/SocialIcons";
import ParticlesComponent from "./components/particles/ParticlesComponent";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
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
