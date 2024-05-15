import { createContext, useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { gapi } from 'gapi-script'

import Navbar from './components/Narbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import Public from './components/Public/Public.jsx'
import Activity from './components/Activity/Activity.jsx'
import Origin from './components/Origin/Origin.jsx'
import MainContact from './components/MainContact/MainContact.jsx'
import Contact from './components/Contact/Contact.jsx'
import Status from './components/Status/Status.jsx'

export const DataApp = createContext();

function App() {

  const clientId = '981964571180-66p0p3cp7sdq6tif5aiam4j2589qt2no.apps.googleusercontent.com'
  const [profile, setProfile] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    gapi.load("client:auth2", initClient);
  }, [clientId]);

  const onSuccess = (res) => {
    const profile = res.profileObj
    setProfile(profile)
    console.log('Success', res)
    const Email = profile.email
    setEmail(Email)
  };

  const onFailed = (res) => {
    console.log('Failed', res);
  };

  const logOut = () => {
    setProfile(null);
  };

  const value = {
    profile,
    email,
    clientId,
    onSuccess,
    onFailed,
    logOut
  };

  return (
    <DataApp.Provider value={value}>
      <BrowserRouter>
        <Navbar />
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
          <Route path='/status' element={
            <>
              <Status />
              <Contact />
            </>
          }></Route>
        </Routes>
      </BrowserRouter>
    </DataApp.Provider>
  )
}
export default App
