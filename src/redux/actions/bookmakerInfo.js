import {fetchBookmakerInfo} from '../../fetch';

export const getBookmakerInfo = id => async dispatch => {
  const bookmakerInfo = await fetchBookmakerInfo(id)
    .then(({data}) => data.api.odds)
  dispatch({
    type: 'FETCH_BOOKMAKER_INFO',
    payload: bookmakerInfo
  })
}