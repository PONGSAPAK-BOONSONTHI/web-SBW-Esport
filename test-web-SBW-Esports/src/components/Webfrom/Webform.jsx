import React, { useState, useRef, useEffect, useContext } from 'react';
import { DataGoogleId } from '../LoginLogout/LoginLogout';
import './Webform.css'

const Webform = () => {
  const [data, setData] = useState([]);
  const { GoogleId, setGoogleId } = useContext(DataGoogleId)
  console.log(GoogleId)

  // form
  const formRef = useRef(null)
  const scriptUrl = "https://script.google.com/macros/s/AKfycbzZuLMEqy4hwvS_ZvZRZ7i3wLrWIVbaMn9ijrCTlv2SmhkdE_U9jD6OEbaF6565juLcQg/exec"
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!GoogleId) {
      console.log("GoogleId ไม่มีค่า");
      return;
    }

    setLoading(true);
  
    const formData = new FormData(formRef.current);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    if (!name || !email || !phone) {
      console.log("กรุณากรอกข้อมูลให้ครบถ้วน");
      setLoading(false);
      return;
    }
  
    formData.append('GoogleId', GoogleId);
    
    fetch(scriptUrl, {
      method: 'POST',
      body: formData,
    }).then(res => {
      console.log("ส่งเรียบร้อยแล้ว");
      setLoading(false);
      formRef.current.reset();
    }).catch(err => console.log('Error:', err));
  }
  
  // API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(scriptUrl);
        const jsonData = await response.json();
        const fullData = jsonData.data
        setData(fullData);
        console.log(fullData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const CheckGoogleid =  data.filter(data => data.GoogleId === GoogleId)
  console.log(CheckGoogleid)

  return (
    <section className='Webform'>
      <div className="container">
        <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
          <div className="input-style">
            <label htmlFor='name'>
              Name
            </label>
            <input type="text" id="name" name="name" placeholder='Your Name *' />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Email</label>
            <input type="email" name="email" placeholder='Your Email *' />
          </div>
          <div className="input-style">
            <label htmlFor='name'>Phone No</label>
            <input type="text" name="phone" placeholder='Your Phone *' />
          </div>
          <br />
          <div className="input-style">
            <input type="submit" value={loading ? "Loading..." : "SEND MESSAGE"} />
          </div>
        </form>
      </div>
      <br />
      <div>
        <h1>Google Sheets FullData</h1>
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item.timestamp} {item.name} {item.email} {item.phone}</li>
          ))}
        </ul>
      </div>
      <div>
        <h1>Data me</h1>
          {CheckGoogleid.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
      </div>
    </section>
  );
}

export default Webform;

