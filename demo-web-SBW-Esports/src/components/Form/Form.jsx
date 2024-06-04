import React, { useContext, useRef, useState } from 'react'
import styles from './Form.module.css'
import { DataApp } from '../../App'

const Rule = ({ onNext }) => {
  return (
    <div className={styles.section}>
      <div className={styles.rule}>
        <h1 className={styles.title}>รับสมัครหาทีมตัวเเทนโรงเรียน รายการ <br /> " RoV ESPORTS SCHOOL CHALLENGE "</h1>
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
          📌ผู้เข้าแข่งขันทุกคนจะต้องไม่ใช้วาจาที่หยาบคายรวมถึงคำใดๆที่แสดงออกถึงการดูถูกเหยียดหยามหรือแสดงออกถึงความไม่มีน้ำใจนักกีฬาต่อฝ่ายตรงข้ามเป็นอันขาดรวมถึงบนสื่อ <br /> Social Media ที่จงใจโจมตคีู่แข่งในเชิงลบ <br />
          📌ห้ามใช้ Glitch หรือ bug ต่างๆภายในเกมเพื่อผลประโยชน์ของทีมตนเองโดยเด็ดขาด หากพบเห็นจะถูกปรับแพ้โดยทันที <br />
          📌นักเรียน 1 คน สามารถลงแข่งได้เพียง 1 ทีมเท่านั้น และห้ามมิให้ผู้อื่นที่ไม่ใช่นักแข่งภายในทีมลงแข่งแทนโดยเด็ดขาด <br />
          📌ห้ามใช้โปรแกรมโกงหรือโปรแกรมช่วยเล่นทุกชนิด <br />
          <div className={styles.img}>
            <div className={styles.shadow}></div>
            <img src="https://lh7-us.googleusercontent.com/WvjWYIxTa_9O5SmzFXBemotGaAxSnjoopyUnXz0gybY--DsnvGYYlcLBbVmDSr8pBZTzDj_Yh5NQufHlds-ZEF5oRhFrVLKLoOvg64fsjRK8j9Xp6T1One5VM_hjBLIheQS7zPb68ajuap_8rACPX640-UeP"></img>
          </div>
        </span>
      </div>

      <div className={styles.Button_sention_Right}>
        <a className={`${styles.Button} ${styles.onNext}`} onClick={onNext}>ถัดไป</a>
      </div>
    </div>
  )
}

