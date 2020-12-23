/* eslint react/button-has-type: 0 */
import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9;
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 10;
  pointer-events: none;

  & > * {
    pointer-events: initial;
  }
`;

const Popup: React.FC<
  { onClose: () => void } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ onClose, children, ref, ...props }) => {
  React.useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (onClose) onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [onClose]);

  return (
    <React.Fragment>
      <Backdrop onClick={onClose} />
      <Wrapper {...props}>{children}</Wrapper>
    </React.Fragment>
  );
};

export default Popup;
