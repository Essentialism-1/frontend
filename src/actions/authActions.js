import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
  console.log('login action firing');
  dispatch({ type: LOGIN_START });
  return (
    axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      console.log('login.then', res);
      localStorage.setItem('token', res.data.token) 
      //probably .data.payload -- it'll depend on backend endpoint ^^
      dispatch({ type: LOGIN_SUCCESS, payload: res.data }); // res.data.???? need endpoint
    })
    .catch(err => {
      console.log('loginAction error', err)
      dispatch({ type: LOGIN_FAILURE, payload: err });
    })
  );
};

export const signup = newUser => dispatch => {
  console.log('signup action firing');
  dispatch({ type: SIGNUP_START });
  return (
    axiosWithAuth()
    .post('/auth/register', newUser)
    .then(res => {
      console.log('signup action.then', res);
      // localStorage.setItem('token', res.data.token);
      // not sure I need the above in signup, only login^^
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Signup action error', err);
      dispatch({ type: SIGNUP_FAILURE, payload: err });
    })
  );
};
