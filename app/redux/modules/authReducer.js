import produce from 'immer';
import {
  LOGIN_REQUEST,
  LOGIN_WITH_EMAIL_REQUEST,
  REGISTER_WITH_EMAIL_REQUEST,
  LOGOUT_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_WITH_EMAIL_SUCCESS,
  CREATE_USER_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_WITH_EMAIL_FAILURE,
  REGISTER_WITH_EMAIL_FAILURE,

  LOGOUT_FAILURE,
  LOGOUT_SUCCESS,
  PASSWORD_FORGET_FAILURE,
  PASSWORD_FORGET_SUCCESS,
  SYNC_USER,
  HIDE_MSG,
  REGISTER_WITH_EMAIL_SUCCESS,
  GET_ROLE
} from '../constants/authConstants';

export const AuthState = {
  loading: false,
  loggedIn: null,
  user: null,
  uid: null,
  message: null,
  role: null
};

const authReducer = (state = AuthState, action = {}) => produce(state, draft => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_WITH_EMAIL_REQUEST:
    case REGISTER_WITH_EMAIL_REQUEST:
    case LOGOUT_REQUEST:
      draft.loading = true;
      draft.message = null;
      break;

    case GET_ROLE:
    case LOGIN_SUCCESS:
    case LOGIN_WITH_EMAIL_SUCCESS:
    case REGISTER_WITH_EMAIL_SUCCESS:
    case CREATE_USER_SUCCESS:
      draft.loading = false;
      draft.loggedIn = true;
      draft.message = action.credential;
      draft.role = action.role;
      break;

    case LOGIN_FAILURE:
    case LOGIN_WITH_EMAIL_FAILURE:
    case REGISTER_WITH_EMAIL_FAILURE:
    case PASSWORD_FORGET_FAILURE:
    case LOGOUT_FAILURE:
      draft.loading = false;
      draft.message = action.error;
      break;

    case PASSWORD_FORGET_SUCCESS:
      draft.message = 'LINK.PASSWORD_RESET.SENT';
      break;

    case LOGOUT_SUCCESS:
      draft.loading = false;
      draft.loggedIn = false;
      break;

    case SYNC_USER:
      draft.loggedIn = action.user != null;
      draft.user = action.user;
      draft.loading = false;
      break;

    case HIDE_MSG:
      draft.message = null;
      break;

    default:
      break;
  }
});

export default authReducer;
