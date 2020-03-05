import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_VALUE_START = 'FETCH_VALUE_START';
export const FETCH_VALUE_SUCCESS = 'FETCH_VALUE_SUCCESS';
export const FETCH_VALUE_FAILURE = 'FETCH_VALUE_FAILURE';

export const FETCH_VALUE_BY_ID_START = 'FETCH_VALUE_BY_ID_START';
export const FETCH_VALUE_BY_ID_SUCCESS = 'FETCH_VALUE_BY_ID_SUCCESS';
export const FETCH_VALUE_BY_ID_FAILURE = 'FETCH_VALUE_BY_ID_FAILURE';

export const SET_INTERMEDIATE_VALUES = 'SET_INTERMEDIATE_VALUES';
export const SET_USER_VALUES = 'SET_USER_VALUES';
export const SET_PROJECTS = 'SET_PROJECTS';
export const FETCH_PROJECTS = 'FETCH_PROJECTS';

// export const fetchValues = () => dispatch => {
//   dispatch({ type: FETCH_VALUE_START });
//   axiosWithAuth()
//   .get('/user_values/')
//   .then(res => {
//     console.log('fetchValue.then action', res);
//     dispatch({ type: FETCH_VALUE_SUCCESS, payload: res.data});
//     // get endpoint for payload^^
//   })
//   .catch(err => console.log('fetchValue error!', err))
// };

export const fetchValueById = () => dispatch => {
  const id = localStorage.getItem('userId');
  // console.log('inside fbvid', id)
  // console.log( `/user_values/${id}` )
  axiosWithAuth()
  .get(`/user_values/${id}`)
  .then(res => {
    console.log('fvbid.get', res.data);
    dispatch({ type: SET_USER_VALUES, payload: res.data})
  })
  .catch(err => console.log('fvbid.get error', err))
};

export const intermediateValues = values => dispatch => {
  console.log('values im', values)

  dispatch({ type: SET_INTERMEDIATE_VALUES, payload: values });
}

export const postUserValues = (values, history) => dispatch => {
  const id = localStorage.getItem('userId');
  console.log('puv, values', values)

  axiosWithAuth()
  .post(`/user_values/${id}`, values)
  .then(res => {
    dispatch({ type: SET_USER_VALUES, payload: res.data })
    history.push('/dashboard');
  })
  .catch(err => console.log('post user values error', err))
};

export const postUserProject = project => dispatch => {
  axiosWithAuth()
  .post('/projects', project)
  .then(res => {
    dispatch({ type: SET_PROJECTS, payload: res.data })
  })
  .catch(err => console.log('post user project error', err))
}

export const getUserProjects = () => dispatch => {
  
  const id = localStorage.getItem('userId');
  axiosWithAuth()
  .get(`/projects/user/${id}`)
  .then(res => {
    dispatch({ type: FETCH_PROJECTS, payload: res.data })
  })
  .catch(err => console.log('get user projects error', err))
}