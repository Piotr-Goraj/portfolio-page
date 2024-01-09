// libs
import React from 'react';
import { Button } from 'antd';

// components
import { FormattedMessage } from 'react-intl';
import SelectLanguage from './SelectLanguage';

// scss
import './scss/_TopBar.scss';

const TopBar: React.FC = () => {
  return (
    <header className='header-bar'>
      <div className='header-bar__logo'>LOGO</div>
      <SelectLanguage />
      <nav className='header-bar__nav'>
        <Button
          type='text'
          style={{ color: '#fff' }}
        >
          <FormattedMessage
            id='about'
            defaultMessage={'About'}
          />
        </Button>
        <Button
          type='text'
          style={{ color: '#fff' }}
        >
          <FormattedMessage
            id='portfolio'
            defaultMessage={'Portfolio'}
          />
        </Button>
        <Button
          type='text'
          style={{ color: '#fff' }}
        >
          <FormattedMessage
            id='contact'
            defaultMessage={'Contact'}
          />
        </Button>
      </nav>
      <div className='header-bar__search'>
        <FormattedMessage
          id='search'
          defaultMessage={'Search'}
        />
      </div>
    </header>
  );
};

export default TopBar;
