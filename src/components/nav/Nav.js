import React from 'react';

import NavItem from './NavItem';

import './Nav.scss';

const Nav = () => {
  const links = [
    {
      id: 0,
      name: 'Home',
      link: '/'
    },
    {
      id: 1,
      name: 'Teams',
      link: '/teams'
    },
    {
      id: 2,
      name: 'Fixtures',
      link: '/fixtures'
    },
    {
      id: 3,
      name: 'Odds',
      link: '/odds'
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