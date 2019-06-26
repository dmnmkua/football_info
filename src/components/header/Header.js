import React from 'react';

import Nav from '../nav';
import Logo from '../logo';
import SearchField from '../searchField';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Nav/>
        <Logo/>
        <SearchField/>
      </div>
    </header>
  )
};

export default Header;