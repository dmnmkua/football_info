import {fetchFixturesLivePrLeague} from '../../fetch';

export const getFixturesLivePrLeague = () => async dispatch => {
  const fixturesLivePrLeague = await fetchFixturesLivePrLeague()
    .then(({data}) => data.api.fixtures)
  dispatch({
    type: 'FETCH_FIXTURES_LIVE_PREMIER_LEAGUE',
    payload: fixturesLivePrLeague
  })
}