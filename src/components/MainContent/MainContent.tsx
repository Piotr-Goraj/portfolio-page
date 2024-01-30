// libs
import React from 'react';

// hooks
import { useIntl } from 'react-intl';

// components
import { FormattedMessage } from 'react-intl';
import Skills from './Skills';
import Contact from './Contact';
import TimelineElement from './TimelineElement';

// UI elements
import '../../fonts/fontello/css/portfolio.css';
import profile from '../../imgs/profile.png';
import SectionTitle from '../UI/SectionTitle';

// scss
import './scss/_MainContent.scss';
import PortfolioProjects from './PortfolioProjects';

const MainContent: React.FC = () => {
  const intl = useIntl();

  return (
    <main className='main-content'>
      <section className='content__iam'>
        <div className='iam__text-area'>
          <div className='text-area__name'>
            <FormattedMessage
              id='im'
              defaultMessage={"I'M"}
            />
            <b>Piotr Goraj</b>
          </div>
          <div>
            <FormattedMessage
              id='im-title'
              defaultMessage={"Master's Student of AWSB & Frontend Developer"}
            />
          </div>
        </div>
        <img
          src={profile}
          alt='profile'
        />
      </section>

      <SectionTitle
        title={intl.formatMessage({
          id: 'about-me',
          defaultMessage: 'About me',
        })}
      >
        <i className='icon-about'></i>
      </SectionTitle>

      <section
        className='content__about'
        id='content__about'
      >
        <div className='about__articles article__about'>
          <article className='about__txt'>
            <FormattedMessage
              id='content-about'
              defaultMessage={'About content'}
            />
          </article>
        </div>

        <div className='about__skills article__skills'>
          <h2>
            <FormattedMessage
              id='skills'
              defaultMessage={'Skills'}
            />
          </h2>
          <Skills />
        </div>

        <div className='about__articles article__intrests'>
          <article className='about__txt'>
            <FormattedMessage
              id='content-intrests'
              defaultMessage={'Intrests content'}
            />
          </article>
        </div>
      </section>

      <SectionTitle
        title={intl.formatMessage({
          id: 'portfolio',
          defaultMessage: 'Portfolio',
        })}
      >
        <i className='icon-portfolio'></i>
      </SectionTitle>
      <section
        className='content__portfolio'
        id='content__portfolio'
      >
        <PortfolioProjects />
      </section>

      <SectionTitle
        title={intl.formatMessage({
          id: 'experience',
          defaultMessage: 'Experience',
        })}
      >
        <i className='icon-experience'></i>
      </SectionTitle>
      <section
        className='content__experience'
        id='content__experience'
      >
        <TimelineElement
          date='03.2023'
          name={intl.formatMessage({
            id: 'experience-fragor-name',
            defaultMessage: 'Non-commercial (group project)',
          })}
          details={intl.formatMessage({
            id: 'experience-fragor-details',
            defaultMessage: 'Frontend-dev',
          })}
          description={intl.formatMessage({
            id: 'experience-fragor-description',
            defaultMessage: 'FraGor experience',
          })}
        />
      </section>

      <SectionTitle
        title={intl.formatMessage({
          id: 'education',
          defaultMessage: 'Education',
        })}
      >
        <i className='icon-education'></i>
      </SectionTitle>
      <section
        className='content__education'
        id='content__education'
      >
        <TimelineElement
          date='10.2023 - present'
          name={intl.formatMessage({
            id: 'education-wsb-name',
            defaultMessage: 'WSB University',
          })}
          details={intl.formatMessage({
            id: 'education-master',
            defaultMessage: 'Master of Engineering',
          })}
          description={intl.formatMessage({
            id: 'education-wsb',
            defaultMessage: 'WSB education',
          })}
        />

        <TimelineElement
          date='10.2019 - 01.2023'
          name={intl.formatMessage({
            id: 'education-cracow-name',
            defaultMessage: 'Cracow University of Technology',
          })}
          details={intl.formatMessage({
            id: 'education-bechelor',
            defaultMessage: 'Bachelor of Engineering',
          })}
          description={intl.formatMessage({
            id: 'education-cracow',
            defaultMessage: 'Cracow University of Technology education',
          })}
        />
      </section>

      <SectionTitle
        title={intl.formatMessage({
          id: 'contact',
          defaultMessage: 'Contact',
        })}
      >
        <i className='icon-contact'></i>
      </SectionTitle>
      <section
        className='content__contact'
        id='content__contact'
      >
        <Contact />
      </section>
    </main>
  );
};

export default MainContent;
