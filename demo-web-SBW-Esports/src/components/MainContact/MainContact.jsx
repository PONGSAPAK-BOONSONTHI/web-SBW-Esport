import React from 'react'
import styles from './MainContact.module.css'
import contact from '../../utils/contact.json'
import { icon_instagram, Facebook } from '../../utils'

const MainContact = () => {
  console.log(contact);

  return (
    <section id={styles.MainContact}>
      <div className={styles.MainContact}>

        <div>
          <h1 className={styles.Maintitle}>HEAD STAFF</h1>
          <div className={styles.section_Team}>
            {contact.map((item, index) => (
              index < 5 && (
                <div className={styles.person} id={index}>
                  <h1>{item.title}</h1>
                  <img src={item.img}></img>
                  <p>P' {item.name}</p>
                  <p>POSITION : {item.role}</p>
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

          <div>
            <h1 className={styles.Maintitle}>STAFF</h1>
            <div className={styles.section_Team}>
              {contact.map((item, index) => (
                index > 5 && (
                  <div className={styles.person} id={index}>
                    <h1>{item.title}</h1>
                    <img src={item.img}></img>
                    <div>
                      <p>P' {item.name}</p>
                      <p>POSITION : {item.role}</p>
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
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainContact