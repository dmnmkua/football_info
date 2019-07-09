import {fetchTeam} from '../../fetch';

export const getTeam = id => async dispatch => {
  const team = await fetchTeam(id)
    .then(({data}) => data.api.teams[0])
  dispatch({
    type: 'FETCH_TEAM',
    payload: team
  })
}