import React from 'react';
import {
  Paper, Grid, Box, Button
} from '@material-ui/core';

import PropTypes from 'prop-types';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './gender.css';
import IconButton from '@material-ui/core/IconButton';
import { useHistory } from 'react-router';

const Gender = (props) => {
  const history = useHistory();
  const { classes, } = props;
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '50px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
          '& > :not(style)': {
            m: 1,
            width: 300,
            height: 350,
            borderRadius: '50px',

          },
        }}
      >
        <Paper variant="outlined" sx={{ bgcolor: 'primary.main' }} />

        <Paper variant="outlined" square />

      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}><button onClick={() => history.push('/app')} className='button'>Continue </button>
      </Box>
    </>

  );
};

export default Gender;

Gender.propTypes = {
  classes: PropTypes.object.isRequired,
};
