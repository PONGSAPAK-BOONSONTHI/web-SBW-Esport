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
        <div className={styles.main_Form}>

          <div className={styles.head_title}>
            <h1>ลงทะเบียน</h1>
          </div>

          <div className={styles.rule}>
            <span className={styles.title}>
              <h1>รับสมัครหาทีมตัวเเทนโรงเรียน รายการ <br/> " RoV ESPORTS SCHOOL CHALLENGE "</h1>
            </span>
            <span>
              <h2>ฟอร์มรับสมัครตัวเเทนนักเรียนโรงเรียนสระบุรีวิทยาคม</h2>
              <h2>อ่านกติกา กฎ เเละข้อตกลงให้เรียบร้อย</h2>
              <br />
              <h3>วันรับสมัคร</h3>
              30 เมษายน 2567 เวลา 18.30 น. ถึงวันที่ 3 พฤษภาคม 2567
              <h3>กติกาการสมัคร</h3>
              📌 สมาชิกทีมต้องมาจากโรงเรียนเดียวกันเท่านั้น (อนุญาตให้ผู้เข้าแข่งขันที่อยู่ในการศึกษาช่วงมัธยมศึกษาปีที่ 1 - 6) <br />
              📌 สมาชิกในทีม -สามารถคละระดับชั้นได้ -ไม่จำกัดเพศในทีม <br />
              <br />
              <h3>ประกาศชื่อทีมเเละกำหนดการเเข่งขัน</h3>
              📌นักเรียนติดตามประกาศรายชื่อทีม ที่เพจSBW Esport <br />
              <br />
              <h3>กติกาการแข่งขัน</h3>
              📌การคัดตัวนักกีฬาจะเป็นการเเข่งขันรูปแบบออนไลน์ <br />
              📌ไอดีของผู้เล่นจะต้องมีฮีโร่มากกว่า 20 ตัวจึงสามารถเข้าร่วม Tournament mode ได้ <br />
              📌การเเข่งขันรูปเเบบเก็บคะเเนน พบกันทุกทีม <br />
              <br />
              จัดการเเข่ง 2 เกม/ทีม (ชนะ 2 เกมจะได้ 3 คะเเนน,ชนะ 1 เกม เเพ้ 1 เกม จะได้ 1 คะเเนน , เเพ้ 2 เกม ได้ 0 คะเเนน) กรณีมีทีมสมัครมากกว่า 6 ทีม การแข่งขันในรูปเเบบ Tournament (สุ่มจับคู่สาย เเพ้คัดออก) **แข่งชนะ 2 ใน 3 <br />
              <br />
              📌ให้ใช้ID ที่มี Username ตามที่กรอกไว้ตาม Form เท่านั้น <br />
              📌ห้ามผู้เข้าแข่งขันถ่ายทอดสด ระหว่างการแข่งขัน <br />
              📌ห้ามนักเรียนใช้ชื่อในเกมไม่เหมาะสม คำสแลง คำผวน ชื่อที่กล่าวร้าย เสียดสี <br />
              <br />
              <h3>ข้อห้าม</h3>
              📌ผู้เข้าแข่งขันทุกคนจะต้องไม่ใช้วาจาที่หยาบคายรวมถึงคำใดๆที่แสดงออกถึงการดูถูกเหยียดหยามหรือแสดงออกถึงความไม่มีน้ำใจนักกีฬาต่อฝ่ายตรงข้ามเป็นอันขาดรวมถึงบนสื่อ <br/> Social Media ที่จงใจโจมตคีู่แข่งในเชิงลบ <br />
              📌ห้ามใช้ Glitch หรือ bug ต่างๆภายในเกมเพื่อผลประโยชน์ของทีมตนเองโดยเด็ดขาด หากพบเห็นจะถูกปรับแพ้โดยทันที <br />
              📌นักเรียน 1 คน สามารถลงแข่งได้เพียง 1 ทีมเท่านั้น และห้ามมิให้ผู้อื่นที่ไม่ใช่นักแข่งภายในทีมลงแข่งแทนโดยเด็ดขาด <br />
              📌ห้ามใช้โปรแกรมโกงหรือโปรแกรมช่วยเล่นทุกชนิด <br />
              <div className={styles.img}>
              <img src="https://lh7-us.googleusercontent.com/WvjWYIxTa_9O5SmzFXBemotGaAxSnjoopyUnXz0gybY--DsnvGYYlcLBbVmDSr8pBZTzDj_Yh5NQufHlds-ZEF5oRhFrVLKLoOvg64fsjRK8j9Xp6T1One5VM_hjBLIheQS7zPb68ajuap_8rACPX640-UeP"></img><br />
              </div>
            </span>
          </div>

          {/* <form className={styles.main_sention_Forn} ref={formRef} onSubmit={handleSubmit} name="google-sheet">
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
          </form> */}

          <div className={styles.Button_sention}>
            <a className={styles.Button}>ถัดไป</a>
            {/* <input className={styles.Button} type="submit" value={loading ? "Loading..." : "ส่งคำตอบ"} /> */}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Form