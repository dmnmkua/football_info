import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = props => {
  const {link, name} = props.item;

  return (
    <li className="nav__item">
      <NavLink
        exact={true}
        to={link}
        className="nav__link"
        activeClassName="nav__link--active">
        {name}
      </NavLink>
    </li>
  )
}

export default NavItem;