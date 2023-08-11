import styled from 'styled-components';

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f3;
  }
`;

export const BodyCell = styled.td`
  padding-left: 20px;

  text-transform: capitalize;
`;
