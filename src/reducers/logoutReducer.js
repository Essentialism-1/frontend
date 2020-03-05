import {
  LOGOUT_START,
  LOGOUT_SUCCESS,
  // LOGOUT_FAILURE,
} from '../actions';

const initialState = {
  token: null,
  user_id: null,
  loggedIn: false,
}

export const logoutReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGOUT_START:
      return {
        ...state,
        token: null,
        user_id: null,
      }
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      }
    // case LOGOUT_FAILURE:
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
}