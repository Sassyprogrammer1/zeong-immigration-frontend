import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import imgData from 'enl-api/images/imgData';
import 'enl-styles/vendors/slick-carousel/slick-carousel.css';
import 'enl-styles/vendors/slick-carousel/slick.css';
import 'enl-styles/vendors/slick-carousel/slick-theme.css';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
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

  const history = useHistory();
  const settings = {
    dots: true,
    infinite: true,
    centerMode: false,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-out'
  };

  const computerScience = [
    'UBC',
    'Toronto',
    'Waterloo',
    'McGill',
    'Alberta',
    'Montréal',
    'Simon Fraser',
    'Ottawa',
  ];

  const canadaRanking = [
    { name: 'Alberta', color: ' #339933' },
    { name: 'Western', color: '#33FF66' },
    { name: 'Queen', color: ' #99FF99 ' },
    { name: 'York', color: ' #FFCC66 ' },
    { name: 'McGill', color: ' #CC9900 ' },
    { name: 'Ottawa', color: ' #CC9966' },
    { name: 'UBC', color: ' #CC9999' },
    { name: 'Toronto', color: ' #CC6600' },

  ];

  const facultyEducation = [
    'UBC',
    'Toronto',
    'Alberta',
    'Western',
    'Queen',
    'York',
    'McGill',
    'Ottawa',
  ];

  return (
    <>
      <Button variant="contained" color="primary" onClick={() => history.goBack()}>
        back

      </Button>
      <div className="container">
        <Slider {...settings}>
          <Tabels tableImg="/assets/university-ranking-icons/canada-ranking.PNG" UniData={canadaRanking} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-pychology.PNG" UniData={canadaRanking} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-business.PNG" UniData={canadaRanking} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-education.PNG" UniData={facultyEducation} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-engineer.PNG" UniData={canadaRanking} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-nursing.PNG" UniData={canadaRanking} />

          <Tabels tableImg="/assets/university-ranking-icons/faculty-science.PNG" UniData={computerScience} />

        </Slider>
      </div>

    </>
  );
};
Ranking.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Ranking);
