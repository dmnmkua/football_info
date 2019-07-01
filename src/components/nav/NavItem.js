import React from 'react';
import {NavLink} from 'react-router-dom';

const NavItem = props => {
  const {link, name} = props.item;

  return (
    <li className="nav__item">
      <NavLink to={link} className="nav__link">
        {name}
      </NavLink>
    </li>
  )
}

export default NavItem;