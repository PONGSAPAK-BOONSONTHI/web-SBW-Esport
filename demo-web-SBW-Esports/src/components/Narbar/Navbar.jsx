import React, { useContext, useState } from 'react';
import styles from './Navbar.module.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import { LogoSBWep } from '../../utils/index.js';
import { Link } from 'react-router-dom';
import { DataApp } from '../../App.jsx';

const Nevbar = () => {
  const { profile, onSuccess, onFailed, logOut, clientId } = useContext(DataApp);

  const sections = [
    { to: '/', text: 'Home',  style: 'button1' },
    { to: '/public', text: 'ประชาสัมพันธ์',  style: 'button2' },
    { to: '/activity', text: 'กิจกรรม',  style: 'button1' },
    { to: '/origin', text: 'ความเป็นมา',  style: 'button2' },
    { to: '/contact', text: 'Contact',  style: 'button1' }
  ];
  
  const [open, setOpen] = useState(false);
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
            <Link key={index} to={section.to} className={styles[section.style]} onClick={handleMenuClick}>
              {section.text}
            </Link>
          ))}
        </div>
        <div className={styles.Login}>
          {profile ? (
            <div onClick={() => setOpen(!open)} className={styles.profile}>
              <div className={styles.imgProfile}><img src={profile.imageUrl} alt="imgProfile" /></div>
              <div>Profile</div>
              {open && (
                <ul className={styles.dropdown}>
                  <Link to="/status">
                    <li><button type='button'>ดูสถานะ</button></li>
                  </Link>
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
    </header>
  );
};

export default Nevbar;
