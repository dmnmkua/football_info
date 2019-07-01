import React from 'react';

import NavItem from './NavItem';

import routes from '../../routes';

import './Nav.scss';

const Nav = () => {
  const links = [
    {
      id: 0,
      name: 'Home',
      link: routes.home
    },
    {
      id: 1,
      name: 'Teams',
      link: routes.teams
    },
    {
      id: 2,
      name: 'Fixtures',
      link: routes.fixtures
    },
    {
      id: 3,
      name: 'Odds',
      link: routes.odds
    },
  ]
  return (
    <nav className="nav">
      <ul className="nav__list">
        {
          links.map(item => (
            <NavItem
              item={item}
              key={item.id} />
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav;