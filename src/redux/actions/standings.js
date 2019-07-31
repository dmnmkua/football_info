import {GET_STANDINGS_REQUEST, GET_STANDINGS_SUCCESS, GET_STANDINGS_FAILURE} from './actionTypes';

export const requestStandings = () => {
  return {
    type: GET_STANDINGS_REQUEST
  }
}

export const requestStandingsSuccess = data => {
  return {
    type: GET_STANDINGS_SUCCESS,
    payload: data.data.api.standings[0]
  }
}

export const requestStandingsFailure = error => {
  return {
    type: GET_STANDINGS_FAILURE,
    payload: error.response.data.message
  }
}