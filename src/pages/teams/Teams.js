import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container, Grid, CircularProgress} from '@material-ui/core';
import TeamCard from './TeamCard';

import {FETCH_TEAMS} from '../../redux/actions/actionTypes';

import './Teams.scss';

const Teams = (props) => {
  useEffect(props.onFetchTeams, []);

  return(
    <div className="teams">
      <Container>
        <h1 className="teams__title">
          Teams
        </h1>
        <Grid container spacing={3} className="teams__list" alignItems="center" justify="center">
          {
            props.isLoading && <CircularProgress className="teams__progress" />
          }
          {
            !!props.error ? props.error : props.teams.map(team => <TeamCard team={team} key={team.team_id} />)
          }
        </Grid>
      </Container>
    </div>
  )
}

export default connect(
  state => {
    const {teams, error, isLoading} = state.teams;

    return {
      teams,
      error,
      isLoading
    }
  },
  dispatch => ({
    onFetchTeams: () => {
      dispatch({
        type: FETCH_TEAMS
      });
    }
  })
)(Teams);