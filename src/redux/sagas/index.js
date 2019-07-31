import {all} from 'redux-saga/effects';
import watchTeams from './teamsSaga';
import watchTeam from './teamSaga';
import watchFixtures from './fisturesSaga';
import watchFixturesLive from './fisturesLiveSaga';
import watchFixturesLivePrLeague from './fisturesLiveSagaPrLeague';
import watchStandings from './standingsSaga';
import watchBookmakerInfo from './bookmakerInfoSaga';
import watchBookmakers from './bookmakersSaga'

export default function* rootSaga() {
  yield all([
    watchTeams(),
    watchTeam(),
    watchFixtures(),
    watchFixturesLive(),
    watchFixturesLivePrLeague(),
    watchStandings(),
    watchBookmakerInfo(),
    watchBookmakers()
  ])
}