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
              index < 4 && (
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
                      <a target="_blank" href="https://www.google.com/search?q=fb&sca_esv=db4f9136e0dbb8e8&rlz=1C1ONGR_enTH1113TH1113&sxsrf=ADLYWIKR-4HptMZ2T7Fji7zUfDOobw-_Eg%3A1717659652608&ei=BGhhZoXoJPC84-EP7KCO8AI&udm=&ved=0ahUKEwiF-sDrvMaGAxVw3jgGHWyQAy4Q4dUDCBA&uact=5&oq=fb&gs_lp=Egxnd3Mtd2l6LXNlcnAiAmZiMgoQABiABBhDGIoFMggQABiABBixAzILEAAYgAQYsQMYgwEyChAAGIAEGEMYigUyEBAAGIAEGLEDGEMYgwEYigUyERAuGIAEGLEDGNEDGIMBGMcBMg4QLhiABBixAxjRAxjHATILEAAYgAQYsQMYgwEyBRAAGIAEMgsQABiABBixAxiDAUjPAlAAWDhwAHgAkAEAmAFLoAGPAaoBATK4AQPIAQD4AQGYAgKgApYBwgIMECMYgAQYExgnGIoFwgIKECMYgAQYJxiKBcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigWYAwCSBwEyoAfCEg&sclient=gws-wiz-serp">
                        <img src={Facebook} alt="Facebook" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

        <div>
          <h1 className={styles.Maintitle}>STAFF</h1>
          <div className={styles.section_Team}>
            {contact.map((item, index) => (
              index > 4 && (
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
                      <a target="_blank" href="https://www.google.com/search?q=fb&sca_esv=db4f9136e0dbb8e8&rlz=1C1ONGR_enTH1113TH1113&sxsrf=ADLYWIKR-4HptMZ2T7Fji7zUfDOobw-_Eg%3A1717659652608&ei=BGhhZoXoJPC84-EP7KCO8AI&udm=&ved=0ahUKEwiF-sDrvMaGAxVw3jgGHWyQAy4Q4dUDCBA&uact=5&oq=fb&gs_lp=Egxnd3Mtd2l6LXNlcnAiAmZiMgoQABiABBhDGIoFMggQABiABBixAzILEAAYgAQYsQMYgwEyChAAGIAEGEMYigUyEBAAGIAEGLEDGEMYgwEYigUyERAuGIAEGLEDGNEDGIMBGMcBMg4QLhiABBixAxjRAxjHATILEAAYgAQYsQMYgwEyBRAAGIAEMgsQABiABBixAxiDAUjPAlAAWDhwAHgAkAEAmAFLoAGPAaoBATK4AQPIAQD4AQGYAgKgApYBwgIMECMYgAQYExgnGIoFwgIKECMYgAQYJxiKBcICFhAuGIAEGLEDGNEDGEMYgwEYxwEYigWYAwCSBwEyoAfCEg&sclient=gws-wiz-serp">
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
    </section>
  )
}

export default MainContact