import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgApi from 'enl-api/images/photos';
import CourseCard from '../../../components/CardPaper/CourseCard';
const styles = theme => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
});
function StudentCourse(props) {
  const { classes } = props;

  return (
    <div>

      <Grid
        container
        alignItems="flex-start"
        justifyContent="center"
        direction="row"
        spacing={2}
      >

        <Grid item md={12}>
          <CourseCard
            discount="10%"
            thumbnail={imgApi[24]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            rating={5}
            price={30}
            prevPrice={20}
            list
          />
        </Grid>
        <Grid item md={12}>
          <CourseCard
            discount="10%"
            thumbnail={imgApi[24]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            rating={5}
            price={30}
            prevPrice={20}
            list
          />
        </Grid>
        <Grid item md={12}>
          <CourseCard
            discount="10%"
            thumbnail={imgApi[24]}
            name="Lorem ipsum dolor sit amet"
            desc="Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante."
            rating={5}
            price={30}
            prevPrice={20}
            list
          />
        </Grid>

      </Grid>

    </div>
  );
}

StudentCourse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentCourse);
