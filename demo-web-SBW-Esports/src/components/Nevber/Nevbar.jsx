import React, { useEffect, useState } from 'react'
import styles from './Nevbar.module.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import { LogoSBWep } from '../../utils/index.js'

const Nevber = ({ scrollToSection }) => {
  const [profile, setProfile] = useState(0)
  const [GoogleId, setGoogleId] = useState('')
  const [open, setOpen] = useState(false)
  const clientId = '981964571180-66p0p3cp7sdq6tif5aiam4j2589qt2no.apps.googleusercontent.com'

  useEffect(() => {
    const initcliient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      })
    }
    gapi.load("client:auth2", initcliient)
  }, [])

  const onSuccess = (res) => {
    setProfile(res.profileObj)
    console.log('Success', res)
    const googleId = res.GoogleId
    setGoogleId(googleId)
  }

  const onFailed = (res) => {
    console.log('Failed', res)
  }

  const logOut = () => {
    setProfile(null)
  }

  const Open = () => {
    setOpen(!open)
  }

  return (
    <header>
      <nav className={styles.Navbar}>
        <div className={styles.Logo}>
          <img onClick={() => scrollToSection('section1')} src={LogoSBWep} width={70} alt="Logo" />
        </div>
        <div className={styles.Menu}>
          <a className={styles.button1} onClick={() => scrollToSection('section1')}>Home</a>
          <a className={styles.button2} onClick={() => scrollToSection('section2')}>ประชาสัมพันธ์</a>
          <a className={styles.button1} onClick={() => scrollToSection('section3')}>กิจกรรม</a>
          <a className={styles.button2} onClick={() => scrollToSection('section4')}>ความเป็นมา</a>
          <a className={styles.button1} onClick={() => scrollToSection('section5')}>Contact</a>
        </div>
        <div className={styles.Login}>
          {profile ? (
            <div onClick={Open} className={styles.profile}>
              <div className={styles.imgProfile}><img src={profile.imageUrl} alt="imgProfile" /></div>
              <div>Profile</div>
              {open ? (
                <ul className={styles.dropdown}>
                  <li><button type='button'>ดูสถานะ</button></li>
                  <li>
                    <GoogleLogout
                      clientId={clientId}
                      buttonText='Log out'
                      onLogoutSuccess={logOut}
                    />
                  </li>
                </ul>
              ) : (null)}
            </div>
          ) : (
            <div>
              <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailed}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
              />
            </div>
          )}

        </div>
      </nav>
    </header>
  )
}

export default Nevber