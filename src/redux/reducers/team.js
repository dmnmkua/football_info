import {GET_TEAM_REQUEST, GET_TEAM_SUCCESS, GET_TEAM_FAILURE} from '../actions/actionTypes';

const initialState = {
  team: [],
  error: '',
  isLoading: false
}

export default function team(state = initialState, action) {
  switch(action.type) {
    case GET_TEAM_REQUEST:
      return {
        ...state,
        team: [],
        error: '',
        isLoading: true
      };
    case GET_TEAM_SUCCESS:
      return {
        ...state,
        team: action.payload,
        isLoading: false
      }
    case GET_TEAM_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}