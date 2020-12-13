import React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background: #272727;
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
  grid-template-columns: 50px 1fr 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "toolbar bossMenu itemMenu upgradeMenu";
`;

const Toolbar = styled.div`
  grid-area: toolbar;
  background-color: #1c1c1c;
  padding: 4px;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Toolbar />
      {children}
    </Wrapper>
  );
};

export default Layout;
