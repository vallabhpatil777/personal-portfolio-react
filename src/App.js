import React from 'react'
import NavBar from './components/NavBar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/components/Skills/skills.js'
import Works from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/components/Works/works.js'
import Contact from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/components/Contact/contact.js'
import Footer from '/Users/vallabhpatil777/Documents/portfolio/portfolio/src/components/Footer/footer.js'


const App = () => {
  return (
    <div className='App'>
        <NavBar/>
        <Intro/>
        <Skills/>
        
        <Contact/>

        <Footer/>
    </div>
  )
}

export default App