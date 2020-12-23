import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ empty: boolean }>`
  display: flex;
  flex-direction: column;
  background-color: #272727;
  margin: 12px;
  padding: 8px;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 8px 24px;
  min-height: 100px;
`;

const EmptyMessage = styled.p`
  margin: auto;
`;

const Menu: React.FC<{ placeholder: string } & React.HTMLProps<HTMLDivElement>> = ({
  placeholder,
  children,
}) => {
  if (React.Children.count(children) === 0) {
    return (
      <Wrapper empty={true}>
        <EmptyMessage>{placeholder} </EmptyMessage>
      </Wrapper>
    );
  }
  return <Wrapper empty={false}>{children}</Wrapper>;
};

export default Menu;
