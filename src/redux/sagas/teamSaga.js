import {takeEvery, put, call} from 'redux-saga/effects';
import {FETCH_TEAM} from '../actions/actionTypes';
import {fetchTeam} from '../../fetch';

import {
  requestTeam,
  requestTeamSuccess,
  requestTeamFailure
} from '../actions/team';

function* watchTeam() {
  yield takeEvery(FETCH_TEAM, fetchTeamWorker);
}

function* fetchTeamWorker(action) {
  try {
    yield put(requestTeam());
    const team = yield call(() => fetchTeam(action.id));
    yield put(requestTeamSuccess(team))
  } catch(error) {
    yield put(requestTeamFailure(error))
  }
}

export default watchTeam;