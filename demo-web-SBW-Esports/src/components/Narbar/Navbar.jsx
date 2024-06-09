import React, { useContext, useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { LogoSBWep, default_profile, more, down_chevron, close } from '../../utils/index.js';
import { NavLink } from 'react-router-dom';
import { DataApp } from '../../App.jsx';

const Nevbar = () => {
  const sections = [
    { to: '/', text: 'Home' },
    { to: '/publicize', text: 'ประชาสัมพันธ์' },
    { to: '/activity', text: 'กิจกรรม' },
    { to: '/origin', text: 'ความเป็นมา' },
    { to: '/contact', text: 'Contact' }
  ];

  const { profile, onSuccess, onFailed, logOut, clientId } = useContext(DataApp)
  const [imageSrcProfile, setImageSrcProfile] = useState(profile?.imageUrl || default_profile)

  const [openProflie, setOpenProflie] = useState(false)
  const [openMenu_more, setOpenMenu_more] = useState(false)
  const closeMenu = () => {
    setOpenProflie(false)
    setOpenMenu_more(false)
  };

  const handleMenuClick = () => {
    window.scrollTo(0, 0)
  };

  useEffect(() => {
    if (profile?.imageUrl) {
      setImageSrcProfile(profile.imageUrl)
    }
  }, [profile])

  const handleImageError = () => {
    setImageSrcProfile(default_profile);
  };

  return (
    <header>
      <nav className={styles.Navbar}>
        <NavLink to='/' className={styles.Logo}>
          <img src={LogoSBWep} width={90} alt="Logo" onClick={handleMenuClick} />
        </NavLink>
      
        <div onClick={() => setOpenMenu_more(!openMenu_more)} className={styles.Menu_more}>
          {!openMenu_more ? (
            <img src={more} alt="more" />
          ) : (
            <img src={close} alt="close" />
          )}
          {openMenu_more && (
            <ul className={styles.dropdown_Menu_more}>
              {sections.map((item, index) => (
                index % 2 === 0 ? (
                  <li key={index}>
                    <NavLink className={({ isActive }) => `${styles.button} ${isActive ? styles.active1 : ''}`} to={item.to}
                      onClick={() => {
                        handleMenuClick()
                        closeMenu()
                      }}>
                      {item.text}
                    </NavLink>
                  </li>
                ) : (
                  <li key={index}>
                    <NavLink key={index} className={({ isActive }) => `${styles.button} ${isActive ? styles.active2 : ''}`} to={item.to}
                      onClick={() => {
                        handleMenuClick()
                        closeMenu()
                      }}>
                      {item.text}
                    </NavLink>
                  </li>
                )
              ))}
            </ul>
          )}
        </div>

        <div className={styles.Menu}>
          {sections.map((item, index) => (
            index % 2 === 0 ? (
              <NavLink key={index} className={({ isActive }) => `${styles.button1} ${isActive ? styles.active1 : ''}`} to={item.to} onClick={handleMenuClick}>
                {item.text}
              </NavLink>
            ) : (
              <NavLink key={index} className={({ isActive }) => `${styles.button2} ${isActive ? styles.active2 : ''}`} to={item.to} onClick={handleMenuClick}>
                {item.text}
              </NavLink>
            )
          ))}
        </div>

        <div className={styles.Login}>
          {profile ? (
            <div onClick={() => setOpenProflie(!openProflie)} className={styles.profile}>
              <div className={styles.imgProfile}>
                <img src={imageSrcProfile} onError={handleImageError} />
              </div>
              <div>Profile</div>
              <img className={styles.down_chevron} src={down_chevron} alt="down_chevron" />
              {openProflie && (
                <ul className={styles.dropdown_down_chevron}>
                  <li>
                    <NavLink to="/status" onClick={() => closeMenu()}>
                      <button type='button'>ดูสถานะ</button>
                    </NavLink>
                  </li>
                  <li>
                    <GoogleLogout
                      clientId={clientId}
                      buttonText='Log out'
                      onLogoutSuccess={logOut}
                    />
                  </li>
                </ul>
              )}
            </div>
          ) : (
            <GoogleLogin
              clientId={clientId}
              buttonText='Login'
              onSuccess={onSuccess}
              onFailure={onFailed}
              cookiePolicy={'single_host_origin'}
              isSignedIn={true}
            />
          )}
        </div>
      </nav>
    </header >
  );
};

export default Nevbar;
