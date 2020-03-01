import { axiosWithAuth } from '../utils/axiosWithAuth';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const login = values = dispatch => {
//   console.log('login action firing');
//   dispatch({ type: LOGIN_START });
//   return (
//    axiosWithAuth()
//   .post('/login', values)
//   // will depend on endpoint ^^
//   .then(res => {
//     console.log('login.then', res);
//     localStorage.setItem('token', res.data.payload) 
//     //probably .data.payload -- it'll depend on backend endpoint ^^
//     dispatch({ type: LOGIN_SUCCESS, payload: res.data }); // res.data.???? need endpoint
//   })
//   .catch(err => {
//     console.log('loginAction error', err)
//     dispatch({ type: LOGIN_FAILURE });
//   })
//  );
// };
// login is going to break the code until I can get those endpoints. add friends server to test tomorrow if I get time.