import {fetchFixturesLeague} from '../../fetch';

export const getFixturesLeague = () => async dispatch => {
  const fixturesLeague = await fetchFixturesLeague()
    .then(({data}) => data.api.fixtures)
  dispatch({
    type: 'FETCH_FIXTURES_LEAGUE',
    payload: fixturesLeague
  })
}