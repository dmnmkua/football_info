import {GET_FIXTURES_LIVE_REQUEST, GET_FIXTURES_LIVE_SUCCESS, GET_FIXTURES_LIVE_FAILURE} from './actionTypes';

export const requestFixturesLive = () => {
  return {
    type: GET_FIXTURES_LIVE_REQUEST
  }
}

export const requestFixturesLiveSuccess = data => {
  return {
    type: GET_FIXTURES_LIVE_SUCCESS,
    payload: data.data.api.fixtures
  }
}

export const requestFixturesLiveFailure = error => {
  return {
    type: GET_FIXTURES_LIVE_FAILURE,
    payload: error.response.data.message
  }
}