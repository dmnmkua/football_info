import {GET_FIXTURES_REQUEST, GET_FIXTURES_SUCCESS, GET_FIXTURES_FAILURE} from '../actions/actionTypes';

const initialState = {
  fixtures: [],
  error: '',
  isLoading: false
}

export default function fixtures(state = initialState, action) {
  switch(action.type) {
    case GET_FIXTURES_REQUEST:
      return {
        ...state,
        error: '',
        fixtures: [],
        isLoading: true
      };
    case GET_FIXTURES_SUCCESS:
      return {
        ...state,
        fixtures: action.payload,
        isLoading: false
      }
    case GET_FIXTURES_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}