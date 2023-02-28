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
    { name: 'UBC', color: ' #339933' },
    { name: 'Toronto', color: '#33FF66' },
    { name: 'Waterloo', color: ' #99FF99 ' },
    { name: 'McGill', color: ' #FFCC66 ' },
    { name: 'Alberta', color: ' #CC9900 ' },
    { name: 'Montréal', color: ' #CC9966' },
    { name: 'Simon Fraser', color: ' #CC9999' },
    { name: 'Ottawa', color: ' #CC6600' },
  ];

  const NursingFuculty = [
    { name: 'UBC', color: ' #339933' },
    { name: 'Toronto', color: '#33FF66' },
    { name: 'Alberta', color: ' #99FF99 ' },
    { name: 'McGill', color: ' #FFCC66 ' },
    { name: 'McMaster', color: ' #CC9900 ' },
    { name: 'Dalhousie', color: ' #CC9966' },
    { name: 'Queens', color: ' #CC9999' },
    { name: 'Calgary', color: ' #CC6600' },
  ];
  const bussinessFuculty = [
    { name: 'UBC', color: ' #339933' },
    { name: 'Toronto', color: '#33FF66' },

    { name: 'McGill', color: ' #99FF99 ' },

    { name: "Queen's", color: ' #FFCC66' },

    { name: 'Western', color: '  #CC9900' },

    { name: 'Alberta', color: ' #CC9966' },
    { name: 'York', color: ' #CC9999' },
    { name: 'Calgary', color: ' #CC6600' },

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
    { name: 'UBC', color: ' #339933' },
    { name: 'Toronto', color: '#33FF66' },
    { name: 'Alberta', color: ' #99FF99 ' },
    { name: 'Western', color: ' #FFCC66 ' },
    { name: 'Queens', color: ' #CC9900 ' },
    { name: 'York', color: ' #CC9966' },
    { name: 'McGill', color: ' #CC9999' },
    { name: 'Ottawa', color: ' #CC6600' },
  ];

  const engineeringFuculty = [
    { name: 'UBC', color: ' #339933' },
    { name: 'Toronto', color: '#33FF66' },
    { name: 'Waterloo', color: ' #99FF99 ' },
    { name: 'McGill', color: ' #FFCC66 ' },
    { name: 'Alberta', color: ' #CC9900 ' },
    { name: 'McMaster', color: ' #CC9966' },
    { name: 'Queens', color: ' #CC9999' },
    { name: 'Montréal', color: ' #CC6600' },
  ];
  const pychologyFuculty = [
    { name: 'UBC', color: ' #339933' },
    { name: 'McGill', color: '#33FF66' },
    { name: 'Toronto', color: ' #99FF99 ' },
    { name: 'Alberta', color: ' #FFCC66 ' },
    { name: 'Western', color: ' #CC9900 ' },
    { name: 'York', color: ' #CC9966' },
    { name: 'Calgary', color: ' #CC9999' },
    { name: 'Dalhousie', color: ' #CC6600' },
  ];

  const fucultyNursing = [
    { name: 'UBC', color: ' #339933' },
    { name: 'Toronto', color: '#33FF66' },
    { name: 'Alberta', color: ' #99FF99 ' },
    { name: 'McGill', color: ' #FFCC66 ' },
    { name: 'McMaster', color: ' #CC9900 ' },
    { name: 'Dalhousie', color: ' #CC9966' },
    { name: 'Queens', color: ' #CC9999' },
    { name: 'Calgary', color: ' #CC6600' },

  ];
  return (
    <>
      <Button variant="contained" color="primary" onClick={() => history.goBack()}>
        back

      </Button>
      <div className="container">
        <Slider {...settings}>
          <Tabels tableImg="/assets/university-ranking-icons/canada-ranking.PNG" UniData={canadaRanking} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-pychology.PNG" UniData={pychologyFuculty} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-business.PNG" UniData={bussinessFuculty} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-education.PNG" UniData={facultyEducation} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-engineer.PNG" UniData={engineeringFuculty} />
          <Tabels tableImg="/assets/university-ranking-icons/faculty-nursing.PNG" UniData={fucultyNursing} />
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
