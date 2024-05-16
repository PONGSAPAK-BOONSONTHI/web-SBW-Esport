import React, { useState, useRef, useEffect, useContext } from 'react';
import styles from './Status.module.css'
import { DataApp } from '../../App'

const Status = () => {
  const { profile, email } = useContext(DataApp);
  const [data, setData] = useState([])

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

  // API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(scriptUrl);
        const jsonData = await response.json();
        const fullData = jsonData.data
        setData(fullData);
        console.log("fullData", fullData)
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูล :', error);
      }
    };

    fetchData();
  }, []);

  const CheckEmailData = data.filter(item => item.email === email);
  const CheckEmail = CheckEmailData.length > 0;
  console.log("DataMe : ", CheckEmailData);

  return (
    <section id={styles.Status}>
      <div className={styles.Status}>
        <h1 className={styles.title}>ตรวจสอบสถานะ</h1>
        {profile ? (
            <div className={styles.form}>
              <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
                <div className={styles.input}>
                  <label htmlFor='name'>ผู้ลงสมัคร</label>
                  <input type="text" name="name" />
                </div>
                <div className={styles.input}>
                  <label htmlFor='game'>Game</label>
                  <input type="text" name="game" />
                </div>
                <div className={styles.input}>
                  <label htmlFor='phone'>เบอร์</label>
                  <input type="text" name="phone" />
                </div>
                <br />
                <div className={styles.input}>
                  <input className={styles.Button} type="submit" value={loading ? "Loading..." : "ส่งคำตอบ"} />
                </div>
              </form>
              <br />
              <div className={styles.datame}>
                <h1 className={styles.title}>ข้อมูลลงสมัคร</h1>
                {CheckEmail ? (
                  <div>
                    {CheckEmailData.map((item, index) => (
                      <div key={index}>
                        <h1>{item.timestamp}</h1>
                        <h1>ชื่อทีม : {item.name}</h1>
                        <p>Game : {item.game}</p>
                        <p>เบอร์ : {item.phone}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={styles.loading}><h1>โหลดข้อมูล</h1></div>
                )}
              </div>
            </div>
        ) : (
          <div className={styles.form}>
            <h1 className={styles.title}>ไม่มีข้อมูล</h1>
          </div>
        )}
      </div>
    </section>
  )
}
export default Status