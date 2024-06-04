import React from 'react'
import styles from './MainContact.module.css'

const MainContact = () => {
  return (
    <section id={styles.MainContact}>
    <div className={styles.MainContact}>
      <h1>CONTACT US</h1>
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
        </div>
    </div>
  </section>
  )
}

export default MainContact