import { axiosWithAuth } from '../utils/axiosWithAuth';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// export const signup = credentials = dispatch => {
//   console.log('signup action firing');
//   dispatch({ type: SIGNUP_START });
//   return (
//     axiosWithAuth()
//     .post('/login', credentials)
//     // will change with endpoint ^^
//     .then(res => {
//       console.log('signup action.then' ,res);
//       localStorage.setItem('token', res.data.payload);
//       // above res.data.payload will likely change with endpoint ^^
//       dispatch({ type: SIGNUP_SUCCESS });
//     })
//     .catch(err => console.log('Signup action error', err))
//   );
// };