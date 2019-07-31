import {GET_TEAMS_REQUEST, GET_TEAMS_SUCCESS, GET_TEAMS_FAILURE} from './actionTypes';

export const requestTeams = () => {
  return {
    type: GET_TEAMS_REQUEST
  }
}

export const requestTeamsSuccess = data => {
  return {
    type: GET_TEAMS_SUCCESS,
    payload: data.data.api.teams
  }
}

export const requestTeamsFailure = error => {
  return {
    type: GET_TEAMS_FAILURE,
    payload: error.response.data.message
  }
}