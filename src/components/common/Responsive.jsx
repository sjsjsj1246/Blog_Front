import React from 'react';
import styled from 'styled-components';

const ResponsiveWrapper = styled.div`
  padding: 0 1rem;
  width: 1024;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 786px) {
    width: 100%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveWrapper {...rest}>{children}</ResponsiveWrapper>;
};

export default Responsive;
