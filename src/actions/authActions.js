// import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = (credentials, history) => dispatch => {
  console.log('login action firing');
  dispatch({ type: LOGIN_START });
  return (
    axios
    .post('https://essentialism-pg-be.herokuapp.com/api/auth/login', credentials)
    .then(res => {
      console.log('login.then', res);
      localStorage.setItem('token', res.data.token) 
      localStorage.setItem('userId', res.data.user.id)
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token }); // res.data.???? need endpoint
      history.push('/select-values');
    })
    .catch(err => {
      console.log('loginAction error', err)
      dispatch({ type: LOGIN_FAILURE, payload: err });
    })
  );
};

export const signup = (newUser, history) => dispatch => {
  console.log('signup action firing');
  dispatch({ type: SIGNUP_START });
  return (
    axios
    .post('https://essentialism-pg-be.herokuapp.com/api/auth/register', newUser)
    .then(res => {
      console.log('signup action.then', res.data);
      localStorage.setItem('token', res.data.token);
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.token });
      history.push('select-values');
    })
    .catch(err => {
      console.log('Signup action error', err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    })
  );
};
