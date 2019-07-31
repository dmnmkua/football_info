import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_FIXTURES_LIVE} from '../actions/actionTypes';
import {fetchFixturesLive} from '../../fetch';

import {
  requestFixturesLive,
  requestFixturesLiveSuccess,
  requestFixturesLiveFailure
} from '../actions/fixturesLive';

function* watchFixturesLive() {
  yield takeEvery(FETCH_FIXTURES_LIVE, worker);
}

function* worker() {
  try {
    yield put(requestFixturesLive());
    const fixtures = yield call(fetchFixturesLive);
    yield put(requestFixturesLiveSuccess(fixtures))
  } catch(error) {
    yield put(requestFixturesLiveFailure(error))
  }
}

export default watchFixturesLive;