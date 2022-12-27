import {
  call, fork, put, take, takeEvery, all
} from 'redux-saga/effects';
import axios from 'axios';
import { firebaseAuth, firebaseDb } from '../../firebase';
import history from '../../utils/history';
import {
  LOGIN_REQUEST,
  LOGIN_WITH_EMAIL_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_SUCCESS,
  PASSWORD_FORGET_REQUEST,
} from '../constants/authConstants';
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  loginWithEmailSuccess,
  loginWithEmailFailure,
  syncUser,
  registerWithEmailSuccess,
  registerWithEmailFailure,
  createUserSuccess,
  createUserFailure,
  passwordForgetSuccess,
  passwordForgetFailure,
  getRole,
} from '../actions/authActions';
import api from '../../api/baseUrl/BaseUrl';

function getUrlVars() {
  const vars = {};
  const parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) { // eslint-disable-line
    vars[key] = value;
  });
  return vars;
}

function* loginSaga(provider) {
  try {
    const res = yield call(firebaseAuth.signInWithPopup, provider.payload.authProvider);
    if (res.statusCode === 200) {
      yield put(loginWithEmailSuccess(res));
      yield history.push('/app');
    }

    // if (getUrlVars().next) {
    //   // Redirect to next route
    //   yield history.push(getUrlVars().next);
    // } else {
    //   // Redirect to dashboard if no next parameter
    //   yield history.push('/app');
    // }
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* loginWithEmailSaga(payload) {
  try {
    const res = yield api.post('/consultant/login',
      { email: payload.email, password: payload.password });

    if (res.data.statusCode === 200 && res.data.body.role[0].Value === 'studentConsultant') {
      console.log(res.data.body.role[0].Value, 'Sssss');
      yield put(loginWithEmailSuccess(res.data.body.message));
      yield put(getRole(res.data.body.role[0].Value));
      localStorage.setItem('token', res?.data?.body?.token);
      yield history.push('/app');
    } else {
      const response = {
        message: res.data.message,
        status: res.data.status,
      };
      console.log('data', res.data.body.message);
      yield put(loginWithEmailFailure(res.data.body.message));
    }
    // if (res.data.statusCode === 400) {

    // }
  } catch (error) {
    yield put(loginWithEmailFailure(error));
  }
}

function* registerWithEmailSaga(payload) {
  try {
    const res = yield api.post('/consultant/register',
      { email: payload.email, password: payload.password });
    console.log('data', res.data.message);
    console.log('resdata', res);
    if (res.data.statusCode === 200) {
      yield put(registerWithEmailSuccess(res.data.body.message));
      yield history.push('/login');
      // Redirect to dashboard
    } else if (res.data.statusCode === 400 && res.data.body.message === 'email or password is invalid, password should be greater than 6 characters') {
      yield put(registerWithEmailFailure(res.data.body.message));
    } else if (res.data.statusCode === 400 && res.data.body.message === 'User account already exists') {
      yield put(registerWithEmailFailure(res.data.body.message));
    }
    // else if (res.data.statusCode === 400) {
    //   console.log('res', res);
    //
    //   // Redirect to dashboard
    //   // yield history.push('/register');
    // } else if (res.statusCode === 400) {
    //   yield put(registerWithEmailFailure(res.data.body.message));
    // }
  } catch (error) {
    yield put(registerWithEmailFailure(error));
  }
}

function* logoutSaga() {
  try {
    const data = yield call(firebaseAuth.signOut);
    yield put(logoutSuccess(data));
    // Redirect to home
    yield history.replace('/');
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

function* syncUserSaga() {
  const channel = yield call(firebaseAuth.channel);
  while (true) {
    const { user } = yield take(channel);
    if (user) {
      yield put(syncUser(user));
    } else {
      yield put(syncUser(null));
    }
  }
}

function* createUserSaga({ credential }) {
  try {
    yield call(firebaseDb.create, 'user', {
      email: credential.email,
      displayName: credential.displayName,
      creationTime: credential.metadata.creationTime,
    });
    yield put(createUserSuccess(credential));
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

function* passwordForgetSaga({ email }) {
  try {
    yield call(firebaseAuth.sendPasswordResetEmail, email);
    yield put(passwordForgetSuccess());
  } catch (error) {
    yield put(passwordForgetFailure(error));
  }
}

//= ====================================
//  WATCHERS
//-------------------------------------

function* loginRootSaga() {
  yield fork(syncUserSaga);
  yield all([
    takeEvery(LOGIN_REQUEST, loginSaga),
    takeEvery(LOGIN_WITH_EMAIL_REQUEST, loginWithEmailSaga),
    takeEvery(REGISTER_WITH_EMAIL_REQUEST, registerWithEmailSaga),
    takeEvery(REGISTER_WITH_EMAIL_SUCCESS, createUserSaga),
    takeEvery(LOGOUT_REQUEST, logoutSaga),
    takeEvery(PASSWORD_FORGET_REQUEST, passwordForgetSaga)
  ]);
}

const authSagas = [
  fork(loginRootSaga),
];

export default authSagas;
