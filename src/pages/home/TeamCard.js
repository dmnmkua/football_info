import React from 'react';

const TeamCard = props => {
  const {venue_city, logo, name} = props.team;

  return (
    <li className="home__item">
      <h2 className="home_card-title">
          {name}
        </h2>

        <img src={logo} alt="name" className="home__card-img" />

        <div className="home__card-city">
          City: {venue_city}
        </div>
    </li>
  )
}

export default TeamCard;