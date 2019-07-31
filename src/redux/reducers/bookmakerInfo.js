import {GET_BOOKMAKER_INFO_REQUEST, GET_BOOKMAKER_INFO_SUCCESS, GET_BOOKMAKER_INFO_FAILURE} from '../actions/actionTypes';

const initialState = {
  bookmakerInfo: null,
  error: '',
  isLoading: false
}

export default function team(state = initialState, action) {
  switch(action.type) {
    case GET_BOOKMAKER_INFO_REQUEST:
      return {
        ...state,
        bookmakerInfo: null,
        error: '',
        isLoading: true
      };
    case GET_BOOKMAKER_INFO_SUCCESS:
      return {
        ...state,
        bookmakerInfo: action.payload,
        isLoading: false
      }
    case GET_BOOKMAKER_INFO_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}