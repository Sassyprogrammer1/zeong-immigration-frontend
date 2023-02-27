import React from 'react';
import Button from '@material-ui/core/Button';

import './styles.css';
import { useHistory } from 'react-router';

const Location = () => {

  const history = useHistory()

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => history.goBack()}>
        back

      </Button>
      <div className='location-container' style={{ backgroundImage: 'url("/assets/geolocation-icons/canadaBackGround.PNG")' }}>

        <div className='mobile-container'>
          <img src="/assets/geolocation-icons/canada.PNG" alt="" />
        </div>
        <div className='image-container' >
          <div className='image-card' >
            <img src="/assets/geolocation-icons/west.PNG" alt="" />
          </div>
          <div className='image-card'>

          </div>
          <div className='image-card'>
            <img src="/assets/geolocation-icons/east.PNG" alt="" />

          </div>
          <div className='image-card'>
            <img src="/assets/geolocation-icons/toronto.PNG" alt="" />

          </div>
          <div className='image-card'>
            <img src="/assets/geolocation-icons/central.PNG" alt="" />

          </div>
          <div className='image-card'>
            <img src="/assets/geolocation-icons/vancouver.PNG" alt="" />

          </div>

        </div>
      </div>
    </>
  )
};

export default Location;
