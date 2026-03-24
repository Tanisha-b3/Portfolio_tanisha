import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import ParticleBackground from './components/ParticleBackground';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <>
      <LoadingScreen />
      <ParticleBackground />
      <div className="min-h-screen bg-[#0d1b2a] relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
      <BackToTop />
    </>
  );
}

export default App;
