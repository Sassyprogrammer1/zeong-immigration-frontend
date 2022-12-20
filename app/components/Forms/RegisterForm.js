import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import brand from 'enl-api/dummy/brand';
import logo from 'enl-images/logo.svg';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ArrowForward from '@material-ui/icons/ArrowForward';
import Icon from '@material-ui/core/Icon';
import CircularProgress from '@material-ui/core/CircularProgress';
import { injectIntl, FormattedMessage } from 'react-intl';
import { closeMsgAction } from 'enl-redux/actions/authActions';
import { CheckboxRedux, TextFieldRedux } from './ReduxFormMUI';
import MessagesForm from './MessagesForm';
import messages from './messages';
import styles from './user-jss';

// validation functions
const required = value => (value === null ? 'Required' : undefined);
const email = value => (
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
);

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.password) {
    return 'Passwords dont match';
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterForm(props) {
  const {
    classes,
    handleSubmit,
    pristine,
    submitting,
    intl,
    messagesAuth,
    closeMsg,
    loading
  } = props;

  const history = useHistory();

  return (
    <Paper className={classes.sideWrap}>
      <Hidden mdUp>
        <div className={classes.headLogo}>
          <NavLink to="/" className={classes.brand}>
            <img src={logo} alt={brand.name} />
            {brand.name}
          </NavLink>
        </div>
      </Hidden>
      <div className={classes.topBar}>
        <Typography variant="h4" className={classes.title}>
          <FormattedMessage {...messages.register} />
        </Typography>
        <Button size="small" className={classes.buttonLink} component={LinkBtn} to="/login">
          <Icon className={classNames(classes.icon, classes.signArrow)}>arrow_forward</Icon>
          <FormattedMessage {...messages.toAccount} />
        </Button>
      </div>
      {
        messagesAuth !== null || ''
          ? (
            <MessagesForm
              variant="error"
              className={classes.msgUser}
              message={messagesAuth}
              onClose={closeMsg}
            />
          )
          : ''
      }
      <section>
        <form onSubmit={handleSubmit}>

          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="email"
                component={TextFieldRedux}
                placeholder={intl.formatMessage(messages.loginFieldEmail)}
                label={intl.formatMessage(messages.loginFieldEmail)}
                required
                validate={[required, email]}
                className={classes.field}
              />
            </FormControl>
          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="password"
                component={TextFieldRedux}
                type="password"
                label={intl.formatMessage(messages.loginFieldPassword)}
                required
                validate={[required, passwordsMatch]}
                className={classes.field}
              />
            </FormControl>

          </div>
          <div>
            <FormControl className={classes.formControl}>
              <Field
                name="passwordConfirm"
                component={TextFieldRedux}
                type="password"
                label={intl.formatMessage(messages.loginFieldRetypePassword)}
                required
                validate={[required, passwordsMatch]}
                className={classes.field}
              />
            </FormControl>
          </div>

          <div>
            <FormControlLabel control={<Field name="checkbox" required component={CheckboxRedux} className={classes.agree} />} label={intl.formatMessage(messages.aggree)} />
            <a href="/terms-conditions" target="_blank" className={classes.link}>
              <FormattedMessage {...messages.terms} />
            </a>
          </div>
          <div className={classes.btnArea}>
            <Button variant="contained" fullWidth disabled={loading} color="primary" type="submit" >
              {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
              <FormattedMessage {...messages.loginButtonContinue} />
              {!loading && <ArrowForward className={classNames(classes.rightIcon, classes.iconSmall, classes.signArrow)} disabled={submitting || pristine} />}
            </Button>
          </div>
        </form>
      </section>

    </Paper>
  );
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired,
  messagesAuth: PropTypes.string,
  closeMsg: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

RegisterForm.defaultProps = {
  messagesAuth: null
};

const RegisterFormReduxed = reduxForm({
  form: 'registerForm',
  enableReinitialize: true,
})(RegisterForm);

const mapDispatchToProps = {
  closeMsg: closeMsgAction
};

const mapStateToProps = state => ({
  messagesAuth: state.authReducer.message,
  loading: state.authReducer.loading
});

const RegisterFormMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterFormReduxed);

export default withStyles(styles)(injectIntl(RegisterFormMapped));
