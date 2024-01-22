// libs
import React from 'react';

// hooks
import { useIntl } from 'react-intl';

// components
import ProjectInfo from './ProjectInfo';

// scss
import './scss/_PortfolioProjects.scss';

// UI elements
import fragorLogo from '../../imgs/fragor-white.png';
import pgLogo from '../../imgs/PG_logo.svg';

const PortfolioProjects: React.FC = () => {
  const intl = useIntl();

  return (
    <div className='projects__wrapper'>
      <ProjectInfo
        image={fragorLogo}
        title='3D printing assistant'
        description={intl.formatMessage({
          id: 'fragor-description',
          defaultMessage: 'FraGor-description',
        })}
        link=''
      />
      <ProjectInfo
        image=''
        title='Power control system'
        description={intl.formatMessage({
          id: 'PCS-description',
          defaultMessage: 'PSC-description',
        })}
        link=''
      />
      <ProjectInfo
        image={pgLogo}
        title='Portfolio page'
        description={intl.formatMessage({
          id: 'portfolio-description',
          defaultMessage: 'portfolio-description',
        })}
        link=''
      />
      <ProjectInfo
        image=''
        title='Family assistant'
        description={intl.formatMessage({
          id: 'FA-description',
          defaultMessage: 'FA-description',
        })}
        link=''
      />
      <ProjectInfo
        image=''
        title='Aquarium automatition'
        description={intl.formatMessage({
          id: 'aquarium-description',
          defaultMessage: 'aquarium-description',
        })}
        link=''
      />
    </div>
  );
};

export default PortfolioProjects;
