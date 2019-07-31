import {GET_FIXTURES_REQUEST, GET_FIXTURES_SUCCESS, GET_FIXTURES_FAILURE} from './actionTypes';

export const requestFixtures = () => {
  return {
    type: GET_FIXTURES_REQUEST
  }
}

export const requestFixturesSuccess = data => {
  return {
    type: GET_FIXTURES_SUCCESS,
    payload: data.data.api.fixtures
  }
}

export const requestFixturesFailure = error => {
  return {
    type: GET_FIXTURES_FAILURE,
    payload: error.response.data.message
  }
}