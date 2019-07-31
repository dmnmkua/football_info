import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_TEAMS} from '../actions/actionTypes';
import {fetchTeams} from '../../fetch';

import {
  requestTeams,
  requestTeamsSuccess,
  requestTeamsFailure
} from '../actions/teams';

function* watchTeams() {
  yield takeEvery(FETCH_TEAMS, fetchTeamsWorker);
}

function* fetchTeamsWorker() {
  try {
    yield put(requestTeams());
    const teams = yield call(fetchTeams);
    yield put(requestTeamsSuccess(teams))
  } catch(error) {
    yield put(requestTeamsFailure(error))
  }
}

export default watchTeams;