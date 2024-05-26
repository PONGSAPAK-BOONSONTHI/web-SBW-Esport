import React, { useRef, useState } from 'react'
import styles from './Form.module.css'

const Form = () => {

  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec"
  const [loading, setLoading] = useState(false)

  //form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      console.log("ไม่มีค่า email");
      return;
    }
    setLoading(true);

    const formData = new FormData(formRef.current);

    const name = formData.get('name');
    const game = formData.get('game');
    const phone = formData.get('phone');
    if (!name || !game || !phone) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
      setLoading(false);
      return;
    }

    formData.append('email', email);

    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    }).then(res => {
      console.log("ส่งเรียบร้อยแล้ว");
      setLoading(false);
      formRef.current.reset();
    }).catch(err => console.log('Error :', err));
  }

  return (
    <section id={styles.Form}>
      <div className={styles.Form}>
        <div className={styles.mainForm}>

          <div className={styles.title}>
            <h1>ลงทะเบียน</h1>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <div>
              <label htmlFor='name'>ผู้ลงสมัครคนที่ N</label>
              <div className={styles.input}>
                  <label htmlFor='name'>คำนำหน้า</label>
                <select>
                  <option value="">เด็กชาย</option>
                  <option value="">เด็กหญิง</option>
                  <option value="">นาย</option>
                  <option value="">นางสาว</option>
                </select>
              </div>

              <div className={styles.input}>
                <label htmlFor='name'>ชื่อ</label>
                <input type="text" name="name" />
              </div>

              <div className={styles.input}>
                <label htmlFor='game'>นามสกุล</label>
                <input type="text" name="game" />
              </div>
            </div>

            <div className={styles.input}>
              <label htmlFor='phone'>เบอร์</label>
              <input type="text" name="phone" />
            </div>
            <div className={styles.input}>
              <label for="date">กรุณาgเลือก วัน/เดือน/ปีเกิด :</label>
              <input type="date" id="date" name="date" />
            </div>
            <br />
            <div className={styles.input}>
              <input className={styles.Button} type="submit" value={loading ? "Loading..." : "ส่งคำตอบ"} />
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Form