import React from 'react'
import styles from './Contact.module.css'
import { Facebook, Instagram, Discord } from '../../utils'

const Contact = () => {
  return (
    <section id={styles.Contact}>
      <div className={styles.Contact}>
        <div className={styles.box_contact}>
          <div className={styles.contact1}>

            <div className={styles.spon}>
              <span className={styles.title}>ผู้สนับสนุน</span>
              <div className={styles.br}></div>
              <div className={styles.name_spon}>
                <ul>
                  <li>คุณไพโรจน์</li>
                  <li>ห้างหุ้นส่วนจำกัด</li>
                  <li>สระบุรีวณิชชากร</li>
                  <li>บริษัทไทยเจริญ</li>
                  <li>คณะกรรมการสถานศึกษา</li>
                  <li>เครือข่ายสมาคมผู้ปกครองโรงเรียนสระบุรีวิทยาคม</li>
                </ul>
              </div>
            </div>

            <div className={styles.con}>
              <span className={styles.title}>ช่องทางติดตาม</span>
              <div className={styles.br}></div>
              <div className={styles.img_con}>
                <a href="https://www.facebook.com/SBWesports/" target='_blank'><img src={Facebook} alt="Facebook"/></a>
                <a href="https://www.instagram.com/sbw.esports/" target='_blank'><img src={Instagram} alt="Instagram" /></a>
                <a href="https://discord.gg/wKX3PUYvCt" target='_blank'><img src={Discord} alt="Discord" /></a>
              </div>
            </div>
          </div>

          <div className={styles.contact2}>
            <div className={styles.address}>
              <span>
                โรงเรียนสระบุรีวิทยาคม
                <br />
                532 ถ. พหลโยธิน อำเภอเมืองสระบุรี สระบุรี 18000
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact