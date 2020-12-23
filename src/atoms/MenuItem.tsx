import styled from 'styled-components';

const MenuItem = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 4px;
  padding: 8px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #272727;
  transition: all .3s ease-in-out;

  &[aria-selected='true'] {
    margin-right: -20px;
    padding-right: 28px;
    border-radius: 8px 16px 0 8px;
    background-color: rgba(28, 180, 111, 1);
  }

  &[aria-selected='false']:hover {
    background-color: rgba(28, 180, 111, 0.2);
  }
`;

export default MenuItem;
