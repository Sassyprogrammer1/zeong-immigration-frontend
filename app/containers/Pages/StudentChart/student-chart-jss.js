const styles = theme => ({
  root: {
    display: 'flex',
    background: theme.palette.primary.light,
    boxShadow: theme.shadows[1],
    borderRadius: 15,

  },
  rootGeneral: {
    padding: theme.spacing(3)
  },
  divider: {
    margin: `${theme.spacing(1.5)}px 0`,
    background: 'none',
    display: 'block',
  },
  sliderWrap: {
    position: 'relative',
    display: 'block',
    boxShadow: theme.shadows[1],
    width: '100%',
    borderRadius: theme.rounded.medium,
    overflow: 'hidden'
  },
  noPadding: {
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    [theme.breakpoints.up('sm')]: {
      padding: '0 !important'
    }
  },

});

export default styles;
