import Header from "./components/Header";
import BackgroundSection from "./components/BackgroundSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <section id="BackgroundSection">
        <BackgroundSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
    </>
  );
}

export default App;
