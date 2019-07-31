import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_STANDINGS} from '../actions/actionTypes';
import {fetchStanding} from '../../fetch';

import {
  requestStandings,
  requestStandingsSuccess,
  requestStandingsFailure
} from '../actions/standings';

function* watchStandings() {
  yield takeEvery(FETCH_STANDINGS, worker);
}

function* worker() {
  try {
    yield put(requestStandings());
    const standings = yield call(fetchStanding);
    yield put(requestStandingsSuccess(standings))
  } catch(error) {
    yield put(requestStandingsFailure(error))
  }
}

export default watchStandings;