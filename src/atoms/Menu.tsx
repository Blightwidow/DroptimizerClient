import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
  border-right: 1px solid #3d3d3d;
`;

const Menu: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Menu;
