import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import { RegisterForm, SelectLanguage } from 'enl-components';
import styles from 'enl-components/Forms/user-jss';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import messages from './messages';
import { registerWithEmail } from '../../../redux/actions/authActions';

function Register(props) {
  const { classes } = props;
  const title = brand.name + ' - Register';
  const description = brand.desc;
  const [valueForm, setValueForm] = useState(null);

  const submitForm = (values) => setValueForm(values);
  const dispatch = useDispatch();

  useEffect(() => {
    if (valueForm) {
      const { email, password } = valueForm;
      const data = dispatch(registerWithEmail(email, password));
    }
  }, [valueForm]);

  return (
    <div className={classes.sideFormWrap}>
      <RegisterForm onSubmit={(values) => submitForm(values)} />
    </div>

  );
}

Register.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Register);
