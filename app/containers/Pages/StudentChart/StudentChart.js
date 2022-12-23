import React from 'react';
import PropTypes from 'prop-types';
import brand from 'enl-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from 'enl-components';
import { Box } from '@material-ui/core';
import styles from './student-chart-jss';
import {
  BarSimple,
  BarStacked,
  PieSimple
} from '../../Charts/demos';

const StudentChart = (props) => {
  const title = brand.name + ' - Personal Dashboard';
  const description = brand.desc;
  const { classes } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>

      <Grid container spacing={3}
        direction="column" display="flex"
        justifyContent='center'
        alignItems='center'
        mt={4}

      >
        <Grid item xs={6} className={classes.root}>
          <BarSimple />
        </Grid>
        <Divider className={classes.divider} />

        <Grid item xs={6} className={classes.root}>
          <PieSimple />
        </Grid>
        <Divider className={classes.divider} />
        <Grid item xs={6} className={classes.root}>
          <BarStacked />
        </Grid>
      </Grid>

    </div >
  );
};

StudentChart.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StudentChart);