const ApplicantForm = ({ applicantNumber, onNext, onBack, onSave, loading }) => {
  const formRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const prefix = formData.get('prefix')
    const name = formData.get('name')
    const surname = formData.get('surname')
    const phone = formData.get('phone')
    const date = formData.get('date')
    const room = formData.get('room')
    const number_capter = formData.get('number_capter')
    const name_game = formData.get('name_game')
    const openID = formData.get('openID')
    const position = formData.get('position')

    if (!prefix || !name || !surname || !phone || !date || !room || !number_capter || !name_game || !openID || !position) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน!");
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน")
      return;
    }

    const formattedDate = new Date(date)
    const day = formattedDate.getDate()
    const month = formattedDate.getMonth() + 1
    const year = formattedDate.getFullYear()
    const formattedDateString = `${day}/${month}/${year}`

    formData.set('date', formattedDateString)

    const data = Object.fromEntries(formData.entries());
    onSave(applicantNumber, data);
    console.log(data)
    if (applicantNumber < 6) {
      // formRef.current.reset();
      onNext();
    } else {
      onNext();
    }
    console.log("applicantNumber", applicantNumber);
  }

  return (
    <div className={styles.section}>
      <form className={styles.main_sention_Form} ref={formRef} onSubmit={handleSubmit} name="google-sheet">
        <h1 className={styles.title}>ผู้ลงสมัครคนที่ {applicantNumber}</h1>
        <div className={styles.form_Sention}>
          <div className={styles.select}>
            <label htmlFor='prefix'>คำนำหน้า</label>
            <select id='prefix' name="prefix">
              <option value="">-</option>
              <option value="เด็กชาย">เด็กชาย</option>
              <option value="เด็กหญิง">เด็กหญิง</option>
              <option value="นาย">นาย</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          <div className={styles.input}>
            <label htmlFor='name'>ชื่อ</label>
            <input type="text" id='name' name="name" required />
          </div>

          <div className={styles.input}>
            <label htmlFor='surname'>นามสกุล</label>
            <input type="text" id="surname" name="surname" required />
          </div>
        </div>

        <div className={styles.form_Sention}>
          <div className={styles.input}>
            <label for="date">วัน/เดือน/ปีเกิด</label>
            <input type="date" id="date" name="date" required />
          </div>

          <div className={styles.input}>
            <label htmlFor='phone'>เบอร์</label>
            <input type="text" id='phone' name="phone" required />
          </div>
          <div className={styles.input}>
            <label htmlFor='room'>ชั้นเเละห้อง</label>
            <input type="text" id='roon' name="room" required />
          </div>

          <div className={styles.input}>
            <label htmlFor='number_capter'>เลขที่เเละตอน</label>
            <input type="text" id='number_capter' name="number_capter" required />
          </div>
        </div>

        <div className={styles.form_Sention}>
          <div className={styles.input}>
            <label htmlFor="name_game">ชื่อในเกม</label>
            <input type="text" id='name_game' name="name_game" required />
          </div>

          <div className={styles.input}>
            <label htmlFor="openID">OpenID</label>
            <input type="text" id='openID' name="openID" required />
          </div>
        </div>

        <div className={styles.position_Sention}>
          <label for="date">ตำแหน่งในเกม</label>
          <div className={styles.category_select_position}>
            <div className={styles.position}>
              <input type="radio" name="position" id="dsl" value="DSL" required />
              <label htmlFor="dsl">DSL (ออฟเลน, เลนดาร์ค)</label>
            </div>
            <div className={styles.position}>
              <input type="radio" name="position" id="jug" value="JUG" required />
              <label htmlFor="jug">JUG (ป่า, ฟาร์ม)</label>
            </div>
            <div className={styles.position}>
              <input type="radio" name="position" id="mid" value="MID" required />
              <label htmlFor="mid">MID (เลนกลาง)</label>
            </div>
            <div className={styles.position}>
              <input type="radio" name="position" id="adl" value="ADL" required />
              <label htmlFor="adl">ADL (แครี่, เลนมังกร)</label>
            </div>
            <div className={styles.position}>
              <input type="radio" name="position" id="sup" value="SUP" required />
              <label htmlFor="sup">SUP (ซัพพอร์ต, โรมมิ่ง)</label>
            </div>
          </div>
        </div>

      </form>

      <div className={styles.Button_sention_NextBack}>
        <a className={`${styles.Button} ${styles.onBack}`} type="button" onClick={onBack}>ย้อนกลับ</a>
        {applicantNumber < 6 ? (
          <a className={`${styles.Button} ${styles.onNext}`} type="button" onClick={handleSubmit}>ถัดไป</a>
        ) : (
          <a className={`${styles.Button} ${styles.onSubmit}`} type="button" onClick={handleSubmit}>{loading ? "Loading..." : "ส่งคำตอบ"}</a>
        )}
      </div>
    </div>
  )
}

const Form = () => {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec"
  const { email } = useContext(DataApp)

  const [applicants, setApplicants] = useState([])
  const [step, setStep] = useState(1)
  const [applicantNumber, setApplicantNumber] = useState(0)
  const [loading, setLoading] = useState(false)

  const NextStep = () => {
    if (applicantNumber < 6) {
      setStep(step + 1)
      setApplicantNumber(applicantNumber + 1)
    } else {
      handleSubmitAll()
    }
  };

  const BackStep = () => {
    setApplicantNumber(applicantNumber - 1)
    setStep(step - 1)
  };

  const onSave = (applicantNumber, data) => {
    const newApplicants = [...applicants]
    newApplicants[applicantNumber - 1] = data
    setApplicants(newApplicants)
    console.log("Sum data form", newApplicants)
  }

  const handleSubmitAll = async () => {
    setLoading(true);
    const formData = new FormData();

    applicants
      .filter(applicant => applicant !== undefined && applicant !== null)
      .forEach((applicant, index) => {
        for (const [key, value] of Object.entries(applicant)) {
          formData.append(`${key}_${index + 1}`, value);
        }
      });

    formData.append('email', email)

    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log("ส่งเรียบร้อยแล้ว");
        setLoading(false);
        setStep(1);
        setApplicants([]);
        alert("การสมัครเสร็จสมบูรณ์!");
        console.log("การสมัครเสร็จสมบูรณ์");
        location.reload();
      } else {
        alert("เกิดข้อผิดพลาดในการส่งข้อมูล!");
        console.log("เกิดข้อผิดพลาดในการส่งข้อมูล");
        setLoading(false);
      }
    } catch (err) {
      console.log("Error", err);
      setLoading(false);
    }
  };

  // const AggregateData = () => {

  // }
  return (
    <section id={styles.Form}>
      <div className={styles.Form}>
        <div className={styles.main_Form}>
          <div className={styles.head_title}>
            <div className={styles.background}></div>
            <h1 className={styles.title_shadow}>ลงทะเบียน</h1>
            <h1 className={styles.title}>ลงทะเบียน</h1>
          </div>
          <div className={styles.section}>
            <div className={styles.aggregate_Data}>
              <h1 className={styles.title}>ตรวจสอบคำตอบอีกครั้ง</h1>
              <div>
                <div className={styles.section_Data}>
                  <h1>ผู้ลงสมัครคนที่ 1</h1>
                  <div>
                    <h1>นาย พงศภัค บุญสนธิ ม.6/9 18ข</h1> 
                    
                  </div>
                  <p>เกิดวันที่ : 1/6/2024 เบอร์ : 0649638354</p>
                  <p>ชื่อในเกม : PONG OpenID : 03123132123123132123</p>
                </div>
                <div>
                  <h1>ผู้ลงสมัครคนที่ 2</h1>
                  <h1>นาย พงศภัค บุญสนธิ ม.6/9 18ข</h1>
                  <p>เกิดวันที่ : 1/6/2024 เบอร์ : 0649638354</p>
                  <p>ชื่อในเกม : PONG OpenID : 03123132123123132123</p>
                </div>
                <div>
                  <h1>ผู้ลงสมัครคนที่ 3</h1>
                  <h1>นาย พงศภัค บุญสนธิ ม.6/9 18ข</h1>
                  <p>เกิดวันที่ : 1/6/2024 เบอร์ : 0649638354</p>
                  <p>ชื่อในเกม : PONG</p>
                  <p>OpenID : 03123132123123132123</p>
                </div>
                <div>
                  <h1>ผู้ลงสมัครคนที่ 4</h1>
                  <h1>นาย พงศภัค บุญสนธิ ม.6/9 18ข</h1>
                  <p>เกิดวันที่ : 1/6/2024 เบอร์ : 0649638354</p>
                  <p>ชื่อในเกม : PONG OpenID : 03123132123123132123</p>
                </div>
                <div>
                  <h1>ผู้ลงสมัครคนที่ 5</h1>
                  <h1>นาย พงศภัค บุญสนธิ ม.6/9 18ข</h1>
                  <p>เกิดวันที่ : 1/6/2024 เบอร์ : 0649638354</p>
                  <p>ชื่อในเกม : PONG OpenID : 03123132123123132123</p>
                </div>
              </div>
              <div className={styles.Button_sention_Righ}>
                <a className={`${styles.Button} ${styles.onSubmit}`} type="button" onClick={handleSubmitAll}>{loading ? "Loading..." : "ส่งคำตอบ"}</a>
              </div>
            </div>
          </div>

          {/* {step === 1 && <Rule onNext={NextStep} />}
          {step > 1 && step <= 6 && (
            <ApplicantForm
              applicantNumber={applicantNumber}
              onNext={NextStep}
              onBack={BackStep}
              onSave={onSave}
              loading={loading}
              setLoading={setLoading}
              handleSubmitAll={handleSubmitAll}
            />
          )}
          {step === 7 && (
            <div>
              <div>
                {applicants.map((item, index) => (
                  <div id={index}>
                    <h1>{item.timestamp}</h1>
                    <h1>{item.prefix} {item.name} {item.surname}</h1>
                    <p>เบอร์ : {item.phone}</p>
                  </div>
                ))}
              </div>
              <div className={styles.Button_sention_NextBack}>
                <a className={`${styles.Button} ${styles.onSubmit}`} type="button" onClick={handleSubmitAll}>{loading ? "Loading..." : "ส่งคำตอบ"}</a>
              </div>
            </div>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default Form;