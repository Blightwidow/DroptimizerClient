import styled from 'styled-components';

const ProgressBar = styled.div<{ percent: number }>`
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  overflow: hidden;
  background-color: #575757;

  &::after {
    content: '';
    position: absolute;
    border-radius: 2px;
    overflow: hidden;
    top: 0;
    bottom: 0;
    left: 0;
    right: ${({ percent }) => `${Math.max(0, Math.min(100, 100 - percent))}%`};
    background: rgba(28, 180, 111, 1);
    z-index: 1;
  }
`;

export default ProgressBar;
