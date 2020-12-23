import styled from 'styled-components';

const CLASS_MAPPING: { [classId: number]: string } = {
  1: '#c79c6e',
  2: '#f58cba',
  3: '#abd473',
  4: '#fff569',
  5: '#ffffff',
  6: '#c41f3b',
  7: '#0070de',
  8: '#40c7eb',
  9: '#8787ed',
  10: '#00ff96',
  11: '#ff7d0a',
  12: '#a330c9',
};

const PlayerName = styled.span<{ classId: number }>`
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  color: ${({ classId }) => CLASS_MAPPING[classId] || 'inherit'};
`;

export default PlayerName;
