import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_FIXTURES_LIVE_PREMIER_LEAGUE} from '../actions/actionTypes';
import {fetchFixturesLivePrLeague} from '../../fetch';

import {
  requestFixturesLive,
  requestFixturesLiveSuccess,
  requestFixturesLiveFailure
} from '../actions/fixturesLive';

function* watchFixturesLivePrLeague() {
  yield takeEvery(FETCH_FIXTURES_LIVE_PREMIER_LEAGUE, worker);
}

function* worker() {
  try {
    yield put(requestFixturesLive());
    const fixtures = yield call(fetchFixturesLivePrLeague);
    yield put(requestFixturesLiveSuccess(fixtures))
  } catch(error) {
    yield put(requestFixturesLiveFailure(error))
  }
}

export default watchFixturesLivePrLeague;