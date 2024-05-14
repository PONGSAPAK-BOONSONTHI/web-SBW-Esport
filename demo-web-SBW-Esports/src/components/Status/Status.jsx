import React, { useContext } from 'react'
import styles from './Status.module.css'
import { DataApp } from '../../App'

const Status = () => {

  const { profile, email } = useContext(DataApp);

  return (
    <section id={styles.Status}>
      <div className={styles.Status}>
        <h1>ตรวจสอบสถานะ</h1>
        {profile ? (
          <div>
            <p>ชื่อ: {profile.name}</p>
            <p>อีเมล: {profile.email}</p>
          </div>
        ) : (
          <p>ยังไม่ทำ</p>
        )}
      </div>
    </section>
  )
}
export default Status