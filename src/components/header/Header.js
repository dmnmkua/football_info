import React from 'react';
import {Container} from '@material-ui/core';
import Nav from '../nav';
import Logo from '../logo';
import SearchField from '../searchField';

import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <Container className="container">
        <Nav/>
        <Logo/>
        <SearchField/>
      </Container>
    </header>
  )
};

export default Header;