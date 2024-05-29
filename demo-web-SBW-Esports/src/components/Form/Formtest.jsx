import React, { useRef, useState } from 'react'
import styles from './Form.module.css'

const Rule = ({ onNext }) => {
  return (
    <div className={styles.Rule}>
      {/* Add content for Rule if needed */}
      <button onClick={onNext}>Next</button>
    </div>
  )
}

const ApplicantForm = ({ applicantNumber, onNext, onBack, onSave }) => {
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const data = Object.fromEntries(formData.entries())
    onSave(applicantNumber, data)
    onNext()
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
      <div className={styles.input}>
        <label htmlFor='name'>ผู้ลงสมัคร {applicantNumber}</label>
        <input type="text" name="name" required />
      </div>
      <div className={styles.input}>
        <label htmlFor='game'>Game</label>
        <input type="text" name="game" required />
      </div>
      <div className={styles.input}>
        <label htmlFor='phone'>เบอร์</label>
        <input type="text" name="phone" required />
      </div>
      <div className={styles.input}>
        <label htmlFor="date">กรุณาเลือกวันที่:</label>
        <input type="date" id="date" name="date" required />
      </div>
      <br />
      <div className={styles.input}>
        {applicantNumber > 1 && <button type="button" onClick={onBack}>Back</button>}
        <input className={styles.Button} type="submit" value={loading ? "Loading..." : applicantNumber < 5 ? "Next" : "Submit"} />
      </div>
    </form>
  )
}

const Formtest = ({ setLoading }) => {
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec"
  const [applicants, setApplicants] = useState(Array(5).fill({}))
  const [step, setStep] = useState(1)

  const NextStep = () => {
    setStep(step + 1)
  }

  const BackStep = () => {
    setStep(step - 1)
  }

  const onSave = (applicantNumber, data) => {
    const newApplicants = [...applicants]
    newApplicants[applicantNumber - 1] = data
    setApplicants(newApplicants)
    if (applicantNumber === 5) {
      handleSubmitAll(newApplicants)
    }
  }

  // const handleSubmitAll = (applicants) => {
  //   setLoading(true)
  //   const formData = new FormData()
  //   applicants.forEach((applicant, index) => {
  //     Object.keys(applicant).forEach(key => {
  //       formData.append(`applicant${index + 1}_${key}`, applicant[key])
  //     })
  //   })

  //   fetch(scriptUrl, {
  //     method: 'POST',
  //     body: formData,
  //   }).then(res => {
  //     console.log("ส่งเรียบร้อยแล้ว")
  //     setLoading(false)
  //     setStep(1)
  //     setApplicants(Array(5).fill({}))
  //     alert("การสมัครเสร็จสมบูรณ์!")
  //   }).catch(err => {
  //     console.log("Error", err)
  //     setLoading(false)
  //   })
  // }
  const handleSubmitAll = () => {
    if (typeof setLoading === 'function') {
      setLoading(true)
    }
    const formData = new FormData()
    applicants.forEach((applicant, index) => {
      Object.keys(applicant).forEach(key => {
        formData.append(`applicant${index + 1}_${key}`, applicant[key])
      })
    })

    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    }).then(res => {
      console.log("ส่งเรียบร้อยแล้ว")
      if (typeof setLoading === 'function') {
        setLoading(false)
      }
      setStep(1)
      setApplicants(Array(5).fill({}))
      alert("การสมัครเสร็จสมบูรณ์!")
    }).catch(err => {
      console.log("Error", err)
      if (typeof setLoading === 'function') {
        setLoading(false)
      }
    })
  }

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
          {step > 1 && step <= 6 && (
            <ApplicantForm
              applicantNumber={step - 1}
              onNext={NextStep}
              onBack={BackStep}
              onSave={onSave}
            />
          )}
        </div>
      </div>
    </section>
  )
}

export default Formtest
