import React, { useContext, useRef, useState } from 'react'
import styles from './Status.module.css'
import { DataApp } from '../../App'

const Status = () => {
  const [data, setdata] = useState([])
  const { profile, email } = useContext(DataApp);

  const formRef = useRef(null)
  const scriptApi =  "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec"
  const button = (e) => {
    e.preventDefault()
    if (!email) {
      console.log("พม่างง")
      return;
    }
    setLoading(true)
    // fetch (scriptApi)
  }
  return (
    <section id={styles.Status}>
      {/* <div className={styles.from}> */}
      <div className={styles.Status}>
        <form name="google-sheet">
          <div className={styles.input}>
            <label htmlFor='name'>ผู้ลงสมัคร</label>
            <input type="text"  name="name" />
          </div>
          <div className={styles.input}>
            <label htmlFor='game'>Game</label>
            <input type="text" name="game" />
          </div>
          <div className={styles.input}>
            <label htmlFor='phone'>เบอร์</label>
            <input type="text" name="phone" />
          </div>
          {/* <br /> */}
          <div className={styles.input}>
              <input type="submit" value={loading ? "Loading..." : "ส่งคำตอบ"} />
            </div>
        </form>
      </div>
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