import Image from 'next/image';
import Navbar from '../components/Navbar';
import Mainconent from '../components/Mainconent';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Mainconent />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
