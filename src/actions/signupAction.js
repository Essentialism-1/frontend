import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signup = user => dispatch => {
  console.log('signup action firing');
  dispatch({ type: SIGNUP_START });
  return (
    axiosWithAuth()
    .post('/auth/register', user)
    .then(res => {
      console.log('signup action.then', res);
      // localStorage.setItem('token', res.data.token);
      // not sure I need the above in signup, only login^^
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Signup action error', err);
      dispatch({ type: SIGNUP_FAILURE });
    })
  );
};
