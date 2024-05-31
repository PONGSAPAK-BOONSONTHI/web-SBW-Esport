import React, { useState, useRef, useEffect, useContext } from 'react';
import styles from './Status.module.css';
import { DataApp } from '../../App';

const Status = () => {
  const { profile, email } = useContext(DataApp);
  const [data, setData] = useState([]);
  const formRef = useRef(null);
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec";
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      console.log("ไม่มีค่า email"); 
      return;
    }
    setLoading(true);

    const formData = new FormData(formRef.current);

    const prefix = formData.get('prefix')
    const name = formData.get('name');
    const game = formData.get('surname');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const position = formData.get('position')

    if (!prefix || !name || !game || !phone || !date || !position) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
      setLoading(false);
      return;
    }

    formData.append('email', email);

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
      });
      console.log("ส่งเรียบร้อยแล้ว");
      formRef.current.reset();
    } catch (err) {
      console.log('Error :', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(scriptUrl);
        const jsonData = await response.json();
        const fullData = jsonData.data;
        setData(fullData);
        console.log("fullData", fullData);
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
                <input type="text" name="name" required />
              </div>
              <div className={styles.input}>
                <label htmlFor='surname'>นามสกุล</label>
                <input type="text" name="surname" />
              </div>
              <div className={styles.input}>
                <label htmlFor='phone'>เบอร์</label>
                <input type="text" name="phone" />
              </div>
              <div className={styles.input}>
                <label htmlFor="date">กรุณาเลือกวันที่:</label>
                <input type="date" name="date" />
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
              <br />
              <div className={styles.input}>
                <input className={styles.Button} type="submit" value={loading ? "Loading..." : "ส่งคำตอบ"} disabled={loading} />
              </div>
            </form>

            <div className={styles.datame}>
              <h1 className={styles.title}>ข้อมูลลงสมัคร</h1>
              {CheckEmail ? (
                CheckEmailData.map((item, index) => (
                  <div key={index}>
                    <h1>{item.timestamp}</h1>
                    <h1>ชื่อทีม : {item.name}</h1>
                    <p>Game : {item.game}</p>
                    <p>เบอร์ : {item.phone}</p>
                  </div>
                ))
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
  );
};

export default Status;
