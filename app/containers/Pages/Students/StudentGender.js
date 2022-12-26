import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import FileUpload from '@material-ui/icons/CloudUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Save from '@material-ui/icons/Save';

import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  demo: {
    height: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 15,

  },
  cardWrapper: {
    background: theme.palette.primary.light,
    boxShadow: theme.shadows[1],
    width: '300px',
    height: '400px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '25px'

  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    marginTop: theme.spacing(3),
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  }
});

function StudentGender(props) {
  const { classes } = props;

  const [gender, setGender] = useState(null);
  return (
    <Fragment>
      <Paper className={classes.root} elevation={4}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
          spacing={2}

        >
          <Grid
            item
            md={6}

            className={classes.demo}
          >
            <div className={classes.cardWrapper}>
              <Button onClick={() => setGender('Boys')}
                variant={gender === 'Boys' ? 'contained' : 'outlined'} color="primary">
                                Boys

              </Button>
            </div>

          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <div className={classes.cardWrapper}>
              <Button onClick={() => setGender('Girls')}
                variant={gender === 'Girls' ? 'contained' : 'outlined'} color="primary">
                                Girls
              </Button>
            </div>

          </Grid>
          <Grid item md={12} sm={12} >
            <div className={classes.buttonContainer}>
              <Button disabled={gender === null} variant="contained" color="primary" className={classes.button}>
                                Continue

              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Fragment >
  );
}

StudentGender.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentGender);
