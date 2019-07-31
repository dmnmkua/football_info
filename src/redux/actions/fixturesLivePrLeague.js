import {fetchFixturesLivePrLeague} from '../../fetch';
import {FETCH_FIXTURES_LIVE_PREMIER_LEAGUE} from './actionTypes';

export const getFixturesLivePrLeague = () => async dispatch => {
  const fixturesLivePrLeague = await fetchFixturesLivePrLeague()
    .then(({data}) => data.api.fixtures)
  dispatch({
    type: FETCH_FIXTURES_LIVE_PREMIER_LEAGUE,
    payload: fixturesLivePrLeague
  })
}