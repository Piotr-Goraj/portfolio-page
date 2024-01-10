// libs
import React from 'react';
import { Link } from 'react-scroll';

// UI elements
import { Button } from 'antd';

// components
import { FormattedMessage } from 'react-intl';

// scss
import './scss/_NavBar.scss';

const NavBar: React.FC = () => {
  return (
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
  );
};

export default NavBar;
