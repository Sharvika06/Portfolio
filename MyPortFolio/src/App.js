import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ScrollToTopButton from './components/ScrollToTop';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      {/* <Experience/> */}
      <Timeline/>
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <ToastContainer />
    </div>
  );
}

export default App;