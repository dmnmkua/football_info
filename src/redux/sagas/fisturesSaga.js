import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_FIXTURES} from '../actions/actionTypes';
import {fetchFixturesLeague} from '../../fetch';

import {
  requestFixtures,
  requestFixturesSuccess,
  requestFixturesFailure
} from '../actions/fixtures';

function* watchFixtures() {
  yield takeEvery(FETCH_FIXTURES, fetchFixturesWorker);
}

function* fetchFixturesWorker() {
  try {
    yield put(requestFixtures());
    const fixtures = yield call(fetchFixturesLeague);
    yield put(requestFixturesSuccess(fixtures))
  } catch(error) {
    yield put(requestFixturesFailure(error))
  }
}

export default watchFixtures;