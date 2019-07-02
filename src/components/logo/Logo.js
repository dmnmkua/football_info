import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../routes';

import imageLogo from '../../assets/images/logo.jpg';
import './Logo.scss';

const Logo = () => {
  return (
    <Link to={routes.home} className="logo">
      <img
        src={imageLogo}
        alt="logo"
        className="logo__img"/>
    </Link>
  )
}

export default Logo;