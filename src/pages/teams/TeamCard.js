import React from 'react';
import {Grid, Card} from '@material-ui/core';
import {Link} from 'react-router-dom';
import routes from '../../routes';

const TeamCard = props => {
  const {venue_city, logo, name, team_id} = props.team;

  return (
    <Grid item xs={12} sm={6} lg={3}>
      <Link to={`${routes.teams}/${team_id}`} className="teams__link">
          <Card className="teams__item">
            <h2 className="teams_card-title">
              {name}
            </h2>

            <img src={logo} alt="name" className="teams__card-img" />

            <div className="teams__card-city">
              City: {venue_city}
            </div>
          </Card>
      </Link>
    </Grid>
  )
}

export default TeamCard;