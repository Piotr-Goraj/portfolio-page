// libs
import React from 'react';

// scss
import './scss/_TopBar.scss';

const TopBar: React.FC = () => {
  return (
    <header className='header-bar'>
      <div className='header-bar__logo'>LOGO</div>
      <div className='header-bar__language'>Select Language</div>
      <nav className='header-bar__nav'>Page navigation</nav>
      <div className='header-bar__search'>Search</div>
    </header>
  );
};

export default TopBar;
