import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div id="home">
          <Home />
        </div>
        <div id='experience'>
        <Experience />
        </div>
        <div id='skills'>
        <Skills />
        </div>
        <div id='projects'>
        <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
