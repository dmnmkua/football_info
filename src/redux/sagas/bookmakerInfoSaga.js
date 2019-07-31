import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_BOOKMAKER_INFO} from '../actions/actionTypes';
import {fetchBookmakerInfo} from '../../fetch';

import {
  requestBookmakerInfo,
  requestBookmakerInfoSuccess,
  requestBookmakerInfoFailure
} from '../actions/bookmakerInfo';

function* watchBookmakerInfo() {
  yield takeEvery(FETCH_BOOKMAKER_INFO, worker);
}

function* worker(action) {
  try {
    yield put(requestBookmakerInfo());
    const bookmakerInfo = yield call(() => fetchBookmakerInfo(action.id));
    yield put(requestBookmakerInfoSuccess(bookmakerInfo))
  } catch(error) {
    yield put(requestBookmakerInfoFailure(error))
  }
}

export default watchBookmakerInfo;