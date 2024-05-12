import { useEffect, useState } from 'react'
import Nevbar from './components/Nevber/Nevbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Public from './components/Public/Public.jsx'
import Activity from './components/Activity/Activity.jsx'
import Origin from './components/Origin/Origin.jsx'
import MainContact from './components/MainContact/MainContact.jsx'
import Contact from './components/Contact/Contact.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Nevbar />
      <Routes>  
        <Route path='/' element={
          <>
            <Hero />
            <Public />
            <Activity />
            <Origin />
            <Contact />
          </>
        } />
        <Route path='/public' element={
          <>
            <Public />
            <Contact />
          </>
        } />
        <Route path='/activity' element={
          <>
            <Activity />
            <Contact />
          </>
        } />
        <Route path='/origin' element={
          <>
            <Origin />
            <Contact />
          </>
        } />
        <Route path='/contact' element={
          <>
            <MainContact />
            <Contact />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}
export default App
