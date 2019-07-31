import {GET_FIXTURES_LIVE_REQUEST, GET_FIXTURES_LIVE_SUCCESS, GET_FIXTURES_LIVE_FAILURE} from '../actions/actionTypes';

const initialState = {
  fixturesLive: [],
  error: '',
  isLoading: false
}

export default function fixturesLive(state = initialState, action) {
  switch(action.type) {
    case GET_FIXTURES_LIVE_REQUEST:
      return {
        ...state,
        error: '',
        fixturesLive: [],
        isLoading: true
      };
    case GET_FIXTURES_LIVE_SUCCESS:
      return {
        ...state,
        fixturesLive: action.payload,
        isLoading: false
      }
    case GET_FIXTURES_LIVE_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}