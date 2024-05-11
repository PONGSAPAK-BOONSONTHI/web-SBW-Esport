import { useState } from 'react'
import Nevbar from './components/Nevber/Nevbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Slider from './components/Slider/Slider.jsx'
import Public from './components/Public/Public.jsx'
import Activity from './components/Activity/Activity.jsx'
import Origin from './components/Origin/Origin.jsx'
import Contact from './components/Contact/Contact.jsx'

function App() {
  const [count, setCount] = useState()

  const scrollToSection = (section) => {
    const element = document.getElementById(section)
    if(element) {
      element.scrollIntoView({behavior:'smooth'})
    }
  }

  return (
    <>
      <Nevbar scrollToSection={scrollToSection}/>
      <Hero />
      <Public />
      <Activity />
      <Origin />
      <Contact />
      {/* <Slider /> */}
    </>
  )
}

export default App
