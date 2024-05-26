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

          <div className={styles.head_title}>
            <h1>ลงทะเบียน</h1>
          </div>

          <form className={styles.main_sention_Forn} ref={formRef} onSubmit={handleSubmit} name="google-sheet">
            <h1 className={styles.title}>ผู้ลงสมัครคนที่ N</h1>
            <div className={styles.form_Sention}>
              <div className={styles.select}>
                <label htmlFor='prefix'>คำนำหน้า</label>
                <select id='prefix'>
                  <option value="">-</option>
                  <option value="">เด็กชาย</option>
                  <option value="">เด็กหญิง</option>
                  <option value="">นาย</option>
                  <option value="">นางสาว</option>
                </select>
              </div>

              <div className={styles.input}>
                <label htmlFor='name'>ชื่อ</label>
                <input type="text" id='name' name="name" />
              </div>

              <div className={styles.input}>
                <label htmlFor='surname'>นามสกุล</label>
                <input type="text" id="surname" name="game" />
              </div>
            </div>

            <div className={styles.form_Sention}>
              <div className={styles.input}>
                <label for="date">วัน/เดือน/ปีเกิด</label>
                <input type="date" id="date" name="date" />
              </div>

              <div className={styles.input}>
                <label htmlFor='phone'>เบอร์</label>
                <input type="text" id='phone' name="phone" />
              </div>
              <div className={styles.input}>
                <label htmlFor='room'>ชั้นเเละห้อง</label>
                <input type="text" id='roon' name="room" />
              </div>

              <div className={styles.input}>
                <label htmlFor='number&chapter'>เลขที่เเละตอน</label>
                <input type="text" id='umber&chapter' name="umber&chapter" />
              </div>
            </div>

            <div className={styles.form_Sention}>
              <div className={styles.input}>
                <label htmlFor="name_game">ชื่อในเกม</label>
                <input type="text" id='name_game' name="name_game" />
              </div>

              <div className={styles.input}>
                <label htmlFor="openID">OpenID</label>
                <input type="text" id='openID' name="openID" />
              </div>
            </div>

            <div className={styles.position_Sention}>
              <label for="date">ตำแหน่งในเกม</label>

              <div className={styles.category_select_position}>
                <div className={styles.position}>
                  <input type="radio" name="position" id="dsl" />
                  <label htmlFor="dsl">DSL (ออฟเลน, เลนดาร์ค)</label>
                </div>
                <div className={styles.position}>
                  <input type="radio" name="position" id="jug" />
                  <label htmlFor="jug">JUG (ป่า, ฟาร์ม)</label>
                </div>
                <div className={styles.position}>
                  <input type="radio" name="position" id="mid" />
                  <label htmlFor="mid">MID (เลนกลาง)</label>
                </div>
                <div className={styles.position}>
                  <input type="radio" name="position" id="adl" />
                  <label htmlFor="adl">ADL (แครี่, เลนมังกร)</label>
                </div>
                <div className={styles.position}>
                  <input type="radio" name="position" id="sup" />
                  <label htmlFor="sup">SUP (ซัพพอร์ต, โรมมิ่ง)</label>
                </div>
              </div>


            </div>

            <br />

            <div className={styles.Button_sention}>
              <a className={styles.Button}>ถัดไป</a>
              {/* <input className={styles.Button} type="submit" value={loading ? "Loading..." : "ส่งคำตอบ"} /> */}
            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Form