// libs
import React from 'react';

// components
import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';

// scss
import './scss/_ProjectInfo.scss';

interface ProjectInfoProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  image,
  title,
  description,
  link,
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
  };

  return (
    <div
      className='project__info'
      style={backgroundImageStyle}
    >
      <div className='project__info-hover'>
        <h1 className='info__title'>{title}</h1>
        <div className='info__description'>{description}</div>
        <Button
          type='primary'
          htmlType='button'
          className='info__btn'
        >
          <FormattedMessage
            id='see-more'
            defaultMessage={'< See more >'}
          />
        </Button>
      </div>
    </div>
  );
};

export default ProjectInfo;
