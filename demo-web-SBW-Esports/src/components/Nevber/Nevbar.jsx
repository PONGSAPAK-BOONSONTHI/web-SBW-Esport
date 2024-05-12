import React, { useEffect, useState } from 'react'
import styles from './Nevbar.module.css'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { gapi } from 'gapi-script'
import { LogoSBWep } from '../../utils/index.js'
import { Link, NavLink } from 'react-router-dom'

const Nevbar = () => {
  const [profile, setProfile] = useState(0)
  const [GoogleId, setGoogleId] = useState('')
  const [open, setOpen] = useState(false)
  const clientId = '981964571180-66p0p3cp7sdq6tif5aiam4j2589qt2no.apps.googleusercontent.com'

  const sections = [
    { to: '/', text: 'Home', target: 'section1', style: 'button1' },
    { to: '/public', text: 'ประชาสัมพันธ์', target: 'section2', style: 'button2' },
    { to: '/activity', text: 'กิจกรรม', target: 'section3', style: 'button1' },
    { to: '/origin', text: 'ความเป็นมา', target: 'section4', style: 'button2' },
    { to: '/contact', text: 'Contact', target: 'section5', style: 'button1' }
  ]

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

  const handleMenuClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <header>
      <nav className={styles.Navbar}>
        <Link to='/' className={styles.Logo}>
          <img src={LogoSBWep} width={70} alt="Logo" onClick={handleMenuClick}/>
        </Link>
        <div className={styles.Menu}>
          {sections.map((section, index) => (
            <Link key={index} to={section.to} className={styles[section.style]} onClick={handleMenuClick}>{section.text}</Link>
          ))}
        </div>
        <div className={styles.Login}>
          {profile ? (
            <div onClick={() => setOpen(!open)} className={styles.profile}>
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

export default Nevbar