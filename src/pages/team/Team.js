import React, { Component } from 'react';
import {Container, CircularProgress, Grid} from '@material-ui/core';
import {fetchTeam} from '../../fetch';

export default class Team extends Component {
  state = {
    team: {}
  }

  componentDidMount() {
    this.setTeam();
  }

  setTeam = () => {
    const id = this.props.match.params.id;

    fetchTeam(id)
      .then(({data}) => {
        this.setState({team: data.api.teams[0]});
      })
  }

  render() {
    const {team} = this.state;
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
      <div>
        <h2>{name}</h2>
        <img src={logo} alt="name"/>
        <p>Country: {country}</p>
        <p>Founded: {founded}</p>
        <div>
          <h3>Venue</h3>
          <ul>
            <li>Name: {venue_name}</li>
            <li>Capacity: {venue_capacity}</li>
            <li>Surface: {venue_surface}</li>
            <li>Address: {venue_address}</li>
            <li>City: {venue_city}</li>
          </ul>
        </div>
      </div>
    );

    return(
      <div className="team">
        <Container>
          {Object.keys(team).length
          ? teamTemplate
          : <Grid container alignItems="center" justify="center" style={{marginTop: 100}}><CircularProgress /></Grid>}
        </Container>
      </div>
    )
  }
}