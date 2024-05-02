import { useState, useEffect } from 'react'
import LoginLogout from './components/LoginLogout/LoginLogout.jsx'
import Webform from './components/Webfrom/Webform.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginLogout />
      <Webform />
    </>
  )
}

export default App
