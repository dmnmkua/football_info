import {GET_BOOKMAKER_INFO_REQUEST, GET_BOOKMAKER_INFO_SUCCESS, GET_BOOKMAKER_INFO_FAILURE} from './actionTypes';

export const requestBookmakerInfo = () => {
  return {
    type: GET_BOOKMAKER_INFO_REQUEST
  }
}

export const requestBookmakerInfoSuccess = data => {
  return {
    type: GET_BOOKMAKER_INFO_SUCCESS,
    payload: data.data.api.odds
  }
}

export const requestBookmakerInfoFailure = error => {
  return {
    type: GET_BOOKMAKER_INFO_FAILURE,
    payload: error.response.data.message
  }
}