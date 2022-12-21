import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'enl-api/dummy/brand';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { NavLink, useLocation } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { LoginForm, SelectLanguage } from 'enl-components';
import logo from 'enl-images/logo.svg';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from 'enl-components/Forms/user-jss';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import messages from './messages';
import { loginWithEmail } from '../../../redux/actions/authActions';

function Login(props) {
  const { classes } = props;
  const title = brand.name + ' - Login';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);
  const dispatch = useDispatch();
  const location = useLocation();

  const { loggedIn } = useSelector((state) => state.authReducer);

  useEffect(() => {
    if (valueForm) {
      const { email, password } = valueForm;
      dispatch(loginWithEmail(email, password));
    }
  }, [valueForm]);

  return (

    <div className={classes.sideFormWrap}>
      <LoginForm onSubmit={(values) => submitForm(values)} />
    </div>

  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
