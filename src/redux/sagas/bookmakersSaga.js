import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_BOOKMAKERS} from '../actions/actionTypes';
import {fetchBookmakers} from '../../fetch';

import {
  requestBookmakers,
  requestBookmakersSuccess,
  requestBookmakersFailure
} from '../actions/bookmakers';

function* watchBookmakers() {
  yield takeEvery(FETCH_BOOKMAKERS, worker);
}

function* worker() {
  try {
    yield put(requestBookmakers());
    const bookmakers = yield call(fetchBookmakers);
    yield put(requestBookmakersSuccess(bookmakers))
  } catch(error) {
    yield put(requestBookmakersFailure(error))
  }
}

export default watchBookmakers;