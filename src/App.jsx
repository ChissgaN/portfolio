import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Introduce from './Components/Introduce'
import Techstack from './Components/TechStack/Techstack'
import About from './Components/About/About'
import ProjectContainer from './Components/Projects/ProjectContainer'
import FreelanceProjects from './Components/Freelance/FreelanceProjects'
import Foorter from './Components/Footer'
import Robot from './Components/Robot'


function App() {
  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };
  const [robotExpanded, setRobotExpanded] = useState(false);

  return (
    <div className='bg-[#191919]'>
      <Navbar
        toggleAbout={toggleAbout}
      />
      <Introduce/>
      <Techstack/>
      {showAbout && (
        <section id="about" className=" max-sm:bg-[#191919]">
          <About/>
        </section>
      )}
      <section id='projects'>
        <ProjectContainer/>
        <FreelanceProjects/>
      </section>
      <Robot expanded={robotExpanded} setExpanded={setRobotExpanded} />
      <Foorter/>
    </div>
  )
}

export default App
