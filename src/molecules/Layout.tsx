import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Toolbar from './Toolbar';

const GlobalStyle = createGlobalStyle`
  body {
    background: #1c1c1c;
    color: #DDD;
    font-size: 14px;
    font-family: verdana,arial,sans-serif;
    padding-bottom: 3em;
    margin: 0;
    padding: 0;
    height: 100vh;
  }

  a {
    color: #FFF;
    text-decoration: none;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: 'toolbar .';
`;

const ContentWrapper = styled.div`
  display: flex;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Toolbar />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

export default Layout;
