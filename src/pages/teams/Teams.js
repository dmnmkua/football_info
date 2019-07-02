import React, { Component } from 'react';
import {Container, Grid, CircularProgress} from '@material-ui/core';
import {fetchTeams} from '../../fetch';
import TeamCard from './TeamCard';

import './Teams.scss';

export default class Home extends Component {

  state = {
    teams: []
  }

  componentDidMount() {
    this.setTeams();
  }

  setTeams = () => {
    fetchTeams()
      .then(({data}) => {
        this.setState({teams: data.api.teams});
      })
  }

  render() {
    const {teams} = this.state;

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
}