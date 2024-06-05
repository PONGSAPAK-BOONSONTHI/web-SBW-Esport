import React from 'react'
import styles from './MainContact.module.css'
import { default_profile } from '../../utils'

const MainContact = () => {

  const person = [
    {"name" : "PONG1", "img" : "../../../public/default_profile.png", "role" : "ตำแหน่ง1"},
    {"name" : "PONG2", "img" : "../../../public/default_profile.png", "role" : "ตำแหน่ง2"},
    {"name" : "PONG3", "img" : "../../../public/default_profile.png", "role" : "ตำแหน่ง3"},
    {"name" : "PONG4", "img" : "../../../public/default_profile.png", "role" : "ตำแหน่ง4"},
    {"name" : "PONG5", "img" : "../../../public/default_profile.png", "role" : "ตำแหน่ง5"},
  ]

  return (
    <section id={styles.MainContact}>
      <div className={styles.MainContact}>

        {/* <h1>CONTACT US</h1>
      </div>
      <div className={styles.container}>
      <div className={styles.contact}>
        <h2>OUR TEAM</h2></div>
        <div className={styles.item_container}>
          <div className={styles.staff_name}>
          <th>P'INK</th>
          <th>P'INK2</th>
          <th>P'INK3</th></div>
        <div className={styles.staff_item}>
        <tr></tr>
          <th><img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"></img></th>
          <th><img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"></img></th>
          <th><img src="https://i.pinimg.com/736x/07/33/ba/0733ba760b29378474dea0fdbcb97107.jpg"></img></th></div>
        </div> */}

        <h1 className={styles.Maintitle}>OUR TEAM</h1>

        <div className={styles.section_Team}>
          {person.map((item, index) => (
            <div className={styles.person}>
              <h1>{item.name}</h1>
              <img src={item.img}></img>
              <p>"{item.role}"</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MainContact