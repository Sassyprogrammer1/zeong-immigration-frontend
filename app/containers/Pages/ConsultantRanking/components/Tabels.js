import Button from '@material-ui/core/Button';
import React from 'react';
import '../styles.css';

const Tabels = (props) => {
  const { tableImg, UniData } = props;
  return (
    <div className='table-container'>
      <div className="title-container">

        <img src={tableImg} alt="hello" />

      </div>

      {UniData?.map((uni, index) => (
        <>
          <div className='table-row'>
            <button style={{ background: `${uni?.color}` }}>{uni?.name}</button>
            <p>  {index + 1}</p>

          </div>
          <div className='divider'></div>

        </>

      ))
      }

    </div >
  );
};

export default Tabels;
