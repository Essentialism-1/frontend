import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from '../actions';

const initialState = {};

export const signupReducer = (state = initialState, action) => {
  switch(action.type) {
    case SIGNUP_START:
      return{
        ...state,
      }
    case SIGNUP_SUCCESS:
      return{
        ...state,
      }
    case SIGNUP_FAILURE:
      return {
        ...state,
      }
  }
};