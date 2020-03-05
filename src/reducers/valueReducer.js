import {
  FETCH_VALUE_BY_ID_START,
  FETCH_VALUE_BY_ID_SUCCESS,
  FETCH_VALUE_BY_ID_FAILURE,
} from '../actions';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

export const valueReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_VALUE_BY_ID_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_VALUE_BY_ID_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      }
    case FETCH_VALUE_BY_ID_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};