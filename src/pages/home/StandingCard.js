import React, {useState} from 'react';
import {Paper, Button} from '@material-ui/core';

const StandingCard = props => {
  const {standing} = props;
  const [open, setOpen] = useState(true);
  
  return (
    <Paper className="home__paper" >
      <h4 className="home__paper-title">
        {standing.rank}.
        <img src={standing.logo} alt="standing.teamName" className="home__paper-logo"/>
        {standing.teamName} - {standing.points} points
      </h4>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Show more info
      </Button>
      <div className="home__paper-wrapper" hidden={open}>
      <table className="home__paper-table">
        <thead>
          <tr>
            <th></th>
            <th>All</th>
            <th>Home</th>
            <th>Away</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matchs played</td>
            <td>{standing.all.matchsPlayed}</td>
            <td>{standing.home.matchsPlayed}</td>
            <td>{standing.away.matchsPlayed}</td>
          </tr>
          <tr>
            <td>Win</td>
            <td>{standing.all.win}</td>
            <td>{standing.home.win}</td>
            <td>{standing.away.win}</td>
          </tr>
          <tr>
            <td>Draw</td>
            <td>{standing.all.draw}</td>
            <td>{standing.home.draw}</td>
            <td>{standing.away.draw}</td>
          </tr>
          <tr>
            <td>Lose</td>
            <td>{standing.all.lose}</td>
            <td>{standing.home.lose}</td>
            <td>{standing.away.lose}</td>
          </tr>
          <tr>
            <td>Goals for</td>
            <td>{standing.all.goalsFor}</td>
            <td>{standing.home.goalsFor}</td>
            <td>{standing.away.goalsFor}</td>
          </tr>
          <tr>
            <td>Goals Against</td>
            <td>{standing.all.goalsAgainst}</td>
            <td>{standing.home.goalsAgainst}</td>
            <td>{standing.away.goalsAgainst}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </Paper>
  )
}

export default StandingCard;