import React from 'react';

import Nav from '../nav';
import Logo from '../logo';
import Search from '../search';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Nav/>
        <Logo/>
        <Search/>
      </div>
    </header>
  )
};

export default Header;