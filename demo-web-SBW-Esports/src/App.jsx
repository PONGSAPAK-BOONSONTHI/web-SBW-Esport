import { useState } from 'react'
import Nevbar from './components/Nevber/Nevbar.jsx'
import Hero from './components/Hero/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nevbar />
      <Hero />
    </>
  )
}

export default App
