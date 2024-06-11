import React from 'react'
import styles from './Hero.module.css'
import { LogoSBWep, LogoSBW } from '../../utils/index.js'

const Hero = () => {
  return (
    <section id={styles.Hero}>
      <div className={styles.Hero}>
        <div className={styles.Logo1}>
          <img src={LogoSBWep} alt="LogoSBWep" />
          <div className={styles.boxshadow}></div>
        </div>
        <div className={styles.doc1}>
          <h1>SBW E-sport</h1>
          <span>💛ถิ่นเหลืองฟ้าสง่างาม💙</span>
        </div>
      </div>

      <div className={styles.Hero}>
        <div className={styles.shadowX}>
          <div className={`${styles.shadow} ${styles.box1}`}></div>
          <div className={`${styles.shadow} ${styles.box2}`}></div>
        </div>
        <div className={styles.inHero}>
          <div className={styles.Logo2}>
            <img className={styles.SBWep} src={LogoSBWep} height={160} alt="" />
            <img className={styles.SBW} src={LogoSBW} height={250} alt="" />
          </div>

          <div className={styles.doc2}>
            เพราะทักษะแห่งโลกอนาคตไม่ได้หยุดอยู่แค่ในห้องเรียน ห้องเรียน <span className={styles.text1}>E-sports</span>
            <br />
            จึงเป็นโครงการที่ออกแบบมาสำหรับเยาวชนรุ่นใหม่ที่จะช่วยส่งเสริมความสามารถและพัฒนาทักษะต่าง ๆ ที่จำเป็นในโลกดิจิทัล โดยมุ่งเน้นการให้ความรู้ด้านอาชีพในอุตสาหกรรมเกม
            <br />และเรา <span className={styles.text2}>โรงเรียนสระบุรีวิทยาคม</span> จะการสร้างความเข้าใจเกี่ยวกับอาชีพและเตรียมความพร้อมให้ผู้ที่มีความสนใจสามารถเข้าสู่ภาคธุรกิจและตลาดแรงงานได้ในอนาคต
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero