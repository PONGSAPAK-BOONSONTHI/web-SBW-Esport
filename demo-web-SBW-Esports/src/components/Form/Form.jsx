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
          <br />
          <br />
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
            <img src="https://scontent.fbkk7-2.fna.fbcdn.net/v/t39.30808-6/440102397_288556614307993_878123387578223784_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Eocyp_XNeNQQ7kNvgEi5of-&_nc_ht=scontent.fbkk7-2.fna&oh=00_AYASKc35C39ih8JW5m2-R1HJXob_j6oxAREDtcrkBNuzAg&oe=66689C87"></img>
          </div>
        </span>
      </div>

      <div className={styles.Button_sention_Right}>
        <a className={`${styles.Button} ${styles.onNext}`} onClick={onNext}>ถัดไป</a>
      </div>
    </div>
  )
}

const ApplicantForm = ({ applicantNumber, onNext, onBack, onSave, formData, prefix, setPrefix, date, setDate }) => {
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

    const data = { ...Object.fromEntries(formData.entries()), prefix, date }
    onSave(applicantNumber, data)
    console.log(data)
    if (applicantNumber < 6) {
      onNext();
      formRef.current.reset()
    } else {
      onNext();
    }
    console.log("applicantNumber", applicantNumber);
  }

  return (
    <div className={styles.section}>
      <form className={styles.main_sention_Form} ref={formRef} onSubmit={handleSubmit} name="google-sheet">
        {applicantNumber < 6 ? (
          <h1 className={styles.title}>ผู้ลงสมัครคนที่ {applicantNumber}</h1>
        ) : (
          <div>
            <h1 className={styles.title}>ผู้ลงสมัครคนที่ {applicantNumber} (ตัวสำรอง)</h1>
            <p className={styles.title_exhort}>ถ้าไม่มีให้ใส่ - และ ให้เลือกวันเกิดเป็นวันที่ลงสมัคร</p>
          </div>
        )}
        <div className={styles.form_Sention}>
          <div className={styles.select}>
            <label htmlFor='prefix'>คำนำหน้า</label>
            <select id='prefix' name="prefix"
              value={prefix === '' ? '' : formData.prefix}
              onChange={(e) => setPrefix(e.target.value)}
            >
              <option value="">-</option>
              <option value="เด็กชาย">เด็กชาย</option>
              <option value="เด็กหญิง">เด็กหญิง</option>
              <option value="นาย">นาย</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>

          <div className={styles.input}>
            <label htmlFor='name'>ชื่อ</label>
            <input type="text" id='name' name="name" defaultValue={formData.name || ''} required />
          </div>

          <div className={styles.input}>
            <label htmlFor='surname'>นามสกุล</label>
            <input type="text" id="surname" name="surname" defaultValue={formData.surname || ''} required />
          </div>
        </div>

        <div className={styles.form_Sention_2item}>

          <div className={styles.form_Sention}>
            <div className={styles.input}>
              <label for="date">วันเกิด</label>
              <input type="date" id="date" name="date"
                defaultValue={date === '' || formData.date}
                onChange={(e) => setDate(e.target.value)} required
              />
            </div>

            <div className={styles.input}>
              <label htmlFor='phone'>เบอร์</label>
              <input type="text" id='phone' name="phone" defaultValue={formData.phone || ''} required />
            </div>
          </div>

          <div className={styles.form_Sention}>
            <div className={styles.input}>
              <label htmlFor='room'>ชั้นเเละห้อง</label>
              <input type="text" id='roon' name="room" defaultValue={formData.room || ''} required />
            </div>

            <div className={styles.input}>
              <label htmlFor='number_capter'>เลขที่เเละตอน</label>
              <input type="text" id='number_capter' name="number_capter" defaultValue={formData.number_capter || ''} required />
            </div>
          </div>

        </div>

        <div className={styles.form_Sention}>
          <div className={styles.input}>
            <label htmlFor="name_game">ชื่อในเกม</label>
            <input type="text" id='name_game' name="name_game" defaultValue={formData.name_game || ''} required />
          </div>

          <div className={styles.input}>
            <label htmlFor="openID">OpenID</label>
            <input type="text" id='openID' name="openID" defaultValue={formData.openID || ''} required />
          </div>
        </div>

        <div className={styles.category_select_position}>
          <label for="date">ตำแหน่งในเกม</label>
          <div className={styles.position}>
            <input type="radio" name="position" id="dsl" value="DSL (ออฟเลน, เลนดาร์ค)"
              defaultChecked={formData.position === "DSL (ออฟเลน, เลนดาร์ค)"} required />
            <label htmlFor="dsl">DSL (ออฟเลน, เลนดาร์ค)</label>
          </div>
          <div className={styles.position}>
            <input type="radio" name="position" id="jug" value="JUG (ป่า, ฟาร์ม)"
              defaultChecked={formData.position === "JUG (ป่า, ฟาร์ม)"} required />
            <label htmlFor="jug">JUG (ป่า, ฟาร์ม)</label>
          </div>
          <div className={styles.position}>
            <input type="radio" name="position" id="mid" value="MID (เลนกลาง)"
              defaultChecked={formData.position === "MID (เลนกลาง)"} required />
            <label htmlFor="mid">MID (เลนกลาง)</label>
          </div>
          <div className={styles.position}>
            <input type="radio" name="position" id="adl" value="ADL (แครี่, เลนมังกร)"
              defaultChecked={formData.position === "ADL (แครี่, เลนมังกร)"} required />
            <label htmlFor="adl">ADL (แครี่, เลนมังกร)</label>
          </div>
          <div className={styles.position}>
            <input type="radio" name="position" id="sup" value="SUP (ซัพพอร์ต, โรมมิ่ง)"
              defaultChecked={formData.position === "SUP (ซัพพอร์ต, โรมมิ่ง)"} required />
            <label htmlFor="sup">SUP (ซัพพอร์ต, โรมมิ่ง)</label>
          </div>
        </div>


      </form>

      <div className={styles.Button_sention_NextBack}>
        <a className={`${styles.Button} ${styles.onBack}`} type="button" onClick={onBack}>ย้อนกลับ</a>
        <a className={`${styles.Button} ${styles.onNext}`} type="button" onClick={handleSubmit}>ถัดไป</a>
      </div>
    </div>
  )
}

