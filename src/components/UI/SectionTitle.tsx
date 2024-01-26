// libs
import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: #ffc86b;
  font-size: 2rem;
  text-align: start;
  margin: 0.625rem 0;
  font-weight: 400;

  border-bottom: 1px #ffc86b solid;

  @media (min-width: 650px) {
    width: 100%;
  }
`;

interface SectionTitleProps {
  children?: React.ReactNode;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, title }) => {
  return (
    <div>
      <style>{`
    @media (min-width: 650px) {
      div {
        width: 100%;
      }
    }
  `}</style>
      <StyledTitle>
        {children}
        {` ${title}`}
      </StyledTitle>
    </div>
  );
};

export default SectionTitle;
