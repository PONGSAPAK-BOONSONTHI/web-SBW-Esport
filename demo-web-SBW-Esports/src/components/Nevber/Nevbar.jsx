import React from 'react'
import styles from './Nevbar.module.css'
import {LogoSBWep} from '../../utils/index.js'

const Nevber = () => {
  return (
    <header>
        <nav className={styles.Navbar}>
            <div className={styles.Logo}>
              <img src={LogoSBWep} width={70} alt="Logo"/>
            </div>
            <div className={styles.Munu}>
                <a>Home</a>
                <a>About Us</a>
                <a>Highlight</a>
                <a>Service</a>
                <a>Activites</a>
            </div>
            <div className={styles.Login}>Login</div>
        </nav>
    </header>
  )
}

export default Nevber