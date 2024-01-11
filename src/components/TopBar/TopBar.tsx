// libs
import React from 'react';

// components
import SelectLanguage from './SelectLanguage';
import NavBar from './NavBar';

// UI elements
import logo from '../../imgs/PG_logo.svg';

// scss
import './scss/_TopBar.scss';

const TopBar: React.FC = () => {
  return (
    <header className='header-bar'>
      <img
        className='header-bar__logo'
        src={logo}
        alt='logo'
      />
      <SelectLanguage />
      <NavBar />
    </header>
  );
};

export default TopBar;
