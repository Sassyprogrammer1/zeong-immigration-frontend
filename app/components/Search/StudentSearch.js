import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import ViewList from '@material-ui/icons/ViewList';
import GridOn from '@material-ui/icons/GridOn';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import Button from '@material-ui/core/Button';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from './messages';
import Cart from '../Product/Cart';
import styles from './search-jss';

function StudentSearch(props) {
  const {
    classes,
    dataCart,
    removeItem,
    checkout,
    totalItems,
    totalPrice,
    search,
    keyword,
    dataProduct,
    handleSwitchView,
    listView,
    intl
  } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getTotalResult = dataArray => {
    let totalResult = 0;
    for (let i = 0; i < dataArray.length; i += 1) {
      if (dataArray[i].name === undefined) {
        return false;
      }
      if ((dataArray[i].name).toLowerCase().indexOf(keyword) !== -1) {
        totalResult += 1;
      }
    }
    return totalResult;
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar className={classes.searchBar}>

          <div className={classes.flex}>
            <div className={classes.wrapper}>
              <div className={classes.search}>
                <SearchIcon />
              </div>
              <input className={classes.input} placeholder="Search University" onChange={(event) => search(event)} />
            </div>
          </div>
          <Typography variant="caption" className={classes.result}>
            {getTotalResult(dataProduct)}
            &nbsp;
            <FormattedMessage {...messages.result} />
          </Typography>

          <div className={classes.fillterButton}>
            <Button color="primary" className={classes.button}>
              In DEMAOND
            </Button>
            <Button color="primary" className={classes.button}>
              TOP TIER
            </Button>
            <Button color="primary" className={classes.button}>
              Science
            </Button>
            <Button color="primary" className={classes.button}>
              Computer
            </Button>

          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}

StudentSearch.propTypes = {
  classes: PropTypes.object.isRequired,
  dataCart: PropTypes.array.isRequired,
  removeItem: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  keyword: PropTypes.string.isRequired,
  dataProduct: PropTypes.array.isRequired,
  handleSwitchView: PropTypes.func.isRequired,
  listView: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired
};

export default withStyles(styles)(injectIntl(StudentSearch));
