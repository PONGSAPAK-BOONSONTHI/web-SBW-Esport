import React, { useState, useEffect } from 'react';

const Formtest = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);
  const scriptUrl = 'your_script_url_here'; // เปลี่ยนเป็น URL ของสคริปต์ที่ใช้ส่งข้อมูล

  const handleSubmit = async (event) => {
    event.preventDefault(); // ป้องกันการโหลดหน้าใหม่เมื่อกด submit

    setLoading(true); // เริ่มการโหลด

    const formData = new FormData(formRef.current);

    const prefix = formData.get('prefix');
    const name = formData.get('name');
    const game = formData.get('surname');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const position = formData.get('position');

    // ตรวจสอบว่าข้อมูลทั้งหมดถูกกรอกครบหรือไม่
    if (!prefix || !name || !game || !phone || !date || !position) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน")
      setLoading(false)
      return;
    }

    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1;
    const year = formattedDate.getFullYear();
    const formattedDateString = `${day}/${month}/${year}`;

    formData.set('date', formattedDateString);
    
    formData.append('email', email);

    try {
      await fetch(scriptUrl, {
        method: 'POST',
        body: formData,
      })
      console.log(formData);
      console.log("ส่งเรียบร้อยแล้ว");
      formRef.current.reset();
    } catch (err) {
      console.log('Error :', err);
    } finally {
      setLoading(false); // สิ้นสุดการโหลด
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

  return (
    <form className={styles.main_sention_Forn} ref={formRef} onSubmit={handleSubmit} name="google-sheet">
      <h1 className={styles.title}>ผู้ลงสมัครคนที่ N</h1>
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
  )
}
export default Formtest;

