import React from 'react';

import imageLogo from '../../assets/images/logo.jpg';
import './Logo.scss';

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={imageLogo} alt="logo" className="logo__img"/>
    </a>
  )
}

export default Logo;