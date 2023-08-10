import styled from 'styled-components';

export const Card = styled.article`
  width: 250px;

  box-shadow: ${props => props.theme.shadow.primary};

  border-radius: 7px;
`;
