const styles = theme => ({
  stdContainer: {
    display: 'flex',
    background: theme.palette.primary.light,
    boxShadow: theme.shadows[1],
    borderRadius: 30,
    maxWidth: 600,
    maxHeight: 600,
    justifyContent: 'center',
    alignItem: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      overflowX: 'scroll',
      scrollBehavior: 'smooth',
    }
  },

  divider: {

    background: 'none',
    display: 'block',
  },
  chart: {
    marginTop: theme.spacing(9),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100

  },
  button: {
    margin: theme.spacing(1),
  },

});

export default styles;
