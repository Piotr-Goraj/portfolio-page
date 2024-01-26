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
import powerLogo from '../../imgs/logo_power_management.png';
import aquaLogo from '../../imgs/aqua.png';

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
        link='https://github.com/ScienceWebProjects/fragor-portfolio'
      />
      <ProjectInfo
        image={powerLogo}
        title='Power control system'
        description={intl.formatMessage({
          id: 'PCS-description',
          defaultMessage: 'PSC-description',
        })}
        link='https://github.com/Piotr-Goraj/power-control-system'
      />
      <ProjectInfo
        image={pgLogo}
        title='Portfolio page'
        description={intl.formatMessage({
          id: 'portfolio-description',
          defaultMessage: 'portfolio-description',
        })}
        link='https://github.com/Piotr-Goraj/portfolio-page'
      />
      {/* <ProjectInfo
        image=''
        title='Family assistant'
        description={intl.formatMessage({
          id: 'FA-description',
          defaultMessage: 'FA-description',
        })}
        link=''
      /> */}
      <ProjectInfo
        image={aquaLogo}
        title='Aquarium automatition'
        description={intl.formatMessage({
          id: 'aquarium-description',
          defaultMessage: 'aquarium-description',
        })}
        link='https://github.com/Piotr-Goraj/aquarium-automatition'
      />
    </div>
  );
};

export default PortfolioProjects;
