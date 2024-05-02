import React, { useState } from 'react';
import './Webform.css'

function Webform() {
  const [formData, setFormData] = useState({
    ชื่อสกุล: '',
    ชื่อเล่น: '',
    เบอร์โทร: '',
    อีเมล: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxvrYFU1t1TuIoIT0XCEumbbJIX8Cw-RBgfO-a253dJruKILnOvREEUtuwNI44H3iv2/exec';
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.ok) {
        alert('บันทึกข้อมูลเรียบร้อยแล้ว..');
        setFormData({
          ชื่อสกุล: '',
          ชื่อเล่น: '',
          เบอร์โทร: '',
          อีเมล: ''
        });
      } else {
        throw new Error('เกิดข้อผิดพลาดในการบันทึกข้อมูล');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <section>
      <div className="container">
        <div>
          <h3 className="text-center">test form SBW Esport</h3>
        </div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="form-group">
            <label htmlFor="ชื่อ-สกุล">ชื่อ สกุล</label>
            <input type="text" className="form-control" placeholder="ชื่อ สกุล" name="ชื่อสกุล" value={formData.ชื่อสกุล} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="ชื่อเล่น">ชื่อเล่น</label>
            <input type="text" className="form-control" placeholder="ชื่อเล่น" name="ชื่อเล่น" value={formData.ชื่อเล่น} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="เบอร์โทร">เบอร์โทร</label>
            <input type="text" className="form-control" placeholder="เบอร์โทร" name="เบอร์โทร" value={formData.เบอร์โทร} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="อีเมล">อีเมล</label>
            <input type="email" className="form-control" placeholder="อีเมล" name="อีเมล" value={formData.อีเมล} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-primary">บันทึก</button>
        </form>
      </div>
    </section>
  );
}

export default Webform;

