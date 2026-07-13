import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Certifications from './components/Certifications.jsx'
import NowBuilding from './components/NowBuilding.jsx'
import Notes from './components/Notes.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import RobotAssistant from './components/RobotAssistant.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Certifications />
      <NowBuilding />
      <Notes />
      <Contact />
      <Footer />
      <RobotAssistant />
    </div>
  )
}
