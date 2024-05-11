import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.keyCode) {
        case 37:
          move('prev');
          break;
        case 39:
          move('next');
          break;
        default:
          return;
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const move = (direction) => {
    if (direction === 'prev') {
      setSelected((prev) => (prev === 0 ? slider.length - 1 : prev - 1));
    } else {
      setSelected((prev) => (prev === slider.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section>
      {/* <div>
        <div><img src={} alt="" /></div>
        <div>

        </div>
      </div> */}
    </section>
  );
};

export default Slider;


