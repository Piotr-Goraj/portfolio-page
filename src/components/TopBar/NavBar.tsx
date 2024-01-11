// libs
import React from 'react';
import { Link } from 'react-scroll';

// hooks
import { useWindowWidth } from '../../hooks/useWindowSize';

// UI elements
import { Button } from 'antd';

// components
import { FormattedMessage } from 'react-intl';

// scss
import './scss/_NavBar.scss';

const NavBar: React.FC = () => {
  const windowWidth = useWindowWidth();

  const offset = windowWidth <= 650 ? -130 : -175;

  return (
    <nav className='header-bar__nav'>
      <Link
        to='content__about'
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        <Button
          className='nav__btn'
          type='text'
        >
          <FormattedMessage
            id='about'
            defaultMessage={'About'}
          />
        </Button>
      </Link>
      <Link
        to='content__portfolio'
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        <Button
          type='text'
          className='nav__btn'
        >
          <FormattedMessage
            id='portfolio'
            defaultMessage={'Portfolio'}
          />
        </Button>
      </Link>
      <Link
        to='content__contact'
        spy={true}
        smooth={true}
        offset={offset}
        duration={500}
      >
        <Button
          type='text'
          className='nav__btn'
        >
          <FormattedMessage
            id='contact'
            defaultMessage={'Contact'}
          />
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
