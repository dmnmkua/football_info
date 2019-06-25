import React from 'react';

const NavItem = props => {
  const {link, name} = props.item;

  return (
    <li className="nav__item">
      <a href={link} className="nav__link">
        {name}
      </a>
    </li>
  )
}

export default NavItem;