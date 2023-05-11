import Image from 'next/image';
import Navbar from '../components/Navbar';
import Mainconent from '../components/Mainconent';
import About from '../components/About';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Mainconent />
      <About />
      <Skills />
    </main>
  )
}
