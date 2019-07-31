import {GET_BOOKMAKERS_REQUEST, GET_BOOKMAKERS_SUCCESS, GET_BOOKMAKERS_FAILURE} from './actionTypes';

export const requestBookmakers = () => {
  return {
    type: GET_BOOKMAKERS_REQUEST
  }
}

export const requestBookmakersSuccess = data => {
  return {
    type: GET_BOOKMAKERS_SUCCESS,
    payload: data.data.api.bookmakers
  }
}

export const requestBookmakersFailure = error => {
  return {
    type: GET_BOOKMAKERS_FAILURE,
    payload: error.response.data.message
  }
}