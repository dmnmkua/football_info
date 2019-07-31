import {GET_BOOKMAKERS_REQUEST, GET_BOOKMAKERS_SUCCESS, GET_BOOKMAKERS_FAILURE} from '../actions/actionTypes';

const initialState = {
  bookmakers: [],
  error: '',
  isLoading: false
}

export default function bookmakers(state = initialState, action) {
  switch(action.type) {
    case GET_BOOKMAKERS_REQUEST:
      return {
        ...state,
        error: '',
        bookmakers: [],
        isLoading: true
      };
    case GET_BOOKMAKERS_SUCCESS:
      return {
        ...state,
        bookmakers: action.payload,
        isLoading: false
      }
    case GET_BOOKMAKERS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}