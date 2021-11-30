import "./App.css";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Education />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
