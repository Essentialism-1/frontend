import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_VALUE_START = 'FETCH_VALUE_START';
export const FETCH_VALUE_SUCCESS = 'FETCH_VALUE_SUCCESS';
export const FETCH_VALUE_FAILURE = 'FETCH_VALUE_FAILURE';

export const FETCH_VALUE_BY_ID_START = 'FETCH_VALUE_BY_ID_START';
export const FETCH_VALUE_BY_ID_SUCCESS = 'FETCH_VALUE_BY_ID_SUCCESS';
export const FETCH_VALUE_BY_ID_FAILURE = 'FETCH_VALUE_BY_ID_FAILURE';

export const fetchValues = () => dispatch => {
  dispatch({ type: FETCH_VALUE_START });
  axiosWithAuth()
  .get('/api/values')
  // get endpoint for stored values ^^
  .then(res => {
    console.log('fetchValue.then action', res);
    dispatch({ type: FETCH_VALUE_SUCCESS, payload: res.data});
    // get endpoint for payload^^
  })
  .catch(err => console.log('fetchValue error!', err))
};

export const fetchValueById = id => dispatch => {
  dispatch({ type: FETCH_VALUE_BY_ID_START });
  axiosWithAuth()
  .get(`/api/user_values/:id`)
  // .get could possibly be incorrect ^^
  .then(res => {
    console.log('fvbid.get', res);
    dispatch({ type: FETCH_VALUE_BY_ID_SUCCESS, payload: res.data})
  })
  .catch(err => console.log('fvbid.get error', err))
};

// GET to /api/values
// returns a list of values
// POST to /api/user_values/:id
// **id must be the user id
// expects:
// {
//     "values": [
//         {
//             "values_id": 10,
//             "description": "some text here"
//         },
//         {
//             "values_id": 3,
//             "description": "some text here"
//         },
//         {
//             "values_id": 1,
//             "description": "some text here"
//         }
//     ]
// }
// GET to /api/user_values/:id
// returns list of values pertaining to a user, user must have created values first