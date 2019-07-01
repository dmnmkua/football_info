import React, { Component } from 'react';

import {getTeams} from '../../fetch';
import TeamCard from './TeamCard';

import './Home.scss';

export default class Home extends Component {

  state = {
    teams: []
  }

  componentDidMount() {
    this.setTeams();
  }

  setTeams = () => {
    getTeams()
      .then(({data}) => {
        this.setState({teams: data.api.teams});
      })
  }

  render() {
    const {teams} = this.state;

    return(
      <div className="home">
        <div className="container">
          <h1 className="home__title">
            Home
          </h1>

          <ul className="home__list">
            {teams.map(team => <TeamCard team={team} key={team.team_id} />)}
          </ul>
        </div>
      </div>
    )
  }
}