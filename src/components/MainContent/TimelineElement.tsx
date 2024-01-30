// libs
import React from 'react';

// components

// scss
import './scss/_TimelineElement.scss';

type MonthYearFormat =
  | `${number}.${number}`
  | `${number}.${number} - ${number}.${number}`
  | `${number}.${number} - ${string}`;

interface TimelineElementProps {
  date: MonthYearFormat;
  name: string;
  details: string;
  description: string;
}

const TimelineElement: React.FC<TimelineElementProps> = ({
  date,
  name,
  details,
  description,
}) => {
  return (
    <div className='timeline-element'>
      <div className='element__date'>{date}</div>
      <div className='element__marker'>
        <div className='marker__dot'></div>
        <div className='marker__line'></div>
      </div>
      <div className='element__description'>
        <h1 className='description__name'>{name}</h1>
        <h2 className='description__details'>{details}</h2>
        <div className='description__text'>{description}</div>
      </div>
    </div>
  );
};

export default TimelineElement;
