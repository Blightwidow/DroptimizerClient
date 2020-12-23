import styled from 'styled-components';

const RANK_MAPPING: { [classId: number]: string } = {
  1: '#ffc400',
  2: '#d3d3d3',
  3: '#7e4d1f',
};

const Rank = styled.span<{ rank: number }>`
  display: block;
  text-align: center;
  font-weight: 600;
  font-size: 1rem;
  color: ${({ rank }) => RANK_MAPPING[rank] || 'inherit'};
`;

export default Rank;
