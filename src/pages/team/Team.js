import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import {Container, CircularProgress, Grid, Paper} from '@material-ui/core';
import {getTeam} from '../../redux/actions/team';

import './Team.scss';

const Team = props => {
  useEffect(() => props.onGetTeam(props.match.params.id), []);
  const {team} = props;
  const {
    country,
    founded,
    logo,
    name,
    venue_address,
    venue_capacity,
    venue_name,
    venue_city,
    venue_surface
  } = team;
  const teamTemplate = (
    <Grid container spacing={3}>
      <Grid item>
        <Paper className="team__paper">
          <h2>{name}</h2>
          <img src={logo} alt="name"/>
          <p>Country: {country}</p>
          <p>Founded: {founded}</p>
          <div>
            <h3>Stadium</h3>
            <ul>
              <li>Name: {venue_name}</li>
              <li>Capacity: {venue_capacity}</li>
              <li>Surface: {venue_surface}</li>
              <li>Address: {venue_address}</li>
              <li>City: {venue_city}</li>
            </ul>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );

  return(
    <div className="team">
      <Container>
        <h1>
          Team
        </h1>
        {Object.keys(team).length
        ? teamTemplate
        : <Grid container alignItems="center" justify="center" style={{marginTop: 100}}><CircularProgress /></Grid>}
      </Container>
    </div>
  )
}

export default connect(
  state => ({
    team: state.team
  }),
  dispatch => ({
    onGetTeam: id => {
      dispatch(getTeam(id));
    }
  })
)(Team)