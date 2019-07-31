import {GET_TEAM_REQUEST, GET_TEAM_SUCCESS, GET_TEAM_FAILURE} from './actionTypes';

export const requestTeam = () => {
  return {
    type: GET_TEAM_REQUEST
  }
}

export const requestTeamSuccess = data => {
  return {
    type: GET_TEAM_SUCCESS,
    payload: data.data.api.teams[0]
  }
}

export const requestTeamFailure = error => {
  return {
    type: GET_TEAM_FAILURE,
    payload: error.response.data.message
  }
}