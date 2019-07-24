import {fetchFixturesLive} from '../../fetch';

export const getFixturesLive = () => async dispatch => {
  const fixturesLive = await fetchFixturesLive()
    .then(({data}) => data.api.fixtures)
  dispatch({
    type: 'FETCH_FIXTURES_LIVE',
    payload: fixturesLive
  })
}