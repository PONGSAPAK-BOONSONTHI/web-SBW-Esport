import React from 'react'
import styles from './Publicized.module.css'
import publicize from '../../utils/publicize.json'
import { NavLink } from 'react-router-dom'

const Publicize = () => {
  return (
    <section id={styles.Publicized}>
      <div className={styles.Publicized}>
        <h1 className={styles.title}>ประชาสัมพันธ์</h1>
        <div className={styles.head}>
          {publicize.map((item, index) => (
            item.situation === "T" ? (
              <div className={styles.news}>

                <div className={styles.new_img}>
                  <NavLink to="/status" target='_blank'>
                    <img src={item.img} alt='' />
                  </NavLink>
                </div>

                <div className={styles.doc}>
                  <h1>{item.title}</h1>
                  <p className={styles.doc_p}>{item.p}</p>
                  <div className={styles.mini_doc}>
                    {item.mini_doc.split('\n').map((doc, index) => (
                      <p>{doc}</p>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              <div className={styles.news_F}>

                <div className={styles.new_img}>
                  <a>
                    <img src={item.img} alt='' />
                  </a>
                  <div className={styles.situation}>
                    <h1>ปิดรับ</h1>
                  </div>
                </div>

                <div className={styles.doc_F}>
                  <h1>{item.title}</h1>
                  <p className={styles.doc_p}>{item.p}</p>
                  <div className={styles.mini_doc}>
                    {item.mini_doc.split('\n').map((doc, index) => (
                      <p>{doc}</p>
                    ))}
                  </div>
                </div>

              </div>
            )
          ))}
        </div>
      </div>
    </section>
  )
}
export default Publicize