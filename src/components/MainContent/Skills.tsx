// libs
import React from 'react';

// components
import Skill from './Skill';

// UI elements
import jsLogo from '../../imgs/logos/js_logo.png';
import reactLogo from '../../imgs/logos/react_logo.png';
import jquerryLogo from '../../imgs/logos/jquery_logo.png';
import tsLogo from '../../imgs/logos/ts_logo.png';

import cssLogo from '../../imgs/logos/css_logo.png';
import sassLogo from '../../imgs/logos/sass_logo.png';
import htmlLogo from '../../imgs/logos/html5_logo.png';
import gitLogo from '../../imgs/logos/git_logo.png';

import dockerLogo from '../../imgs/logos/docker_logo.png';
import pgadminLogo from '../../imgs/logos/pgadmin_logo.png';
import githubLogo from '../../imgs/logos/github_logo.png';

import jiraLogo from '../../imgs/logos/jira_logo.png';
import ubuntuLogo from '../../imgs/logos/ubuntu_logo.png';
import winLogo from '../../imgs/logos/win_logo.png';

// scss
import './scss/_Skills.scss';

const Skills: React.FC = () => {
  return (
    <div className='skills__container'>
      <div className='container__wrapper'>
        <Skill
          title='Java Script'
          icon={jsLogo}
        />
        <Skill
          title='React.js'
          icon={reactLogo}
        />
        <Skill
          title='jQuerry'
          icon={jquerryLogo}
        />
        <Skill
          title='Type Script'
          icon={tsLogo}
        />

        <Skill
          title='CSS'
          icon={cssLogo}
        />
        <Skill
          title='SCSS/SASS'
          icon={sassLogo}
        />
        <Skill
          title='HTML'
          icon={htmlLogo}
        />
        <Skill
          title='Git'
          icon={gitLogo}
        />
        <Skill
          title='GitHub'
          icon={githubLogo}
        />
        <Skill
          title='Docker'
          icon={dockerLogo}
        />
        <Skill
          title='pgAdmin'
          icon={pgadminLogo}
        />
        <Skill
          title='Jira & confluence'
          icon={jiraLogo}
        />
        <Skill
          title='Ubuntu OS'
          icon={ubuntuLogo}
        />

        <Skill
          title='Windows OS'
          icon={winLogo}
        />
      </div>
    </div>
  );
};

export default Skills;
