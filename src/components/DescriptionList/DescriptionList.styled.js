import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  width: 100%;

  background-color: #efeff3;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 5px;
  height: 75px;

  border: 1px solid #d3d3d3;
  border-collapse: collapse;
`;

export const Text = styled.span`
  text-transform: capitalize;

  color: #7f7f7f;
`;

export const TextStressed = styled.span`
  font-weight: 600;

  color: #000000;
`;
