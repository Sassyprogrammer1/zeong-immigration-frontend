import React from 'react';
import './styles.css';

const Employment = () => {
  const images = [
    { name: 'Agriculture', imgUlr: '/assets/employment-icons/argriculture.PNG' },
    { name: 'Art', imgUlr: '/assets/employment-icons/art.PNG' },
    { name: 'Athlete', imgUlr: '/assets/employment-icons/athlete.PNG' },
    { name: 'BizMan', imgUlr: '/assets/employment-icons/bizMan.JPG' },
    { name: 'Bluecollar', imgUlr: '/assets/employment-icons/bluecollar.PNG' },
    { name: 'Engineer', imgUlr: '/assets/employment-icons/engineer.PNG' },
    { name: 'GreeSolder', imgUlr: '/assets/employment-icons/greeSolder.PNG' },
    { name: 'HighTech', imgUlr: '/assets/employment-icons/highTech.PNG' },
    { name: 'Law', imgUlr: '/assets/employment-icons/law.PNG' },
    { name: 'Medical', imgUlr: '/assets/employment-icons/medical.PNG' },
    { name: 'Nurse', imgUlr: '/assets/employment-icons/nurse.PNG' },

  ];

  return (

    <div className='emplyemnt-container'>
      <div className='employment-title'>
        <h1>EMPLOYMENT</h1>

      </div>
      <p>Occupations that will inspire you for life</p>

      <div className='icon-container'>
        {
          images.map((item) => (
            <div className='card'>
              <img src={item?.imgUlr} alt={item.name} />
              <h4>{item.name}</h4>
            </div>
          ))
        }

      </div>

    </div>
  );
};

export default Employment;
