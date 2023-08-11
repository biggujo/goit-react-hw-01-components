import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  width: 100%;
  height: 75px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 0;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  gap: 7px;

  ${({ bgColor }) => {
    if (bgColor) {
      return `background-color: ${bgColor}`;
    }
  }}
`;

export const Text = styled.span`
  font-size: 18px;

  ${({ isBold }) => {
    if (isBold) {
      return 'font-weight: 700';
    }
  }}
`;
