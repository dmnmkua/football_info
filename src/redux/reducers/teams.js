import {GET_TEAMS_REQUEST, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE} from '../actions/actionTypes';

const initialState = {
  teams: [],
  error: '',
  isLoading: false
}

export default function teams(state = initialState, action) {
  switch(action.type) {
    case GET_TEAMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: '',
        teams: []
      };
    case GET_TEAMS_SUCCESS:
      return {
        ...state,
        teams: action.payload,
        isLoading: false
      }
    case GET_TEAMS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}