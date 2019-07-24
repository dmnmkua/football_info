import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container, Grid, CircularProgress} from '@material-ui/core';
import TeamCard from './TeamCard';

import {getTeams} from '../../redux/actions/teams';

import './Teams.scss';

const Teams = (props) => {
  useEffect(props.onFetchTeams, [])
  return(
    <div className="teams">
      <Container>
        <h1 className="teams__title">
          Teams
        </h1>
        <Grid container spacing={3} className="teams__list" alignItems="center" justify="center">
          {props.teams.length ? props.teams.map(team => <TeamCard team={team} key={team.team_id} />) : <CircularProgress className="teams__progress" />}
        </Grid>
      </Container>
    </div>
  )
}

export default connect(
  state => ({
    teams: state.teams
  }),
  dispatch => ({
    onFetchTeams: () => {
      dispatch(getTeams());
    }
  })
)(Teams);