import React from 'react'
import styles from './Activity.module.css'
import activity from '../../utils/activity.json'

const Activity = () => {
  return (
    <section id='section3'>
      <div className={styles.Main}>
        <h1 className={styles.title}>การแข่งขันที่ผ่านมา</h1>
        {activity.map((item, index) => (
          <div key={index} className={styles.activity}>

            <div className={styles.title_activity}>
              <h1>{item.title}</h1>
              <p>{item.doc}</p>
            </div>

            <div className={styles.con_activity}>
              <div className={styles.img_con1}>
                <img src={item.img1} height={500} alt="" />
              </div>
              <div className={styles.img_con2}>
                <img src={item.img2} height={500} alt="" />
                <img src={item.img3} height={500} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Activity