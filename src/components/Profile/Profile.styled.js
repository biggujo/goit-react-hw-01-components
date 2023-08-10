import styled from 'styled-components';

export const Card = styled.article`
  width: 300px;

  box-shadow: ${props => props.theme.shadow.primary};

  border-radius: 7px;
`;
