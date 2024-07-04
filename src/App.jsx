import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Introduce from './Components/Introduce'
import Techstack from './Components/TechStack/Techstack'

function App() {

  return (
    <div className='bg-[#191919]'>
      <Navbar/>
      <Introduce/>
      <Techstack/>
    </div>
  )
}

export default App
