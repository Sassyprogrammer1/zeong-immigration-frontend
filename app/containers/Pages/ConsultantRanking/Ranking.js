import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import imgData from 'enl-api/images/imgData';
import 'enl-styles/vendors/slick-carousel/slick-carousel.css';
import 'enl-styles/vendors/slick-carousel/slick.css';
import 'enl-styles/vendors/slick-carousel/slick-theme.css';
import Tabels from './components/Tabels';
// import "./styles.css"

const styles = ({
  item: {
    textAlign: 'center',
    justifyContent: 'center',
    '& img': {
      margin: '10px auto'
    }
  }
});
const Ranking = (props) => {
  const { classes } = props;
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-out'
  };
  return (
    <div className="container">
      <Slider {...settings}>
        <Tabels tableTitle="Top University" />
        <Tabels tableTitle="Low Grad University" />
        <Tabels tableTitle="Faculty" />
        <Tabels tableTitle="Bussiness" />
        <Tabels tableTitle="Bussiness" />

      </Slider>
    </div>
  );
};
Ranking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ranking);
