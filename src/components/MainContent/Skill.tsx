// libs
import React from 'react';

// scss
import './scss/_Skill.scss';

interface SkillProps {
  title: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ title, icon }) => {
  return (
    <div className='wrapper__skill'>
      <img
        src={icon}
        alt='logo'
      />
      <h3>{title}</h3>
    </div>
  );
};

export default Skill;
