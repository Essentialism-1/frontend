import {
  FETCH_VALUE_BY_ID_START,
  FETCH_VALUE_BY_ID_SUCCESS,
  FETCH_VALUE_BY_ID_FAILURE,
  SET_INTERMEDIATE_VALUES,
  SET_USER_VALUES,
  SET_PROJECTS,
  FETCH_PROJECTS
} from '../actions';

const initialState = {
  values: [],
  projects: [],
}

export const dataReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_VALUE_BY_ID_SUCCESS:
      return {
        ...state,
        values: action.payload,
      }
    case SET_INTERMEDIATE_VALUES:
      return{
        ...state,
        values: action.payload,
      }
    case SET_USER_VALUES:
      return {
        ...state,
        values: action.payload,
      }
    case SET_PROJECTS:
      return{
        ...state,
        projects: [...state.projects, action.payload],
      }
    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload,
      }
    default:
      return state
  }
}