const AggregateData = ({ applicants, onBack, handleSubmitAll, loading }) => {

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${month}/${day}/${year}`;
  };

  return (
    <div className={styles.section}>
      <div className={styles.aggregate_Data}>
        <h1 className={styles.title}>ตรวจสอบคำตอบอีกครั้ง</h1>

        <div className={styles.section_Data}>
          {applicants.map((item, index) => (
            <div className={styles.Data}>
              {index < 5 ? (
                <h1 className={styles.title_Data}>ผู้ลงสมัครคนที่ {index + 1}</h1>
              ) : (
                <h1 className={styles.title_Data}>ผู้ลงสมัครคนที่ {index + 1} (ตัวสำรอง)</h1>
              )}
              <h1 className={styles.name_Data}>{item.prefix} {item.name} {item.surname} {item.room} {item.number_capter}</h1>
              <p>เกิดวันที่ : {formatDate(item.date)} เบอร์ : {item.phone}</p>
              <p>ชื่อในเกม : {item.name_game} OpenID : {item.openID}</p>
              <p>ตำแหน่งในเกม : {item.position}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.Button_sention_NextBack}>
        <a className={`${styles.Button} ${styles.onBack}`} type="button" onClick={onBack}>ย้อนกลับ</a>
        <a className={`${styles.Button} ${styles.onSubmit}`} type="button" onClick={handleSubmitAll}>{loading ? "กำลังบันทึก..." : "ส่งคำตอบ"}</a>
      </div>
    </div>
  )
}

const Form = () => {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec"
  const { email } = useContext(DataApp)

  const [applicants, setApplicants] = useState(Array(6).fill({}))
  const [step, setStep] = useState(1)
  const [applicantNumber, setApplicantNumber] = useState(0)
  const [loading, setLoading] = useState(false)

  const [prefix, setPrefix] = useState('')
  const [date, setDate] = useState('');

  const NextStep = () => {
    if (applicantNumber < 7) {
      setStep(step + 1)
      setApplicantNumber(applicantNumber + 1)
    } else {
      handleSubmitAll()
    }
    window.scrollTo(0, 0)
  };

  const BackStep = () => {
    setApplicantNumber(applicantNumber - 1)
    setStep(step - 1)
    window.scrollTo(0, 0)
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

  return (
    <section id={styles.Form}>
      <div className={styles.Form}>
        <div className={styles.main_Form}>
          <div className={styles.head_title}>
            <div className={styles.background}></div>
            <h1 className={styles.title_shadow}>ลงทะเบียน</h1>
            <h1 className={styles.title}>ลงทะเบียน</h1>
          </div>

          {step === 1 && <Rule onNext={NextStep} />}
          {step > 1 && step <= 7 && (
            <ApplicantForm
              applicantNumber={applicantNumber}
              onNext={NextStep}
              onBack={BackStep}
              onSave={onSave}
              formData={applicants[applicantNumber - 1] || {}}
              prefix={prefix}
              setPrefix={setPrefix}
              date={date}
              setDate={setDate}
            />
          )}
          {step === 8 &&
            <AggregateData
              applicants={applicants}
              onBack={BackStep}
              handleSubmitAll={handleSubmitAll}
              loading={loading}
            />}
        </div>
      </div>
    </section >
  );
};

export default Form;