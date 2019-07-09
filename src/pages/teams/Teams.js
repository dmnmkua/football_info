import React from 'react';
import {connect} from 'react-redux';
import {Container, Grid, CircularProgress} from '@material-ui/core';
import TeamCard from './TeamCard';

import './Teams.scss';

const Teams = ({teams}) => {
  return(
    <div className="teams">
      <Container>
        <h1 className="teams__title">
          Teams
        </h1>
        <Grid container spacing={3} className="teams__list" alignItems="center" justify="center">
          {teams.length ? teams.map(team => <TeamCard team={team} key={team.team_id} />) : <CircularProgress className="teams__progress" />}
        </Grid>
      </Container>
    </div>
  )
}

export default connect(
  state => ({
    teams: state.teams
  })
)(Teams);