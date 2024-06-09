import React from 'react'
import styles from './Publicized.module.css'
import { news, news2, news3, news4 } from '../../utils'

const Publicize = () => {
  return (
    <section id={styles.Publicized}>
      <div className={styles.Publicized}>
        <h1 className={styles.title}>ประชาสัมพันธ์</h1>
        <div className={styles.head}>

          <div className={styles.news}>
            <a href='https://www.facebook.com/photo?fbid=297707780059543&set=a.107154159114907' target="_blank">
              <img src={news} alt='' />
            </a>
            <div className={styles.doc}>
              <h1>Event name</h1>
              <p>qweqweqweqweqweqeqweq</p>

            </div>

          </div>

          <div className={styles.news}>
            <a href='https://www.facebook.com/photo?fbid=288556617641326&set=a.107154159114907' target="_blank">
              <img src={news2} alt='' />
            </a>
            <p>Event name</p>
          </div>

          <div className={styles.news}>
            <a href='https://www.facebook.com/photo/?fbid=187811377715851&set=pcb.187812891049033' target='_blank'>
              <img src={news4} alt='' />
            </a>
            <p>Event name</p>
          </div>

          <div className={styles.news}>
            <a href='https://www.facebook.com/photo/?fbid=187811377715851&set=pcb.187812891049033' target='_blank'>
              <img src="https://www.ais.th/game/studio/asset/images/img_zone01.jpg" alt='' />
            </a>
            <p>Event name</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Publicize