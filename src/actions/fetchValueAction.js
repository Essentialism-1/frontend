import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_VALUE_START = 'FETCH_VALUE_START';
export const FETCH_VALUE_SUCCESS = 'FETCH_VALUE_SUCCESS';
export const FETCH_VALUE_FAILURE = 'FETCH_VALUE_FAILURE';

// export const fetchValue = data = dispatch => {
//   dispatch({ type: FETCH_VALUE_START });
//   axiosWithAuth()
//   .get(`/values${id}`)
//   // get endpoint for stored values ^^
//   .then(res => {
//     console.log('fetchValue.then action', res);
//     dispatch({ type: FETCH_VALUE_SUCCESS, payload: res.data});
//     // get endpoint for payload^^
//   })
//   .catch(err => console.log('fetchValue error!', err))
// };
// fetchValue is going to break the code until I can get those endpoints. add friends server to test tomorrow if I get time.