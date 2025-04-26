import React from 'react'
import Profile from '../Home/Profile'
import About from '../Home/About'
import Skills from '../Home/Skills'
import Education from '../Home/Education'
import Projects from '../Home/Projects'
import Contact from '../Home/Contact'

const Home = () => {
  return (
    <div className="scroll-smooth bg-gray-50">
      <main className="space-y-16">
        <Profile />
        <About/>
        <Skills/>
        <Education/>
        <Projects/>
        <Contact/>
      </main>
    </div>
  )
}

export default Home