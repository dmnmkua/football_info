import {GET_STANDINGS_REQUEST, GET_STANDINGS_SUCCESS, GET_STANDINGS_FAILURE} from '../actions/actionTypes';

const initialState = {
  standings: [],
  error: '',
  isLoading: false
}

export default function standings(state = initialState, action) {
  switch(action.type) {
    case GET_STANDINGS_REQUEST:
      return {
        ...state,
        error: '',
        standings: [],
        isLoading: true
      };
    case GET_STANDINGS_SUCCESS:
      return {
        ...state,
        standings: action.payload,
        isLoading: false
      }
    case GET_STANDINGS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}