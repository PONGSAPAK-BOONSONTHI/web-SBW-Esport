import React from 'react'
import styles from './MainContact.module.css'
import contact from '../../utils/contact.json'
import { icon_instagram, Facebook } from '../../utils'

const MainContact = () => {

  return (
    <section id={styles.MainContact}>
      <div className={styles.MainContact}>
        <h1 className={styles.Maintitle}>HEAD STAFF</h1>
        <div className={styles.section_Team}>
          {contact.map((item, index) => (
            index < 5 && (
              <div className={styles.person} id={index}>
                <h1>P' {item.name}</h1>
                <img src={item.img}></img>
                <p>{item.title}</p>
                <p>{item.role}</p>
                <div className={styles.contact}>
                  <p>CONTACT :</p>
                  <a target="_blank" href={item.IG}>
                    <img src={icon_instagram} alt="icon_instagram" />
                  </a>
                  <a target="_blank" href={item.FB}>
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            )
          ))}
        </div>

        <h1 className={styles.Maintitle}>STAFF</h1>
        <div className={styles.section_Team}>
          {contact.map((item, index) => (
            index >= 5 && (
              <div className={styles.person} id={index}>
                <h1>P'{item.name}</h1>
                <img src={item.img}></img>
                <p> {item.title}</p>
                <p>{item.role}</p>
                <div className={styles.contact}>
                  <p>CONTACT :</p>
                  <a target="_blank" href={item.IG}>
                    <img src={icon_instagram} alt="icon_instagram" />
                  </a>
                  <a target="_blank" href={item.FB}>
                    <img src={Facebook} alt="Facebook" />
                  </a>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}

export default MainContact