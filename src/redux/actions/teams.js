import {fetchTeams} from '../../fetch';

export const getTeams = () => async dispatch => {
  const teams = await fetchTeams()
    .then(({data}) => data.api.teams)
  dispatch({
    type: 'FETCH_TEAMS',
    payload: teams
  })
}